import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators
} from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../../../core/models/item';
import { ItemService } from '../../../../core/services/item.service';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
@Injectable()
export class ItemDetailComponent implements OnInit {
  // @Input()
  id: string;
  item: any;
  form: FormGroup;
  sub: any;
  states = [
    { name: 'Arizona', code: 'AZ' },
    { name: 'California', code: 'CA' },
    { name: 'Colorado', code: 'CO' },
    { name: 'New York', code: 'NY' },
    { name: 'Pennsylvania', code: 'PA' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private afs: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.createFormBuilder();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.itemService.get(this.id).subscribe((data: any) => {
        this.item = data;
        this.form.controls.range.setValue(this.item.range);
        this.form.controls.name.setValue(this.item.name);
        this.form.controls.state.setValue(this.item.state);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // convertApiItemData(data: any): Item {
  //   return {
  //     // id: data.id,
  //     // range: data.range
  //   };
  // }

  createFormBuilder() {
    this.form = this.fb.group({
      range: 0,
      name: '',
      state: ''
    });
  }

  update() {
    this.itemService.put(this.id, this.form.value);
  }
}
