import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recoger',
  templateUrl: './recoger.page.html',
  styleUrls: ['./recoger.page.scss'],
})
export class RecogerPage implements OnInit {
  esperando: any;
  searchId: string = '';
  selectedCarril: string = 'carril1';
  studentId: string = '';

  mostrarLlegue: boolean = true;
  mostrarListo: boolean = false;

  constructor(
    private crudService: CrudServiceService,
    private navCtrl: NavController
  ) {
    this.searchId = this.crudService.getId();
    console.log(this.searchId);
  }
  ionViewWillEnter() {
    this.crudService.findParentById(this.searchId).subscribe((data: any) => {
      const studentData = data.data();

      console.log(studentData.Hijos);

      this.esperando = {
        Hijos: studentData.Hijos || [],
      };
    });
  }
  ngOnInit() {
    // this.crudService.findParentById(this.searchId).subscribe((data: any) => {
    //   const studentData = data.data();
    //   console.log(studentData.Hijos);
    //   this.esperando = {
    //     Hijos: studentData.Hijos || [],
    //   };
    // });
  }

  llegueClicked() {
    const studentsToAdd = {
      Carril: this.selectedCarril,
      Hijos: this.esperando.Hijos,
      Padre: this.searchId,
    };
    this.crudService
      .addWaitingStudents(studentsToAdd)
      .then(() => {
        console.log(
          'Estudiantes añadidos a la colección "EstudiantesPendientes" con éxito'
        );
      })
      .catch((error) => {
        console.error(
          'Error al añadir estudiantes a la colección "EstudiantesPendientes":',
          error
        );
      });

    this.mostrarListo = true;
    this.mostrarLlegue = false;
  }

  listoClicked() {
    this.crudService
      .searchStudentByIdParent(this.searchId)
      .subscribe((data: any) => {
        if (data.size > 0) {
          this.studentId = data.docs[0].id;

          this.crudService
            .removeWaitingStudent(this.studentId)
            .then(() => {
              console.log(this.studentId + ': Eliminado');
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          console.log('Usuario no encontrado');
        }
      });

    this.mostrarListo = false;
    this.mostrarLlegue = true;
  }
}
