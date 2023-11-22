import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service/crud-service.service';


@Component({
  selector: 'app-registro-padre',
  templateUrl: './registro-padre.page.html',
  styleUrls: ['./registro-padre.page.scss'],
})
export class RegistroPadrePage implements OnInit {

  parent:any;
  NameParent:string = "";
  CedulaParent:string="";
  PhoneParent:string="";
  EmailParent:string="";
  PasswordParent: string="";
  constructor(private crudService: CrudServiceService) { }

  ngOnInit() {
    this.crudService.read_Parents().subscribe((data: any) => {
      this.parent = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()["Name"],
          Cedula: e.payload.doc.data()["Cedula"],
          Phone: e.payload.doc.data()["Phone"],
          Email: e.payload.doc.data()["Email"],
          Password: e.payload.doc.data()["Password"]
        };
      });
    });
  }

  CreateRecord(){
    let record: {

      Name:string,
      Cedula:string,
      Phone:string,
      Email:string,
      Password: string
    } ={
      Name: this.NameParent,
      Cedula: this.CedulaParent,
      Phone: this.PhoneParent,
      Email:this.EmailParent,
      Password:this.PasswordParent

    };
    // record['Name'] = this.NameParent;
    // record['Cedula'] = this.CedulaParent;
    // record['Phone'] = this.PhoneParent;
    // record['Email'] = this.EmailParent;
    // record['password'] = this.PasswordParent;

    this.crudService.register_newParent(record).then(Response=>{
      this.NameParent="";
      this.CedulaParent="";
      this.PhoneParent="";
      this.EmailParent="";
      this.PasswordParent="";
      console.log(Response)

    })
    .catch(error=>{
console.log(error);
    })
 
 }

}