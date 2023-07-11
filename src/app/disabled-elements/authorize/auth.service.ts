import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  hasRole(role: string[]): Observable<boolean> {
    return of(role.includes('admin'));
  }
}
