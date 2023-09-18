import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Fake Nombre';
  titulos: string = 'Fake Titulos';
  mision: string = 'Fake Misión';
  fotoUrl: string = '';
  email: string = 'Fake Email';
  celular: string = 'Fake Celular';
  ubicacion: string = 'Fake Ubicación';
  redsocial: string = 'Fake Red Social';

  constructor(private headerservice: HeaderService) {}

  ngOnInit(): void {
    this.headerservice.getHeader().subscribe((data: any) => {
      this.name = data.name;
      this.titulos = data.titulos;
      this.mision = data.mision;
      this.fotoUrl = data.foto;
      this.email = data.email;
      this.celular = data.celular;
      this.ubicacion = data.ubicacion;
      this.redsocial = data.redsocial;
      console.log(data);
      //alert(data);
    });
  }
}
