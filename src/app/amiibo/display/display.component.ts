import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import ApiModels from 'src/app/models/myApimodels';

interface Release {
  au?: string;
  eu?: string;
  jp?: string;
  na?: string;
}

interface AmiiboViewModel{
  amiiboSeries: string;
  character: string;
  image: string;
  name: string;
  release?: Release;
}

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent{
  constructor() { }
  apiResponse:ApiModels.RootObject = undefined;

  @Input()
  nombre:string;

  isOk:boolean = true;

  ngOnInit(){
    console.log("Cargó el display");
    if(this.apiResponse!=undefined){
      this.callApi();
    }
    console.log("Ya se uso callApi");
    console.log(this.nombre);
  }

  ngOnChanges() {//esto no está bien implementado
    if(this.nombre){
      console.log("Cargó el display v2");
      this.callApi();
      console.log("Ya se uso callApi v2");
      console.log(this.nombre + 'v2');
    }
  }

  async callApi(){
    this.isOk=true;
    const data = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${this.nombre}`);
    const response:ApiModels.RootObject = await data.json();
    this.apiResponse = response;
    if(this.apiResponse.amiibo==undefined){
        this.isOk=false;
    };
    console.log(this.apiResponse);
  }

}
