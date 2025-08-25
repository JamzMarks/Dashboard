import { apiFetch } from "@/lib/api/client";
import { LoginDto, SignUpDto } from "@/types/interfaces/authDto";
import { AuthResponse } from "@/types/interfaces/authResponse";


class AuthService {
  public async SignUp(data: SignUpDto): Promise<AuthResponse> {
    return await apiFetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  public async Login(data: LoginDto): Promise<AuthResponse> {
    return await apiFetch("/auth/signin", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

}

export const AuthClient = new AuthService();
