import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
data : any=[];
offset : any=0;
  constructor(private api : ApiServiceService,private router : Router) { }

  ngOnInit() {
    this.offset=0;
    this.pokemon()
  }


  pokemon(loadMoreData=false,event?){
    if(loadMoreData){
      this.offset+=20;
    }
    this.api.pokemonlist(this.offset).subscribe((res:any)=>{
      console.log(res,"working")
      this.data=[...this.data,...res];

      if(event){
        event.target.complete();
      }
    })
  }

  details(name){
    console.log(name);
    this.router.navigate(['/details/'+name])
  }



  
  

}
