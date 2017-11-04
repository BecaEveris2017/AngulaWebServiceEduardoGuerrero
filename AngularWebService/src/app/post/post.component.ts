import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';


interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  showCont= false;
  posts: IPost[];
  constructor(private postService: PostService) {
      postService.getPost().subscribe(post => {console.log( post );
        this.posts = post;
      });
    }
    ngOnInit() {
    }
    funcion_mostrar() {
      this.showCont = !this.showCont;
    }
}
