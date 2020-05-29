import { Component, /* OnInit */ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service'; 



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent /*  implements OnInit */  {

  heroe: any = {}; 


  constructor( private _rutaActiva: ActivatedRoute,
                private _heroesService:HeroesService ) {
    
    this._rutaActiva.params.subscribe( params =>{
       console.log(params ['id']); 
       this.heroe = this._heroesService.getHeroe(params['id']); 
       console.log(this.heroe);
    })
   }

 /*  ngOnInit(): void { } */

}
