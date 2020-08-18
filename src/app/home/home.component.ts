import { Component, OnInit, Inject } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  repos:any;
  searchText;
  constructor(private dataservice:DataserviceService,  public router:Router) { }
 ngOnInit(): void {
   this.dataservice.usersearchResult().subscribe(res =>{
    this.data = res;
    console.log("user list", this.data);
   });   
   
 } 

}


  
 


