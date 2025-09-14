import { apiFetch } from "@/lib/api/client";
import { ApiResponse } from "@/types/interfaces/apiResponse";
import { UserFilter } from "@/types/user/user-filters.type";
import { User } from "@/types/user/user.type";

class UsersService {
  public async GetUsers(filters: UserFilter): Promise<ApiResponse<User[]>> {
    return await apiFetch("/users", {
      method: "GET",
    });
  }

}

export const UsersClient = new UsersService();
