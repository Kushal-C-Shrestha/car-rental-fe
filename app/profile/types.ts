export type ApiUser = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
};

export type Appointment = {
  id: string;
  status: string;
  pickupAt: string;
  dropoffAt: string;
  totalAmount: number;
  note?: string | null;
  user: ApiUser;
  vehicle: {
    id: string;
    slug: string;
    name: string;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;
    transmission: string;
    fuelType: string;
  };
  pickupLocation: {
    name: string;
    city: string;
  };
  dropoffLocation: {
    name: string;
    city: string;
  };
};

export type Review = {
  id: string;
  rating: number;
  comment?: string | null;
  createdAt: string;
  vehicle?: {
    id: string;
    slug: string;
    name: string;
  };
};

export type LoadState = "idle" | "loading" | "ready" | "error" | "signed-out";
