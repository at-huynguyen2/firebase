import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

// import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemDoc: AngularFirestoreDocument<any>;
  items: Observable<any[]>;
  item: Observable<any>;

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private readonly db: AngularFirestore) {
    this.itemsCollection = this.db.collection<any>('items');
  }

  getAll(): Observable<any[]> {
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        return {
          id: a.payload.doc.id,
          ...a.payload.doc.data()
        };
      });
    });
    return this.items;
  }
  get(id: string): Observable<any> {
    return this.itemsCollection.doc(id).valueChanges();
  }

  add(body: any) {
    this.db.collection('items').add(body);
  }

  put(id: string, body: any) {
    this.db
      .collection('items')
      .doc(id)
      .update(body);
  }
}
