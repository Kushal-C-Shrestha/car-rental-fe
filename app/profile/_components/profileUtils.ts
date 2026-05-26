export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function statusClasses(status: string) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus === "cancelled") {
    return "bg-red-50 text-red-700 ring-red-100";
  }

  if (normalizedStatus === "completed") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  }

  if (normalizedStatus === "confirmed" || normalizedStatus === "active") {
    return "bg-blue-50 text-blue-700 ring-blue-100";
  }

  return "bg-amber-50 text-amber-700 ring-amber-100";
}
