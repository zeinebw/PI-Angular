import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { InvestmentServiceService } from 'src/app/Services/investment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentComponent } from '../pages/investment/investment.component';

@Component({
  selector: 'app-editinvestment',
  templateUrl: './editinvestment.component.html',
  styleUrls: ['./editinvestment.component.css']
})
export class EditinvestmentComponent implements OnInit {

  reactiveform: FormGroup;
  idInvest : number ;
  investment: any;

  constructor(private router: Router,private formBuilder: FormBuilder,private investmentService: InvestmentServiceService, private route :ActivatedRoute ) { }

  ngOnInit(): void {
    this.idInvest=this.route.snapshot.params['idInvest'];
    //this.investment=this.investmentService.findByid(this.idInvest)
    //console.log(this.investment)

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
  