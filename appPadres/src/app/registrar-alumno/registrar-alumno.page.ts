import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/service/crud-service.service';
@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.page.html',
  styleUrls: ['./registrar-alumno.page.scss'],
})
export class RegistrarAlumnoPage implements OnInit {
  parent: any;
  searchId: string = '';
  newChildName: string = '';
  newChildSection: string = '';

  constructor(private crudService: CrudServiceService) {
   
    this.searchId = this.crudService.getId();
    console.log( this.searchId);
  }

  ngOnInit() {

    this.crudService.findParentById(this.searchId).subscribe((data: any) => {
      const studentData = data.data();
      this.parent = {
        Hijos: studentData.Hijos || [],
      };
    });
  }

  AgregarHijo() {
    const updatedData = {
      Hijos: this.parent.Hijos,
    };

    // Agrega un nuevo hijo si se proporciona un nombre
    if (this.newChildName) {
      updatedData.Hijos.push({
        Name: this.newChildName,
        Section: this.newChildSection,
      });
    }

    this.crudService
      .updateParent(this.searchId, updatedData)
      .then(() => {
        console.log('Estudiante actualizado con éxito');
      })
      .catch((error) => {
        console.error('Error al actualizar el estudiante:', error);
      });
  }

  Delete(child: any) {
    const updatedData = {
      Hijos: this.parent.Hijos.filter((h: any) => h !== child),
    };

    this.crudService
      .updateParent(this.searchId, updatedData)
      .then(() => {
      
        this.parent = updatedData;
      })
      .catch((error) => {
        console.error('Error al eliminar el hijo:', error);
      });
  }

}


