import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { InvestmentServiceService } from 'src/app/Services/investment-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editinvestment',
  templateUrl: './editinvestment.component.html',
  styleUrls: ['./editinvestment.component.css']
})
export class EditinvestmentComponent implements OnInit {

  reactiveform: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private investmentService: InvestmentServiceService) { }

  ngOnInit(): void {
    this.reactiveform = this.formBuilder.group({
      idInvest: ['', Validators.required],
      typeInvest: ['', Validators.required],
      amount: ['', Validators.required],
      dateInvest: ['', Validators.required],
      durationInDays: ['', Validators.required],
    });
  }
  Edit() {
    if (this.reactiveform.valid) { 
      const investment = this.reactiveform.value;
      this.investmentService.editInvestment(investment).subscribe(
        () => {
          console.log('Investment edited successfully'); 
          this.gotoINVESTMENTList(); 
        },
        (error) => {
          console.error('Failed to edit investment', error);
        });
    }
  }
  
  
  gotoINVESTMENTList() {
    this.router.navigate(['/investment']); 
  }
  
}
  