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
// import {} from 'assets/IMG_2038.jpeg'
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
        src: 'assets/doublestrawberry.JPG',
      }),
      new ImageItem({
        src: 'assets/keylime.JPG',
      }),
      new ImageItem({
        src: 'assets/oreo.JPG',
      }),
      new ImageItem({
        src: 'assets/choco.JPG',
      }),
      new ImageItem({
        src: 'assets/twix.JPG',
      }),
      new ImageItem({
        src: 'assets/sprinkle.JPG',
      }),
      new ImageItem({
        src: 'assets/strawberry.JPG',
      }),
      new ImageItem({
        src: 'assets/fruitypebbles.JPG',
      }),
      new ImageItem({
        src: 'assets/bananna.JPG',
      }),
      new ImageItem({
        src: 'assets/redvelvet.JPG',
      }),
      new ImageItem({
        src: 'assets/vanilla.JPG',
      }),
      new ImageItem({
        src: 'assets/confetti.JPG',
      }),
      new ImageItem({
        src: 'assets/4count.JPG',
      }),
      new ImageItem({
        src: 'assets/.JPG',
      }),
    ];
  }

}
