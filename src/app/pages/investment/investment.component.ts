import { Component, OnInit } from '@angular/core';
import { InvestmentServiceService } from 'src/app/Services/investment-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css'],
  providers: [InvestmentServiceService]
})
export class InvestmentComponent implements OnInit {
  focus = false;
  search: string = '';

  investments: any[] = [];

  constructor(private investmentService: InvestmentServiceService, private sanitizer: DomSanitizer,private router : Router) { }
  ngOnInit() {
    this.investmentService.getInvestments().subscribe((datas) => {
      console.log(datas);
      for (let investment of Object.values(datas)) {
          this.investmentService.convertBinaryToDataUrl(investment.pdf).subscribe((url) => {
              investment.pdfFile = url;
          });
      }
      this.investments = Object.values(datas);
  });
  
  }
  editInvestment(investment: any) {
    this.router.navigate(['/investmentedit', investment.idInvest]);
  }
  //deleteInvestment(id:any){
    //this.investmentService.deleteInvestment(id).subscribe( () =>this.investmentService.getInvestments() );
  //}
  getInvestments(){
    this.investmentService.getInvestments().subscribe(data => {
      this.investments = Object.values(data);
    });
  }

  deleteInvestment(id: any) {
    this.investmentService.deleteInvestment(Number(id)).subscribe(() => {
      this.getInvestments();
    });
  }; 
  
  findByType(type: any) {
    if(!type) return;
    
    this.investmentService.getInvestments().subscribe((investments : any) => {
      this.investments = investments.filter((investment:any) =>
      investment.type && investment.type.toLowerCase().includes(type.toLowerCase())
      );
    });
  }
  
  
  
}