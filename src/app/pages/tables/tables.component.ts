import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Services/userservice.service';
import { User } from 'src/app/Security/user';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  users: any[] = [];
  constructor(private userservice :UserserviceService) { }

  ngOnInit() {
    
    
    
   }


   



  }

