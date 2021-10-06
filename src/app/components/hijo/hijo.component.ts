import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

@Input() nombreHijo:string='sin nombre';// vas a recibir de afuera nombre
@Output() cambioNombreHijo=new EventEmitter<string>(); //emitir al padre
  // constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombreHijo="Juan carlos Magu";// vas a recibir de afuera nombre
    this.cambioNombreHijo.emit(this.nombreHijo);
    // this.dataService.nombreUsuario=this.nombreHijo;
  }
}
