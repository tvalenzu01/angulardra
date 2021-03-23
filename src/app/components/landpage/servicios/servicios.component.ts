import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  HEADING: string
  ALL_SERVICES: string
  SERVICE_LIST: [
    { LABEL: string, DESCRIPTION: string, URL: string },
    { LABEL: string, DESCRIPTION: string, URL: string },
    { LABEL: string, DESCRIPTION: string, URL: string }
  ]

  constructor() { }

  ngOnInit(): void {
    this.HEADING = "Tratamientos",
      this.ALL_SERVICES = "Todos los tratamientos",
      this.SERVICE_LIST = [{
        LABEL: "Implantes dentales",
        DESCRIPTION: "Los implantes dentales son la opción para reemplazar los dientes perdidos. La pérdida o daño de un solo diente puede tener un impacto considerable en la vida cotidiana y la autoestima de una persona.",
        URL: "images/implante1.png",
      },
      {
        LABEL: "Estetica dental",
        DESCRIPTION: "Alternativas blanquemiento, diseño de sonrisa, carillas , coronas dentales.",
        URL: "images/sonrisa.png",
      },
      {
        LABEL: "Terceros Molares",
        DESCRIPTION: "Los terceros molares son también llamados, muelas del juicio",
        URL: "images/service3.png",
      },
      ]
  }
}
