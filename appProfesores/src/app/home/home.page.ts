import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service/crud-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  students: any;
  children: { Name: string, Section: string }[] = [];
  childName: string = "";
  childSection: string = "";
  carril1Students: any[] = [];
  carril2Students: any[] = [];
  carril3Students: any[] = [];

  constructor(private crudService: CrudServiceService) { }

  ngOnInit() {
    this.crudService.read_Student().subscribe((data: any) => {
      this.students = data.map((e: any) => {
        
        return {
          Hijos: e.payload.doc.data()["Hijos"] || [],  // Asegúrate de manejar el caso en que Hijos no exista
          Carril: e.payload.doc.data().Carril
        };
      });
      this.carril1Students = [];
    this.carril2Students = [];
    this.carril3Students = [];

      this.students.forEach((student: any) => {
        if (student.Carril === "carril1") {
          this.carril1Students.push(student);
        } else if (student.Carril === "carril2") {
          this.carril2Students.push(student);
        } else if (student.Carril === "carril3") {
          this.carril3Students.push(student);
        }
      });
    });
  } 


  getColorBySection(Section: string) {
    let color = '';
    switch (Section) {
      case 'Preescolar':
        color= 'yellow';
        break;
      case 'Primaria':
        color= 'red';
        break;
      case 'Bachillerato':
          color= 'green';
          break;
    }
  return color;
  }


}

