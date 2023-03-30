import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  NgApexchartsModule
} from "ng-apexcharts";
  import { MatFormField } from '@angular/material/form-field';
  import { MatStepperModule } from '@angular/material/stepper';
  import { MatInputModule } from '@angular/material/input';
  import { MatButtonModule } from '@angular/material/button';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-tax-calculator-stepper',
  templateUrl: './tax-calculator-stepper.component.html', 
  styleUrls: ['./tax-calculator-stepper.component.css']
})
export class TaxCalculatorStepperComponent implements OnInit{
  @ViewChild("chart") chart!: ChartComponent;
  isLinear=true;
  chartOptions: Partial<ChartOptions> | any;
  grossincome!: number;
  othersource!: number;
  homeloan!: number;
  basicded!: number;
  medinsurance!: number;
  nps!: number;
  charity!: number;
  eduloan!: number;
  savings!: number;
  salary!: number;
  hra!: number;
  rent!: number;
  option!: number ;
  hraexemption!: number;
  taxRate!: number;
  isChecked: boolean = true;
  oldtpi!: number;
  newtpi!: number;
  oldtax!: number;
  newtax!: number;


  calculateTax(): void {  
    //hra exemption
    this.hraexemption=Math.min(this.option*this.salary,this.hra,(this.rent-(0.1*this.salary)))

   //old tax regime tax payable income
   if(this.grossincome <= 500000){
      this.oldtpi=0;
   }
   else{
      this.oldtpi=(this.grossincome+this.othersource)-(this.basicded+this.medinsurance+this.nps+this.charity+this.eduloan+this.savings)-50000-(this.homeloan)
   }
   //new tax regime tax payable income
   if(this.grossincome <= 700000){
     this.newtpi=0;
   }
   else{
     this.newtpi=(this.grossincome - 50000);
   }
   //calculated tax old
   
   if (this.grossincome > 500000) {
     if (this.oldtpi < 0) {
       this.oldtax = 0;
     } else if (this.oldtpi <= 250000) {
       this.oldtax = 0;
     } else if (this.oldtpi <= 500000) {
       this.oldtax = (this.oldtpi - 250000) * 0.05;
     } else if (this.oldtpi <= 1000000) {
       this.oldtax = 12500 + (this.oldtpi - 500000) * 0.2;
     } else {
       this.oldtax = 112500 + (this.oldtpi - 1000000) * 0.3;
     }
   }
   this.oldtax *= 1.04;
   console.log(this.oldtax)
   this.oldtax= this.oldtax * 1.04;  
   //calculated tax new
  
   if ( this.grossincome > 700000) {
     if (this.newtpi > 600000 && this.newtpi < 900000) {
       this.newtax = (this.newtpi - 600000) * 0.1 + 15000;
     } else if (this.newtpi > 900000 && this.newtpi < 1200000) {
       this.newtax = (this.newtpi - 900000) * 0.15 + 45000;
     } else if (this.newtpi > 1200000 && this.newtpi < 1500000) {
       this.newtax = 90000 + (this.newtpi - 1200000) * 0.2;
     } else {
       this.newtax = (this.newtpi - 1500000) * 0.3 + 150000;
     }
   }
 this.newtax = this.newtax*1.04;  
 console.log(this.hraexemption)
 console.log(this.newtax)
 console.log(this.grossincome)

 this.chartOptions = {
  series: [
    {
      name: "Tax Change",
      data: [ this.oldtax,this.newtax]
    }
  ],
  chart: {
    height: 350,
    type: "bar"
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top" // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function(val: string) {
      return "₹ " + val  ;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },

  xaxis: {
    categories: [
      "OLD TAX",
      "NEW TAX"
    ],
    position: "top",
    labels: {
      offsetY: -18
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#b02727",
          colorTo: "#b02727",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.4
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function(val: string) {
        return "₹ " + val;
      }
    }
  },
  title: {
    text: "OLD TAX VS NEW TAX",
    offsetY: 320,
    align: "center",
    style: {
      color: "#444"
    }
  }
}; 
  
} 
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Tax Change",
          data: [ this.oldtax,this.newtax]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: string) {
          return "₹ " + val  ;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
   
      xaxis: {
        categories: [
          "OLD TAX",
          "NEW TAX"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#b02727",
              colorTo: "#b02727",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.4
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val: string) {
            return "₹ " + val;
          }
        }
      },
      title: {
        text: "OLD TAX VS NEW TAX",
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    }; 
    // Set initial values for input fields
    this.grossincome = 0;
    this.othersource = 0;
    this.homeloan = 0;
    this.basicded = 0;
    this.medinsurance = 0;
    this.nps = 0;
    this.charity = 0;
    this.eduloan = 0;
    this.savings = 0;
    this.salary = 0;
    this.hra = 0;
    this.rent = 0;
    this.option =0.5;
    this.newtax = 0;
    this.oldtax = 0;
    this.oldtpi = 0;
    this.newtpi = 0;
   
  }

  
}
