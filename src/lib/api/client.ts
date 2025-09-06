const BASE_URL = process.env.AUTH_API_URL || "http://localhost:4000/api/v1";

export async function apiFetch<T>(
    path: string,
    options?: RequestInit,
): Promise<T>{
    console.log("Fetching:", `${BASE_URL}${path}`, options);
    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
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
    