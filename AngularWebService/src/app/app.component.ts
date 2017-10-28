import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCont=false;
  title = 'Beca Everis';
  colores = ['Amarillo', 'Rojo'];

  addcolor(color){
    this.colores.push(color.value);
    console.log(color.value);
    color.value = '';
    return false;
  }

  funcion_mostrar(){
    this.showCont = !this.showCont;
  }

}
