import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';


interface IPost {
  postID: string;
  id: string;
  name: string;
  email: string;
  body: string;
}


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  showCont= false;

  posts: IPost[];

  constructor(private postService: PostService) {
    postService.getComments().subscribe(post => {console.log( post );
      this.posts = post;
    });
  }

  ngOnInit() {
  }

  funcion_mostrar() {
    this.showCont = !this.showCont;
  }

}
