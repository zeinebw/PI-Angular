import { Component, OnInit } from '@angular/core';
import { User } from '../Security/user';
import { UserserviceService } from '../Services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users :User[] ;
Role = localStorage.getItem('Role')
Id = localStorage.getItem('Id')

  constructor(private userservice :UserserviceService,
    private router :Router
    ) { }

  ngOnInit(): void {

    
   
      if (this.Role === 'USER') { // check if the user has a 'USER' role
        this.userservice.getuserbyid(Number(this.Id) ).subscribe((user) => { // fetch the user by id
          this.users = [user]; // assign the fetched user to the users array
        });
      } else { // if the user has a different role than 'USER', fetch all users

        this.userservice.getUsers().subscribe((datas) => {
          console.log(datas);
          console.trace();
          
          this.users = Object.values(datas);
      });
       
      }
    
    







  


  }



  updateuser(id: number){

    this.router.navigate(['updateuser',id]);
   }

   deleteuser(id: number){

    this.router.navigate(['deleteuser',id]);
   }

}
