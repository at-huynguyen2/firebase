
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';


import { Item } from '../models/item';

@Injectable() 
export class ItemService {
  db: AngularFirestore;
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.db = db;
  }
  
  getAll(): Observable<any[]> {
    this.items = this.db.collection('items').valueChanges();
    return this.items;
  }

  add(id: number, name: string) {
    //doc??
    // this.db.collection('items').doc('LA').set({
    //   id: id,
    //   name: name
    // })
    this.db.collection('items').add({
      id: id,
      name: name
    })
  }

  put(id: number, name: string) {
    this.db.collection('items').doc('LA').update({
      id: id,
      name: name
    })
  }
}