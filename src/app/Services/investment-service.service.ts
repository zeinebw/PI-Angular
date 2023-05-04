import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentServiceService {
  readonly API_URL = "http://localhost:8081/moneylend/Investment"
  readonly ENDPOINT_Invest_getAll= "/GetAll"

  constructor(private httpClient : HttpClient) { }
  convertBinaryToDataUrl(binaryData: string): Observable<string> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.readAsDataURL(new Blob([binaryData], { type: 'application/octet-stream' }));
      reader.onload = () => {
        observer.next(reader.result as string);
        observer.complete();
      };
      reader.onerror = error => observer.error(error);
    });
  }
  getInvestments(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_Invest_getAll)
  }
  addInvestment(Investment:any){
    return this.httpClient.post(this.API_URL+"/AddInvestment",Investment);
  }
  editInvestment(Investment:any){
    return this.httpClient.put(this.API_URL+"/modifierInvestment",Investment);
  }

  deleteInvestment(id:any){
    return this.httpClient.delete(this.API_URL+"/deleteByIdInvestment?id="+id);
  }
  findByType(searchValue: any) : Observable<any>{
    return this.httpClient.get<any>(this.API_URL+"/afficherparType?type="+searchValue);
  }
  
}
