import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
name : any;
data : any={};
image : any;

slider={
  autoplay: true
}
a : any=[];
id : any;
weight : any;

  constructor(private api : ApiServiceService, private activateRoute : ActivatedRoute, private navController : NavController) { }

  ngOnInit() {
    this.name=this.activateRoute.snapshot.params.name;
    console.log(this.name);
    this.details();
  }

  details(){
    this.api.pokemonDetails(this.name).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
      console.log(this.data.sprites.front_default)
      this.image=this.data.sprites.front_default;
      this.a=this.data.images;
      this.a.splice(4,6)
    })
  }

  go(){
    this.navController.pop();
  }

}
