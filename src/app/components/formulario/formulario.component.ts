import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icontacto } from '../../interfaces/icontacto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
newContacto: Icontacto = { titulo1:"", fecha:"", noticia:"", imagen1: null,url:"" }
@Output() contactoEmitido: EventEmitter<Icontacto> = new EventEmitter();
selectedImage: string | ArrayBuffer | null = null;
//imageUrl: string | null = null;


onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];

    // Asigna el archivo al campo imagen1 de newContacto
    this.newContacto.imagen1 = file;

    // Cargar y mostrar la vista previa de la imagen
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
      console.log(this.selectedImage);
    };
    reader.readAsDataURL(file);
  }
}

getImageUrl(contacto: Icontacto): string | null {
  console.log("funcion getImageUrl");
  
  if (contacto.imagen1) {
    const reader = new FileReader();
    reader.readAsDataURL(contacto.imagen1);
    reader.onload = () => {
      //this.imageUrl = reader.result as string;
      return reader.result as string;
      
   };
  }
  return null;
}


/*
loadImage(contacto: Icontacto) {
  this.getImageUrl(contacto).then(url => {
    this.imageUrl = url;
  }).catch(error => {
    console.error('Error loading image:', error);
  });
}

getImageUrl(contacto: Icontacto): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (contacto.imagen1) {
      const reader = new FileReader();
      reader.readAsDataURL(contacto.imagen1);
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    } else {
      resolve(null);
    }
  });
}
*/

getData(){
  //console.log(this.newContacto)
  //this.getImageUrl(this.newContacto)

  if( this.newContacto.titulo1 !== "" && this.newContacto.fecha !=="" && this.newContacto.noticia !== "" && this.newContacto.imagen1) {

  this.contactoEmitido.emit(this.newContacto)
  this.newContacto = { titulo1: "", fecha:"", noticia:"", imagen1:null, url:""}
  this.selectedImage = null;

} else {
  alert('Los Campos no pueden estar vacios')
}
}
}


/*
export class UploadImageComponent {
  selectedImage: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}*/
