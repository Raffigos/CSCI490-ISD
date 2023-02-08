import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public basicLink() {
    alert(
      'The baseline of any web developer. This course includes HTML and CSS.'
    );
  }

  public beginnerLink() {
    alert(
      'The road of using programming languages. This course includes JavaScript and TypeScript.'
    );
  }

  public intermediateLink() {
    alert(
      'The focus of preparing databases and implementing them. This course includes MySQL and PHP.'
    );
  }

  public advancedLink() {
    alert(
      'Take your web developing skills to the next level. This course includes Angular and React.'
    );
  }
}
