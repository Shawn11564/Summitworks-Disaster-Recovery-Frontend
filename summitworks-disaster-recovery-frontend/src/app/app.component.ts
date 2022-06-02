import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './_services/settings.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'summitworks-disaster-recovery-frontend';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminPages = false;
  username: string = '';

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private settings: SettingsService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminPages = this.settings.showAdminPages();

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
