import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ADDRESS: string
  MOBILE: string
  ATENCION: string
  HORARIO: string
  constructor() { }

  ngOnInit(): void {
    this.ADDRESS = "Beauchef 683 - segundo piso, oficina 210, Valdivia, Region de los rios - Chile"
    this.MOBILE = "+56 949801968"
    this.HORARIO = "LUNES A VIERNES"
    this.HORARIO ="9:00 - 19:00"
  }

}
