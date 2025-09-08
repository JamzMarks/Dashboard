import { apiFetch } from "@/lib/api/client";
import { ApiResponse } from "@/types/interfaces/apiResponse";
import { User } from "@/types/user/user.type";

class UsersService {
  public async GetUsers(): Promise<ApiResponse<User[]>> {
    return await apiFetch("/users", {
      method: "GET",
    });
  }

}

export const UsersClient = new UsersService();
