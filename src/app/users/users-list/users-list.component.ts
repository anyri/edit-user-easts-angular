import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  pending: boolean;

  constructor(private usersServise: UsersService, private router: Router) { 
    this.pending = true;
  }

  ngOnInit() {
    this.usersServise.getUsers().subscribe(
      data => {
        if(data.status == 'fail')
          this.router.navigate(['error/user_not_found']);

        // console.log(JSON.stringify(data));
        this.users = data.users;
        this.pending = false;
      },
      error => {
        console.log("Error get users"); 
        this.router.navigate(['error/bad_request']);
      }
    )
  }

 

}
