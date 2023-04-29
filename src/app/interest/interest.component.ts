import { Component, OnInit,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { NgbModal ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentServiceService } from '../Services/investment-service.service';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  /*constructor(  public dialogRef: MatDialogRef<InterestComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: { investmentId: number },
    private fb: FormBuilder, private investmentService: InvestmentServiceService
 ) { }*/
 beginningPrice: number;
 endingPrice: number;
 dividends: number;
 result: number;
 reactiveform: FormGroup;

 constructor(
   private modalService: NgbModal,
   private formBuilder: FormBuilder,
   public activeModal: NgbActiveModal,
   private investmentService: InvestmentServiceService

 ) {}

 ngOnInit(): void {
   this.reactiveform = this.formBuilder.group({
     beginningPrice: ['', Validators.required],
     endingPrice: ['', Validators.required],
     dividends: ['', Validators.required],
   });
 }

  interestForm: FormGroup;
  interest: number;
  investmentId : number;
  
  /*ngOnInit() {
    if (this.data) {
      console.log(this.data.investmentId);
      // Initialize the form group with initial values from data object
      //this.interestForm = this.fb.group({
        //beginningPrice: [this.data.beginningPrice, Validators.required],
        //endingPrice: [this.data.endingPrice, Validators.required],
        //dividends: [this.data.dividends, Validators.required]
      //});
    }
  }*/
  



  calculateInterest(investmentId: number) {
    const beginningPrice = this.interestForm.get('beginningPrice').value;
    const endingPrice = this.interestForm.get('endingPrice').value;
    const dividends = this.interestForm.get('dividends').value;
  
    this.investmentService.calculateInterest(investmentId, beginningPrice, endingPrice, dividends)
      .subscribe(interest => {
        this.interest = interest;
      });
  }
  
}


