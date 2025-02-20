import { JwtPayload, jwtDecode } from "jwt-decode";
import { UserData } from "../interfaces/UserData";

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<UserData>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if (!token) return true;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true;

      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Invalid Token:", error);
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token
    let idToken: string = localStorage.getItem("usertoken") || "";
    return idToken;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem("usertoken", idToken);
    // TODO: redirect to the home page
    window.location.assign("/");
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem("usertoken");
    // TODO: redirect to the login page
    window.location.assign("/");
  }
}

export default new AuthService();
