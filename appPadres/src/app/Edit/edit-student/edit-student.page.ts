import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/service/crud-service.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {
  searchId: string = '';
  students: any = {
    name: '',
    age: '',
    address: '',
    Hijos: [], // Agrega un arreglo vacío para manejar los hijos
  };

  newChildName: string = '';
  newChildSection: string = '';

  constructor(private crudService: CrudServiceService) {
    this.searchId = this.crudService.getId();
  }

  ngOnInit() {
    console.log(this.searchId);

    this.crudService.findStudentByName(this.searchId).subscribe((data: any) => {
      const studentData = data.data();

      this.students = {
        name: studentData.Name,
        age: studentData.Age,
        address: studentData.Address,
        Hijos: studentData.Hijos || [],
      };
    });
  }

  update() {
    const updatedData = {
      Name: this.students.name,
      Age: this.students.age,
      Address: this.students.address,
      Hijos: this.students.Hijos
    };

    // Agrega un nuevo hijo si se proporciona un nombre
    if (this.newChildName) {
      updatedData.Hijos.push({
        Name: this.newChildName,
        Section: this.newChildSection
      });
    }

    this.crudService
      .updateStudent(this.searchId, updatedData)
      .then(() => {
        console.log('Estudiante actualizado con éxito');
      })
      .catch((error) => {
        console.error('Error al actualizar el estudiante:', error);
      });
  }
}
