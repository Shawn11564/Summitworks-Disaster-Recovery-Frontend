import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private token: TokenStorageService) { }

  showAdminPages(): boolean {
    return this.token.getUser().roles.includes('ADMIN');
  }

  getIp(): string {
    return '3.91.6.210';
  }

}
