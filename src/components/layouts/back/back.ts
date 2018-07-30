import { Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../../../providers/auth/AuthService';
import { Subscription, Observable } from 'rxjs';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-component-layouts-back',
  templateUrl: './back.html',
  styleUrls: [ './back.scss' ]
})
export class ComponentLayoutsBack implements OnDestroy, OnInit {
  private userSubscription: Subscription;
  public user: Observable<User>;

  constructor(private auth: AuthService) {}

  ngOnInit(){
    this.user = this.auth.user$;
      // this.userSubscription = this.auth.user$.subscribe((info: any) => {
      //   console.log("info", );
      //   if (info) {
      //     this.user = {...info};
      //   } 
      // });

  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}

