import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amiibo',
  templateUrl: './amiibo.component.html',
  styleUrls: ['./amiibo.component.css']
})

export class AmiiboComponent implements OnInit {
  constructor() { }
  urlApi:string;

  show: boolean = true;
  isOk:boolean = true;
  nombre: string;

  ngOnInit(){
  }

  send(){
    this.nombre = this.urlApi;
    console.log(this.nombre);

    if(this.nombre == "" || this.nombre==null || this.nombre==undefined)
    {
      this.show = false;
      alert("Debe ingresar el nombre del amiibo que desea buscar");
    }else{
      this.show = true;
    }
  }
}
