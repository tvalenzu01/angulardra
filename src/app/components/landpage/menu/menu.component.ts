import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  showMenu: boolean
  header: string
  //NAVBAR_ELEMENT: {id: number, url: string, label: string }
  NAVBAR_DATA: [{ id: number, url: string, label: string }
    , { id: number, url: string, label: string }
    , { id: number, url: string, label: string }
    , { id: number, url: string, label: string }
  ]


  constructor() {

    this.showMenu = false;
    this.header = 'DRA PAULA ULLOA D. IMPLANTES Y REHABILITACIÓN';
    this.NAVBAR_DATA = [
      // {
      //     id: 1,
      //     url: "/",
      // label: "Inicio",
      //  publico: true,
      //     token:false
      // },
      {
          id: 2,
          url: "#servicios",
          label: "Servicios",

      },
      {
          id: 3,
          url: "#Why-us",
          label: "Porque elegir?",
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
      },
      {
          id: 6,
          url: "pacientes/pacientes",
          label: "Pacientes",
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


  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
