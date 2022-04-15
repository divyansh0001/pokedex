import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.page.html',
  styleUrls: ['./berries.page.scss'],
})
export class BerriesPage implements OnInit {
  searchValue : any;
  data: any;
  constructor(private api : ApiServiceService,private router : Router) { }

  ngOnInit() {

  }

  searchResult(ev){
    this.searchValue =ev.detail.value;
    console.log(this.searchValue)
    this.api.berries(this.searchValue).subscribe((res:any)=>{
      this.data=res;
      console.log(this.data,"hii")
     
    })
  }
}
