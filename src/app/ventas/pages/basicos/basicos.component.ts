import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string='rafael';
  nombreUpper:string='rafael';
  nombrecompleto:string='rafael bravo';

  fecha:Date=new Date();
  
}
