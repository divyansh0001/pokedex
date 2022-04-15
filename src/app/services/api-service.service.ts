import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
url1:any='https://pokeapi.co/api/v2/pokemon/';
url2: any='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http : HttpClient) { }


  pokemon(offset):Observable<any>{
    let params = new HttpParams()
    .set('offset',offset)
    .set('limit',20)
    return this.http.get('https://pokeapi.co/api/v2/pokemon/',{params})
  }




  pokemonDetails(name: any){
    return this.http.get(this.url1+name).pipe(
      map(pokemon=>{
        var sprites = Object.keys(pokemon['sprites']);
        pokemon['images']=sprites
        .map(spriteKey=>pokemon['sprites'][spriteKey])
        .filter(img=>img);
        return pokemon;
      })
    )
  }




  pokemonlist(offset=0){
    let params = new HttpParams()
    .set('offset',offset)
    .set('limit',20)
    return this.http.get(this.url1,{params}).pipe(
      map(result=>{
        return result['results'];
      }),
      map(pokemon=>{
       return pokemon.map((poke,index)=>{
          poke.image=this.pokemonImage(index+offset+1)
          poke.pokeIndex=offset+index+1;
          return poke;
        })
      })
    )
  }

  pokemonImage(index){
    return this.url2+index+'.png';

  }


  searchResult(data){
    console.log(data)
    return this.http.get(this.url1+data);
  }

}
