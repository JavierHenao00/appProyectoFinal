import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service/crud-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  parent: any;
  parentId: string = '';
  password: string = '';
  // studentAddress: string = "";
  // children: { Name: string, Section: string }[] = [];
  // childName: string = "";
  // childSection: string = "";

  constructor(
    private crudService: CrudServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.crudService.read_Student().subscribe((data: any) => {
    //   this.students = data.map((e: any) => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       Name: e.payload.doc.data()["Name"],
    //       Age: e.payload.doc.data()["Age"],
    //       Address: e.payload.doc.data()["Address"],
    //       Hijos: e.payload.doc.data()["Hijos"] || []  // Asegúrate de manejar el caso en que Hijos no exista
    //     };
    //   });
    // });
  }

  searchParent() {
    this.crudService
      .findParentByCedula(this.parentId)
      .subscribe((data: any) => {
        if (data.size > 0) {
          const parentData = data.docs[0].data();
          const idParent = data.docs[0].id;

          this.parent = {
            Cedula: parentData.Cedula,
            Contra: parentData.Password,
          };

          if (this.parent.Contra === this.password) {
            this.crudService.setId(idParent);

            this.router.navigate(['/recoger']);
          } else {
            console.log('Contraseña Incorrecta');
          }
        } else {
          console.log('Usuario no encontrado');
        }
      });
  }

  //   CreateRecord() {
  //     let record: {
  //       Name: string,
  //       Age: number,
  //       Address: string,
  //       Hijos: { Name: string, Section: string }[]
  //     } = {
  //       Name: this.studentName,
  //       Age: this.studentAge,
  //       Address: this.studentAddress,
  //       Hijos: [...this.children, { Name: this.childName, Section: this.childSection }]
  //     };

  //     this.crudService.create_NewStudent(record).then(response => {
  //       this.studentName = "";
  //       this.studentAge = 0;
  //       this.studentAddress = "";
  //       this.children = []; // Limpiar el arreglo después de agregar los hijos
  //       this.childName = "";
  //       this.childSection = "";
  //       console.log(response);
  //     }).catch(error => {
  //       console.log(error);
  //     });
  //   }

  //   editStudent(searchName:string) {
  //     this.crudService.setId(searchName);
  //   }

  //   delete(id:string){
  //     this.crudService.deleteStudent(id).then(()=>{
  //       console.log(id + ": Elimindado");
  //     }).catch(e => {
  //       console.log(e);
  //     });
  //   }
}
