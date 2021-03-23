import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  HEADING: String
  DESCRIPTION: String
  TUTORIAL_URL: String
  WATCH_TUTORIAL: String
  constructor() { }

  ngOnInit(): void {

    this.HEADING="Bienvenido"
    this.DESCRIPTION="te ayudamos a recuperar todos los dientes mediante implantes dentales con lo último en tecnología dental para darte un tratamiento integral de la más alta calidad "
    this.TUTORIAL_URL="https://www.thinkwithgoogle.com/intl/en-gb/marketing-resources/programmatic/google-digital-academy/"
    this.WATCH_TUTORIAL="Ver resultados"
  }

}
