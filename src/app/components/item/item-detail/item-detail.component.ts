import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../../../core/models/item';
import { ItemService } from '../../../../core/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    console.log('id: ', this.route.snapshot.paramMap.get('id'));
  }

}
