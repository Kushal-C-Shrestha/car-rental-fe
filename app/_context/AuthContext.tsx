"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearAccessToken,
  getAccessToken,
  login as loginRequest,
  refreshSession,
  register as registerRequest,
} from "@/lib/api";

type AuthUser = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  role?: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type AuthContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  register: (payload: RegisterPayload) => Promise<void>;
  user: AuthUser | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function getUserFromResponse(response: unknown) {
  const user = (response as { data?: { user?: AuthUser } })?.data?.user;

  return user || null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function hydrateSession() {
      if (!getAccessToken()) {
        try {
          const response = await refreshSession();

          if (isMounted) {
            setUser(getUserFromResponse(response));
          }
        } catch {
          clearAccessToken();
          if (isMounted) {
            setUser(null);
          }
        } finally {
          if (isMounted) {
            setIsLoading(false);
          }
        }

        return;
      }

      try {
        const response = await refreshSession();

        if (isMounted) {
          setUser(getUserFromResponse(response));
        }
      } catch {
        clearAccessToken();
        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    hydrateSession();

    return () => {
      isMounted = false;
    };
  }, []);

  async function login(payload: LoginPayload) {
    const response = await loginRequest(payload);
    setUser(getUserFromResponse(response));
  }

  async function register(payload: RegisterPayload) {
    const response = await registerRequest(payload);
    setUser(getUserFromResponse(response));
  }

  function logout() {
    clearAccessToken();
    setUser(null);
  }

  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
      register,
      user,
    }),
    [isLoading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
