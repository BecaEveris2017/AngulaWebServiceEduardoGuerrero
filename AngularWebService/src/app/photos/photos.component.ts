import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';


interface IPost {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  posts: IPost[];
  showCont= false;

  constructor(private postService: PostService) {
    postService.getPhotos().subscribe(post => {console.log( post );
      this.posts = post;
    });
  }

  ngOnInit() {
  }
  funcion_mostrar() {
    this.showCont = !this.showCont;
  }

}
