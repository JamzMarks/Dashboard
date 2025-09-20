import { apiFetch } from "@/lib/api/client";
import { LoginDto, SignUpDto } from "@/types/interfaces/authDto";
import { AuthResponse } from "@/types/interfaces/authResponse";


class AuthService {
  public BASE_URL: string
  constructor(){
    this.BASE_URL = process.env.AUTH_API_URL || "https://localhost:4000/api/v1";
  }
  public async SignUp(data: SignUpDto): Promise<AuthResponse> {
    return await apiFetch(this.BASE_URL, "/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  public async Login(data: LoginDto): Promise<AuthResponse> {
    return await apiFetch(this.BASE_URL, "/auth/signin", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

}

export const AuthClient = new AuthService();
