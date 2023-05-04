import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { UserserviceService } from 'src/app/Services/userservice.service';
import { User } from 'src/app/Security/user';
import { Jwtrequest } from 'src/app/Security/jwtrequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  jwtrequest=new Jwtrequest();
  user = new User();
  errorMessage: string;

  constructor(public authService: AuthServiceService , private router: Router,private userservice: UserserviceService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  

  login(): void {
      this.authService.login(this.jwtrequest).subscribe({
        next: (v) => {
          this.authService.setToken(v.jwtToken);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          if (err.status === 401) {
            // handle invalid credentials error
            this.errorMessage = 'Invalid credentials, please try again.';
          } else {
            // handle other errors
            this.errorMessage = 'An error occurred, please try again later.';
          }
        }
      });
    
    









   this.userservice.getuserbyemail(this.jwtrequest.username).subscribe(

    data => {
      this.user = data;
      console.log(data);
      localStorage.setItem('Role', data.role);
      localStorage.setItem('Id', data.id.toString());

    })

    if( this.authService.isLoggedIn()){ console.log("logeeeeed innnnn")}








  }



  
}
