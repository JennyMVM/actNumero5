import { Component, Input } from '@angular/core';
import { Icontacto } from '../../interfaces/icontacto.interface';

@Component({
  selector: 'app-lista-contactos',
  standalone: true,
  imports: [],
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent {
@Input() contactos: Icontacto[]=[];

constructor(){

}

ngOnInit(){
  this.cargarContactos()
}


cargarContactos(): string {
  let html =""

  this.contactos.forEach((contacto: Icontacto)=> {
    html += `<article class="contacto">

  <h3> ${contacto.titulo1} </h3>
  <p>  ${contacto.fecha} </p>
  <p>  ${contacto.noticia} </p>
  
  <div *ngIf="selectedImage">
            <img [src]="selectedImage" alt="selected Image">
         </div>

  </article>`
})
  return html;
}

/*

<input type="file"  value={formData.image} (change)="getImageUrl(${contacto}})" accept="image/*" [(ngModel)]="newContacto.imagen1">


cargarContactos(): string {
  let html =""

  this.contactos.forEach((contacto: Icontacto)=> {

html += `<div *ngFor="let contacto of contactos">
  <article class="contacto">
    <h3>{{ contacto.titulo1 }}</h3>
    <p>{{ contacto.fecha }}</p>
    <p>{{ contacto.noticia }}</p>
    <img *ngIf="contacto.imagen1" [src]="getImageUrl(contacto)" alt="Imagen">
  </article>
</div>`
})
return html;
}*/
}
