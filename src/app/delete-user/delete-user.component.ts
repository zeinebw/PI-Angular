import { Component, OnInit } from '@angular/core';
import { User } from '../Security/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  user = new User();
  id : number ;
  constructor(private userservice : UserserviceService,
    private route :ActivatedRoute, private router: Router ) { }
  
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.userservice.getuserbyid(this.id).subscribe(data => {
      this.user = data;
      console.log(data)
    });

  }

delete(user:User){
  this.userservice.deleteuser(user).subscribe(data => {console.log(data)});
 this.router.navigate(['userslist']);




}




}
