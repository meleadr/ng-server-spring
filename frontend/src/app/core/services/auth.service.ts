import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string;

  getToken(): string {
    return this.token;
  }

  login(): void {
    this.token = 'MyFakeToken';
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

}
