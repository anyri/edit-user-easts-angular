import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { TabsetComponent } from 'ngx-bootstrap';
import { User } from '../user.model';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  routeSubscriber: Subscription;
  user: User = new User();
  basicUser: User;
  pending: boolean;

  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) {
    this.pending = true;
   }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(params => {      
      this.getUser( params['id'] );
    });
  }

  private getUser(id) {
    this.userService.getUser(id).subscribe(
      data => {
        if(data.status == 'fail')
          this.router.navigate(['error/user_not_found']);

        // console.log(`User ${JSON.stringify(data)}`);
        this.user = new User( data.user );
        this.pending = false;
        this.basicUser = Object.assign({}, this.user);
      },
      error => {
        console.log('Error get user');
        this.router.navigate(['error/bad_request']);
      }
    )
  }

  public editUser() {
    this.userService.updateUser(this.user).subscribe(
      data => {
        console.log(`updateUser status = ${data.status}`);        
        this.basicUser = Object.assign({}, this.user);
      },
      error => {
        console.log(error);
      }
    )
  }

  public reset() {
    this.user = Object.assign({}, this.basicUser);
  }

}
