
import { apiFetch } from "@/lib/api/client";
import { ApiResponse } from "@/types/interfaces/apiResponse";
import { UserFilter } from "@/types/user/user-filters.type";
import { CreateUserDto, User, UserDto } from "@/types/user/user.type";

class UsersService {
  public BASE_URL: string
  constructor(){
    this.BASE_URL = process.env.AUTH_API_URL || "https://localhost:4000/api/v1";
  }
  public async GetUsers(filters: UserFilter): Promise<ApiResponse<User[]>> {
    return await apiFetch(this.BASE_URL,"/users", {
      method: "GET",
    });
  }

  public async CreateUser(createUserDto: CreateUserDto): Promise<ApiResponse<UserDto>>{
    return await apiFetch(this.BASE_URL, "/users", {
      method: "POST",
      body:  JSON.stringify(createUserDto)
    })
  }

}

export const UsersClient = new UsersService();
