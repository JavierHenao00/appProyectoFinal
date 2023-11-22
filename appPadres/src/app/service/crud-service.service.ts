import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  idParent:string = "";
  collection:string = "Padres"

  constructor(private firestore:AngularFirestore) { }

  findParentById(id: string) {
    return this.firestore.collection(this.collection, ref => ref.where('Cedula', '==', id)).get();
  }




  create_NewParent(record: any){
    return this.firestore.collection(this.collection).add(record);
  }

  read_Parent(){
    return this.firestore.collection(this.collection).snapshotChanges();
  }

  

  deleteParent(id: string) {
    return this.firestore.collection(this.collection).doc(id).delete();
  }

  updateParent(parentId: string, updatedData: any) {
    return this.firestore.collection(this.collection).doc(parentId).update(updatedData);
  }

  setId(idParent:string){
    this.idParent = idParent;
  }

  getId(){
    return this.idParent;
  }
}
