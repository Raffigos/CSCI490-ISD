import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] | any;
  selectedUser: User = {
    id: null,
    firstName: null,
    lastName: null,
    gender: null,
    email: null,
    password: null,
    course: null,
    number: null,
  };
  constructor(private dataService: DataService) {
    this.dataService.readUser().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
    });
  }

  ngOnInit(): void {}

  createUser(form: { value: User }) {
    form.value.id = this.selectedUser.id;
    form.value.firstName = this.selectedUser.firstName;
    form.value.lastName = this.selectedUser.lastName;
    form.value.gender = this.selectedUser.gender;
    form.value.email = this.selectedUser.email;
    form.value.password = this.selectedUser.password;
    form.value.number = this.selectedUser.number;
    if (this.selectedUser && this.selectedUser.id) {
      this.dataService.readUser().subscribe((users: User[]) => {
        this.users = users;
      });
    } else {
      this.dataService.createUser(form.value).subscribe((user: User) => {
        console.log('User created, ', user);
        this.dataService.readUser().subscribe((users: User[]) => {
          this.users = users;
        });
      });
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  // deleteUser(id: number) {
  //   this.dataService.deleteUser(id).subscribe((user: User) => {
  //     console.log('User deleted, ', user);
  //     this.dataService.readUser().subscribe((users: User[]) => {
  //       this.users = users;
  //     });
  //   });
  // }
}
