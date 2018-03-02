import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/item/items/items.component';
import { AppRoutingModule } from './/app-routing.module';

import { ItemService } from '../core/services/item.service';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';

import { IpTextComponent } from '../core/components/form/ip-text.component';
import { IpSelectComponent } from '../core/components/form/ip-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    IpTextComponent,
    IpSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AppRoutingModule // imports firebase/auth, only needed for auth features
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
