import { Element } from '@angular/compiler';
import { Component, OnInit, ElementRef } from '@angular/core';
import { filter } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { DataupdatebuttonComponent } from 'src/app/dataupdatebutton/dataupdatebutton.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  public income:number[]=[10000, 15000, 200000];
  public expense:number[] = [7000,11000,100000];
  public mutualFunds:number[] = [150000,200000,300000000];
  public equity:number[] = [100000, 120000,150000];
  public fixedDeposit:number[] = [35000, 36000,28000];
  public netWorth:number[] = [this.income[0]-this.expense[0]+this.mutualFunds[0]+this.equity[0]+this.fixedDeposit[0], this.income[1]-this.expense[1]+this.mutualFunds[1]+this.equity[1]+this.fixedDeposit[1], this.income[2]-this.expense[2]+this.mutualFunds[2]+this.equity[2]+this.fixedDeposit[2]];
  public chartClickedItem:string = "Net Worth";
  public investmentFilterOptions:string[] = ['Net Worth', 'Income', 'Expenses', 'Mutual Funds', 'Equity', 'Fixed Deposit']
  public isActive:string = "Today";
  public timeFilterOptions:string[] = ['Today', 'This Month', 'This Year'];

  onChartFilterSelected(option:string) {
    this.chartClickedItem=option;
  }

  toggleActive(option:string)
  {
    this.isActive= option;
    this.dynamicCardToggle();
  }
  
  dynamicCardToggle():number{
    var i=0;
    for(i=0; i < this.timeFilterOptions.length; i++) {
    if(this.isActive==this.timeFilterOptions[i]){
      break;
    };
  }
  return i;
}


}