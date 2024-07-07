import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { Icontacto } from './interfaces/icontacto.interface';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent,ListaContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrayContactos: Icontacto[] = [];

  onNoticiaEmitida(event: Icontacto) : void{
    console.log(event) 
    this.arrayContactos.push(event)
    }
}