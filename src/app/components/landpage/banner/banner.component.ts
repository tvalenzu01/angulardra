import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  HEADING: string
  TITLE: string
  WHY_CHOOSE_US_LIST:string  []
  constructor() { }

  ngOnInit(): void {
    this.HEADING = "Porque elegirnos?"
    this.TITLE = "Cual es la diferencia"
    this.WHY_CHOOSE_US_LIST = [
      "1) Especialista Acreditado por la Superintendencia de Salud.",
      "2) Clínica y Pabellon de Cirugía certificado por el Seremi de Salud.",
      "3) Alternativas de pago",
    ]
  }

}
