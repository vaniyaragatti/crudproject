import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router, Params } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  data:any;
  repourl: any;
  reposname:string;
  reposdata:any;
  
  constructor(private dataservice:DataserviceService, public route: Router, public active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe((params:Params) => {
     this.reposname =  params.id;
     this.getReposdetails()
    })
   
  }

  getReposdetails() {
      this.dataservice.getid(this.reposname).subscribe(data => {
        this.reposdata = data;
        console.log(data);
      })  }


}
