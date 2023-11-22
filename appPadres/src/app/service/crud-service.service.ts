import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  nameSearch:string = "";

  constructor(private firestore:AngularFirestore) { }
  create_NewStudent(record: any){
    return this.firestore.collection("Student").add(record);
  }

  read_Student(){
    return this.firestore.collection("Student").snapshotChanges();
  }

  findStudentByName(name: string) {
    return this.firestore.collection('Student').doc(name).get();
  }

  deleteStudent(id: string) {
    return this.firestore.collection('Student').doc(id).delete();
  }

  updateStudent(studentId: string, updatedData: any) {
    return this.firestore.collection('Student').doc(studentId).update(updatedData);
  }

  setId(nameSearch:string){
    this.nameSearch = nameSearch;
  }

  getId(){
    return this.nameSearch;
  }
}
