import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/service/crud-service.service';

@Component({
  selector: 'app-recoger',
  templateUrl: './recoger.page.html',
  styleUrls: ['./recoger.page.scss'],
})
export class RecogerPage implements OnInit {
  esperando: any;
  searchId: string = '';
  selectedCarril: string = '';

  constructor(private crudService: CrudServiceService) {
    this.searchId = this.crudService.getId();
    console.log(this.searchId);
  }

  ngOnInit() {
    this.crudService.findParentById(this.searchId).subscribe((data: any) => {
      const studentData = data.data();
      this.esperando = {
        Hijos: studentData.Hijos || [],
      };
    });
  }


  llegueClicked() {   
    const studentsToAdd = {
      Carril: this.selectedCarril,
      Hijos: this.esperando.Hijos
    };
    this.crudService.addWaitingStudents(studentsToAdd).then(() => {
      console.log('Estudiantes añadidos a la colección "EstudiantesPendientes" con éxito');
    }).catch((error) => {
      console.error('Error al añadir estudiantes a la colección "EstudiantesPendientes":', error);
    });
  }

}
