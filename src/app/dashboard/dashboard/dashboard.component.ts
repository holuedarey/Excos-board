import { Component, OnInit, TemplateRef } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';
import {BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  DataExcos:any[] = [];
  isLoadingExcos;
  isDataExcos;

  public modalRef: BsModalRef;
  constructor(private dashboard:DashboardService, private router: Router) { }

  ngOnInit() {
    this.getExcos();
  }

  
  public goEditExco(data) {
    this.router.navigateByUrl('edit-excos', { state: data })
    // console.log(data)
  } 
  
  async  getExcos() {
    this.isLoadingExcos = true;
    this.isDataExcos = false;
    await this.dashboard.getExcos().subscribe(excos => {
      this.isLoadingExcos = false
      this.isDataExcos = true
      this.DataExcos = excos.excos;
      // console.log('recent excos', excos);

    }, error => {
      this.isLoadingExcos = false
      this.isDataExcos = false;
      console.log('error: ', error.error.statusText);
    });
  }

  EditExco(id){
    
  }


}
