import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Services/userservice.service';
import { User } from 'src/app/Security/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new  User() ;
  constructor(private userservice : UserserviceService) { }

  ngOnInit() {
  }
  onSubmit() {
 
   
  }
 
  ajouter(){
 
 
 
 this.user.role="USER";
   this.userservice.createUser(this.user).subscribe( {
     next: (v) => console.log(v),
     error: (e) => console.error(e),
     complete: () => console.info('complete') 
 });
  
 console.log(this.user)

}

}
