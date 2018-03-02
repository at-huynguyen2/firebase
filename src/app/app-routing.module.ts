import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/item/items/items.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
