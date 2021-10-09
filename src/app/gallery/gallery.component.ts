import {
  Component,
  OnInit
} from '@angular/core';
import {
  GalleryItem,
  ImageItem
} from 'ng-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
// import {} from 'assets/images/IMG_2038.jpeg'
export class GalleryComponent implements OnInit {
  images: GalleryItem[];
  constructor() {
    this.images = [
      new ImageItem({
        src: 'IMAGE_SRC_URL',
        thumb: 'IMAGE_THUMBNAIL_URL'
      }),
      // ... more items
    ];
  }

  ngOnInit(): void {
    // Set gallery items array
    this.images = [
      new ImageItem({
        src: 'assets/images/jlynnsweets/doublestrawberry.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/keylime.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/oreo.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/choco.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/twix.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/sprinkle.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/strawberry.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/fruitypebbles.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/bananna.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/redvelvet.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/vanilla.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/confetti.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/4count.JPG',
      }),
      new ImageItem({
        src: 'assets/images/jlynnsweets/.JPG',
      }),
    ];
  }

}
