import { DetectedIssue } from './../shared/models/detected-Issue';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: DetectedIssue, id?: string): Promise<string>{
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  get(collectionName: string) : Observable<DetectedIssue[]>{
    return this.afs.collection(collectionName).valueChanges() as Observable<DetectedIssue[]>;
  }
  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }
  update(collectionName: string, id: string, data: DetectedIssue) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string){
    console.log(id);
    return this.afs.collection(collectionName).doc(id).delete();
  }

}