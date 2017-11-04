import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';


interface IPost {
  userId: string;
  id: string;
  title: string;
  completed: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  showCont = false;
  posts: IPost[];
  constructor(private postService: PostService) {
    postService.getTodos().subscribe(post => {console.log( post );
      this.posts = post;
    });
  }

  ngOnInit() {
  }

  funcion_mostrar() {
    this.showCont = !this.showCont;
  }

}
