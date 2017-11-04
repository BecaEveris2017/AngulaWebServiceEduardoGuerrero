import { Component } from '@angular/core';
import { PostService } from './post.services';


interface IPost {
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  nombre: string;
  email: string;
  showCont= false;
  showCont2= false;
  title = 'Beca Everis';
  colores = ['Amarillo', 'Rojo'];
  posts: IPost[];

 constructor(private postService: PostService) {
    postService.getPost().subscribe(post => {console.log( post );
      this.posts = post;
    });

  }

  addcolor(color) {
    this.colores.push(color.value);
    console.log(color.value);
    color.value = '';
    return false;
  }

  funcion_mostrar() {
    this.showCont = !this.showCont;
  }

  funcion_mostrarpost() {
    this.showCont2 = !this.showCont2;
  }

}

