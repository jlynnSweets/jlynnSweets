import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public longText = `The purpose of Jlynn’s Sweets ‘N’ Treats is to offer high quality products for reasonable prices so we can accommodate the needs of our customer base. This will create a lasting impact and loyal connection with our customers because it is our first responsibility as a business to serve the customers. Furthermore, we take pride in our image, while our baked goods and other products taste amazing, they also look amazing as well. We cherish the beauty of things, when baking and creating.
  My name is Jlynn Latham and I am the CEO of Jlynn’s Sweet ‘N’ Treats , I attend Valdosta State University, and I am an upcoming senior. I started this business with the sole purpose of sharing my talent with the world. It was not until I was consistently told I am amazing at preparation and baking that I actually took the initiative and built up the courage to start this business. I believe that everyone has a sweet tooth, even if you think you don’t, I am here to bring it out of you, so you can embrace it by treating yourself to our products. As I previously stated before, I am in school, and sometimes it can be hard for all of us to deal with classes, teachers, being away from home, and even social interaction, this doesn't just apply to college students, this could be anyone, dealing with anything. Sometimes you need that one thing that can take all the underlying stress and pressure away for a while, and what could be better than sweets and treats? Eating sweets always puts a smile on my face and I just want to put one on yours. While our treats are mouthwatering and absolutely delicious, they can put you in an instantly fantastic mood.
  Write the vision make it plain
  Habakkuk 2:2 KJV`;
  constructor() { }

  ngOnInit(): void {
  }

}
