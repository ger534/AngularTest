import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import slide1 from './slides/slide1';
import slide2 from './slides/slide2';
import slide3 from './slides/slide3';
import slide4 from './slides/slide4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'test-project-havas';

  slides = [] as any;
  
  slideConfig = { 
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "useTransform": true,
    "dotsClass": 'slick-dots',
    "vertical": true,
    "verticalSwiping": true
    //autoplay: true,
    //autoplaySpeed: 2000
  };

  constructor(private sanitizer: DomSanitizer) {
    // Injecting HTML can be dangerous
    // this tells Angular to trust the values:

    this.slides = [
      { html: sanitizer.bypassSecurityTrustHtml(slide1) },
      { html: sanitizer.bypassSecurityTrustHtml(slide2) },
      { html: sanitizer.bypassSecurityTrustHtml(slide3) },
      { html: sanitizer.bypassSecurityTrustHtml(slide4) }
    ];

    
  }

  

}
