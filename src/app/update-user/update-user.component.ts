import { Component, OnInit } from '@angular/core';
import { User } from '../Security/user';
import { UserserviceService } from '../Services/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user = new User();
  id : number ;

  constructor( private userservice : UserserviceService,
    private route :ActivatedRoute, private router: Router  ) { }

    ngOnInit(): void {

      this.id=this.route.snapshot.params['id'];
      this.userservice.getuserbyid(this.id).subscribe(data => {
        this.user = data;
        
      });
      
    
    }
  
  modifier(){
  this.userservice.updateuser(this.user).subscribe(data => {console.log(data)});
  this.gotolist;
  }
  
  gotolist(){
  this.router.navigate(["/userslist"]);
  }
  
  
  }
  