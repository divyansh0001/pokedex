import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchValue: any;
  data :any=null;
  name : any;
  image: any;
  constructor(private api : ApiServiceService,private router : Router) { }

  ngOnInit() {
  }

  searchResult(ev){
    this.searchValue =(ev.detail.value).toLowerCase();
    console.log(this.searchValue)
    this.api.searchResult(this.searchValue).subscribe((res:any)=>{
      this.data=res;
      this.image=this.data.sprites.front_default;
      this.name=this.data.name;
      console.log(this.data,"hii")
     
    })
  }

  details(){
    
    this.router.navigate(['/details/'+this.name])
  }

}
