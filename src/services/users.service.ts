import { apiFetch } from "@/lib/api/client";

class UsersService {
  public async GetUsers(): Promise<unknown> {
    return await apiFetch("/users", {
      method: "GET",
    });
  }

}

export const UsersClient = new UsersService();
