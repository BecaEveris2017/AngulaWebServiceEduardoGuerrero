import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';


interface IPost {
  userId: string;
  id: string;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [PostService]
})
export class AlbumsComponent implements OnInit {
  showCont= false;

  posts: IPost[];

  constructor(private postService: PostService) {
    postService.getAlbums().subscribe(post => {console.log( post );
      this.posts = post;
    });
  }

  ngOnInit() {
  }

  funcion_mostrar() {
    this.showCont = !this.showCont;
  }

}
