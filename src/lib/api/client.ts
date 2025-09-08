import { getSession } from "next-auth/react";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T>{
    const session = await getSession();

    const token = session?.user?.email;
    const BASE_URL = process.env.AUTH_API_URL || "https://localhost:4000/api/v1";

    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
         Authorization: token ? `Bearer ${token}` : "",
        ...(options?.method && options.method !== "GET"
          ? { "Content-Type": "application/json" }
          : {}),
        ...(options?.headers || {}),
      },
      credentials: "include",
    });

    if(!res.ok){
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || res.statusText)
    }
    return res.json()
}
    