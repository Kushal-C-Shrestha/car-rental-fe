"use client";

import axios, {
  AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
const ACCESS_TOKEN_KEY = "car_rental_access_token";

type RetriableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

export function getAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearAccessToken() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

function getApiErrorMessage(error: unknown, fallback: string) {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      | { message?: string; errors?: Record<string, string> }
      | undefined;
    const fieldError = data?.errors
      ? Object.values(data.errors).find(Boolean)
      : undefined;

    return fieldError || data?.message || fallback;
  }

  return fallback;
}

const refreshClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetriableRequestConfig | undefined;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const response = await refreshClient.post("/auth/refresh");
      const accessToken = response.data?.data?.tokens?.accessToken;

      if (!accessToken) {
        clearAccessToken();
        return Promise.reject(error);
      }

      setAccessToken(accessToken);
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      clearAccessToken();
      return Promise.reject(refreshError);
    }
  },
);

export async function login(payload: { email: string; password: string }) {
  try {
    const response = await api.post("/auth/login", payload);
    const accessToken = response.data?.data?.tokens?.accessToken;

    if (accessToken) {
      setAccessToken(accessToken);
    }

    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Unable to sign in right now."));
  }
}

export async function register(payload: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const response = await api.post("/auth/register", payload);
    const accessToken = response.data?.data?.tokens?.accessToken;

    if (accessToken) {
      setAccessToken(accessToken);
    }

    return response.data;
  } catch (error) {
    throw new Error(
      getApiErrorMessage(error, "Unable to create your account right now."),
    );
  }
}

export async function refreshSession() {
  const response = await refreshClient.post("/auth/refresh");
  const accessToken = response.data?.data?.tokens?.accessToken;

  if (accessToken) {
    setAccessToken(accessToken);
  }

  return response.data;
}

export async function getMyAppointments() {
  const response = await api.get("/bookings");

  return response.data;
}

export async function getMyReviews() {
  const response = await api.get("/reviews/me");

  return response.data;
}

export async function getVehicles() {
  const response = await api.get("/vehicles");

  return response.data;
}

export async function getVehicleDetails(slug: string) {
  const response = await api.get(`/vehicles/${slug}`);

  return response.data;
}

export async function getPublicReviews() {
  const response = await getVehicles();
  const vehicles = response.data || [];
  const reviews = vehicles.flatMap(
    (vehicle: {
      name: string;
      slug: string;
      reviews?: Array<{
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        user?: {
          id: string;
          name: string;
        };
      }>;
    }) =>
      (vehicle.reviews || []).map((review) => ({
        ...review,
        vehicle: {
          name: vehicle.name,
          slug: vehicle.slug,
        },
      })),
  );

  return {
    message: "Reviews fetched successfully",
    data: reviews,
  };
}
