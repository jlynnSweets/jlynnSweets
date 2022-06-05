import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public classicCupcakes: any = [{
    flavors: ['Vanilla',
      'Strawberry',
      'Chocolate',
      'Oreo',
      'Banana Pudding',
      'Strawberry Shortcake',
      'Strawberry Cheesecake',
      'Confetti Sprinkle',
      'Red Velvet w/ Cream Cheese',
      'Key Lime',
      'Lemon Swirl',
      'Cookie Dough',
      'Fruity Pebble',
      'Red Velvet w/ fried Oreos'
    ],
    price: [{
      title: 'Half a Dozen',
      price: '$28'
    }, {
      title: 'Dozen',
      price: '$40'
    }]
  }];
  public customCupcakes: any = [{
    flavors: [
      'Vanilla',
      'Strawberry',
      'Chocolate',
      'Oreo',
      'Red Velvet',
      'Confetti Sprinkle'
    ],
    price: [{
      title: 'Half a Dozen',
      price: '$28 & up'
    }, {
      title: 'Dozen',
      price: '$40 & up'
    }]
  }];
  public customCakes: any = [{
    flavors: ['Vanilla',
      'Strawberry',
      'Chocolate',
      'Oreo',
      'Red Velvet',
      'Confetti Sprinkle'
    ],
    price: [{
      title: '6\' Cakes',
      price: '$90 & up'
    }, {
      title: '8\' Cakes',
      price: '$120 & up'
    }, {
      title: 'Two Tier Cakes( 6\' & 8\')',
      price: '$200 & up'
    }]
  }];
  public strawberry: any = [{
    flavors: [
      'Milk Chocolate',
      'White Chocolate',
      'Strawberry Crunch',
      'Oreo Crunch',
      'Red Velvet Crumble',
      'Cotton Candy',
      'Fruity Pebbles',
      'Milk w/ White Drizzle',
      'Milk w/ Milk Drizzle',
      'Snicker\'s',
      'M&M\'s'
    ],
    price: [{
      title: 'Half a Dozen',
      price: '$28'
    }, {
      title: 'Dozen',
      price: '$40'
    }]
  }];
  public customStrawberry = [{
    price: [{
      title: 'Half a Dozen',
      price: '$28'
    }, {
      title: 'Dozen',
      price: '$40'
    }]
  }];
  public classicCakes = [{
    flavors: ['Strawberry Crunch Cake', 'Red Velvet Crumble Cake',
      'Oreo Crumble Cake', 'Birthday Sprinkle Cake'
    ],
    price: [{
      title: '6\'',
      price: '$65'
    }, {
      title: '8\'',
      price: '$90'
    }]
  }];
  public cakePops: any = [{
    flavors: ['Vanilla',
    'Strawberry',
    'Chocolate',
    'Oreo',
    'Red Velvet',
    'Confetti Sprinkle'],
    price: [{
      title: 'Small Box (10)',
      price: '$18'
    }, {
      title: 'Regular Box (18)',
      price: '$28'
    }, {
      title: 'Large Box (36)',
      price: '$50'
    }]
  }];
  constructor() {}
  panelOpenState = false;
  ngOnInit(): void {

  }


}
