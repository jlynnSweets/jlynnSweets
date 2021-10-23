import {
  Component,
  OnInit
} from '@angular/core';
declare var myExtObject: any;
declare var webGlObject: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
// import {} from 'assets/IMG_2038.jpeg'
export class GalleryComponent implements OnInit {
 
  constructor() {

  }

  ngOnInit(): void {
  //   //(function (d, s, id) {
  //     var d = document;
  //     var s = "script";
  //     var id = "EmbedSocialHashtagScript"
  //     var js;
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.setAttribute('src', "https://embedsocial.com/cdn/ht.js") //= "https://embedsocial.com/cdn/ht.js";
  //     d.getElementsByTagName("head")[0].appendChild(js);
  //  // }(document, "script", "EmbedSocialHashtagScript"));
  }

}
