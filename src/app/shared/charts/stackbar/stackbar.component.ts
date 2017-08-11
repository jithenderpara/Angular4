import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stackbar',
  templateUrl: './stackbar.component.html',
  styleUrls: ['./stackbar.component.css']
})
export class StackbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true,
      labels: {
          fontColor: 'red'
      }
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'New' },
      { data: [65, 40, 50, 91, 56, 55, 10], label: 'Cancelled' },
      { data: [30, 20, 80, 10, 52, 25, 10], label: 'Approved' },
      { data: [30, 67, 33, 16, 25, 15, 30], label: 'Ready to print' },
      { data: [65, 59, 80, 81, 16, 55, 40], label: 'Rejected' },
      { data: [13, 48, 40, 74, 76, 27, 29], label: 'On hold' },
      { data: [20, 24, 20, 55, 56, 63, 50], label: 'Printed' },
      { data: [33, 53, 10, 17, 36, 57, 30], label: 'QA Verified' },
      { data: [56, 20, 55, 40, 52, 35, 10], label: 'QA Fail' },
      { data: [78, 48, 11, 79, 86, 27, 80], label: 'Shipped' }
  ];

  // events
  public chartClicked(e: any): void {
      console.log(e);
      
  }

  public chartHovered(e: any): void {
      console.log(e);
  }


  public randomize(): void {
      // Only Change 3 values
      let data = [Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 20, 60, (Math.random() * 100), 55, 75, (Math.random() * 100), 29, 10, (Math.random() * 100),56,(Math.random() * 100), 40];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
  }

}
