import { Component, OnInit } from '@angular/core';
import { InteresService } from '../services/interes.service';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css'],
})
export class InteresComponent implements OnInit {
  intereses: Array<any> = [];
  constructor(private interesService: InteresService) {}

  ngOnInit(): void {
    this.interesService.getInteres().subscribe((data: any) => {
      this.intereses = data;
    });
  }
}
