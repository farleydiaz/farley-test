import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../providers/user/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './signOut.html',
  styleUrls: ['./signOut.scss']
})
export class SignOut {
  constructor(
		public userService: UserService,
		public router: Router) { }


  public closeSesion(): void {
		this.userService.signOutUser()
		.then(() => {
			this.router.navigate(['login']);
		});
  }

}
