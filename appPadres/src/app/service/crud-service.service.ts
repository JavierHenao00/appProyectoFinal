import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudServiceService {
  idParent: string = '';
  collection: string = 'Padres';
  collection2: string = 'EstudiantesPendientes';
  parentData: any;

  constructor(private firestore: AngularFirestore) {}

  //PARA LOGIN
  setId(idParent: string) {
    this.idParent = idParent;
  }

  getId() {
    return this.idParent;
  }

  findParentByCedula(id: string) {
    return this.firestore
      .collection(this.collection, (ref) => ref.where('Cedula', '==', id))
      .get();
  }

  //PARA AGEGAR HIJO

  updateParent(parentId: string, updatedData: any) {
    return this.firestore
      .collection(this.collection)
      .doc(parentId)
      .update(updatedData);
  }

  findParentById(parentId: string) {
    return this.firestore.collection(this.collection).doc(parentId).get();
  }

  //PARA LLEGUÉ

  addWaitingStudents(students: any) {
    return this.firestore.collection(this.collection2).add(students);
  }

  searchStudentByIdParent(parentId: string) {
    return this.firestore
      .collection(this.collection2, (ref) => ref.where('Padre', '==', parentId))
      .get();
  }

  removeWaitingStudent(studentId: any){
    return this.firestore.collection(this.collection2).doc(studentId).delete();
  }

  //PARA REGISTRO
  register_newParent(record: any) {
    return this.firestore.collection(this.collection).add(record);
  }

  read_Parents() {
    return this.firestore.collection(this.collection).snapshotChanges();
  }
}
