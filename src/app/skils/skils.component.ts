import { Component, OnInit } from '@angular/core';
import { SkilsService } from '../services/skils.service';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css'],
})
export class SkilsComponent implements OnInit {
  habilidades: Array<any> = [];
  constructor(private skilsService: SkilsService) {}

  ngOnInit(): void {
    this.skilsService.getSkils().subscribe((data: any) => {
      this.habilidades = data;
    });
  }
}
