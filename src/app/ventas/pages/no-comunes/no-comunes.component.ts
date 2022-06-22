import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre:string='Lily';
  genero:string='femenino';

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  //i18nPlural
  clientes:string[]=['Maria','Pedro','Lorena','Victor','Héctor'];
  clientesMapa={
    '=0':'no tenemos clientes',
    '=1':'tenemos 1 cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.genero=='femenino'){
      this.nombre='Rafael',
      this.genero='masculino'
    }
    else{
      this.nombre='Lily',
      this.genero='femenino'
    }
  
  }

  borrarCliente(){
    this.clientes.pop();
  }
  // pipe keyvlaiue

  persona={
       'nombre':'Rafael',
       'edad':45,
       'direccion':'Mérida Yucatán'
  }
  // jsonPipe
  heroes=[
    { 
    nombre:'Superman',
    vuela:true
    },
    {
      nomnbre: 'Spiderman',
      vuela:false
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ]

  //AsyncPipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,rejects) =>{
      setTimeout(() => {
        resolve('Fin de la promesa')
      }, 3500);
  })

}
