import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  DataExcos:any[] = [];
  isLoadingExcos;
  isDataExcos;
  constructor(private dashboard:DashboardService) { }

  ngOnInit() {
    this.getExcos();
  }

  
  async  getExcos() {
    this.isLoadingExcos = true;
    this.isDataExcos = false;
    await this.dashboard.getExcos().subscribe(excos => {
      this.isLoadingExcos = false
      this.isDataExcos = true
      this.DataExcos = excos.excos;
      console.log('recent excos', excos);

    }, error => {
      this.isLoadingExcos = false
      this.isDataExcos = false;
      console.log('error: ', error.error.statusText);
    });
  }

}
