import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

// import { Item } from '../models/item';

@Injectable()
export class ItemService {
  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore, private ar: ActivatedRoute) {
    this.db = db;
  }

  getAll(collectionName: string): Observable<any[]> {
    this.itemsCollection = this.db.collection<any>(collectionName);
    return this.itemsCollection.snapshotChanges().map(action => {
      return action.map(data => {
        return data.payload;
      });
    });
  }

  getId(collectionName: string): Observable<any> {
    this.itemsCollection = this.db.collection<any>(collectionName);
    return;
  }

  post(collectionName: string, body: any) {
    this.db.collection(collectionName).add(body);
  }

  // put(id: number, name: string) {
  //   this.db.collection('items').doc('LA').update({
  //     name: name
  //   })
  // }
}
