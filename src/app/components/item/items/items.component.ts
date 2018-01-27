import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';

import { Item } from '../../../../core/models/item';
import { ItemService } from '../../../../core/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [FormBuilder]
})

@Injectable()
export class ItemsComponent implements OnInit {
  items: Observable<any[]>;
  form: any;
  states = [
    {name: 'Arizona', code: 'AZ'},
    {name: 'California', code: 'CA'},
    {name: 'Colorado', code: 'CO'},
    {name: 'New York', code: 'NY'},
    {name: 'Pennsylvania', code: 'PA'},
  ];

  constructor(
    private itemService: ItemService,
    private fb: FormBuilder
  ) {
    this.createFormBuilder();
  }
  
  ngOnInit() {    
    // this.items = this.itemService.getAll();
  }

  addItem() {
    // console.info(this.form.valid);
  };

  createFormBuilder() {
    this.form = this.fb.group({
      id: [ '', Validators.minLength(5)],
      name: [ '', Validators.email],
      state: null,
    });
    console.info('1: ', this.states);
    const nameCtr = this.form.get('name').valueChanges.subscribe((res) => {
      console.info('res: ', this.fb);
    })
  }
}
