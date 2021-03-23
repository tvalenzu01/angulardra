import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  HEADER: string
  NAVBAR_DATA: [

    { id: number, url: string, label: string, publico: boolean, token: boolean }
    , { id: number, url: string, label: string, publico: boolean, token: boolean }
    , { id: number, url: string, label: string, publico: boolean, token: boolean }
    , { id: number, url: string, label: string, publico: boolean, token: boolean }]

  constructor() {
    this.HEADER = "Dra Paula Ulloa D. Implantes Y Rehabilitación"
    this.NAVBAR_DATA = [
      {
        id: 2,
        url: "#services",
        label: "Servicios",
        publico: true,
        token: false
      },
      {
        id: 3,
        url: "#Why-us",
        label: "Porque elegir?",
        publico: true,
        token: false
      },
      // {
      //     id: 4,
      //     url: "casos/Casos",
      //     label: "Casos",
      //     publico: true,
      //     token:false
      // },
      {
        id: 5,
        url: "#footer",
        label: "Contacto",
        publico: true,
        token: false
      },
      {
        id: 6,
        url: "pacientes/pacientes",
        label: "Pacientes",
        publico: false,
        token: true
      },

      // {
      //     id: 7,
      //     url: "pacientes/pacienteItem",
      //     label: "Paciente",
      //     publico: false,
      //     token: true
      // },
      // {
      //     id: 8,
      //     url: "settings",
      //     label: "Perfil",
      //     publico: false,
      //     token:true
      // },
    ];

  }

  ngOnInit(): void {

  }

}
