import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TextfieldComponent } from './atoms/textfield/textfield.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';
import { JournalListComponent } from './pages/journal-list/journal-list.component';
import { HeaderComponent } from './organisms/header/header.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { HeaderItemsComponent } from './molecules/header-items/header-items.component';
import { FooterItemsComponent } from './molecules/footer-items/footer-items.component';
import { StoreCardComponent } from './molecules/store-card/store-card.component';
import { JournalCardComponent } from './molecules/journal-card/journal-card.component';
import { WorkingTimeCardComponent } from './molecules/working-time-card/working-time-card.component';
import { SummaryCommentCardComponent } from './molecules/summary-comment-card/summary-comment-card.component';
import { IconComponent } from './atoms/icon/icon.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './atoms/button/button.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    JournalListComponent,
    HeaderComponent,
    FooterComponent,
    HeaderItemsComponent,
    FooterItemsComponent,
    StoreCardComponent,
    JournalCardComponent,
    WorkingTimeCardComponent,
    SummaryCommentCardComponent,
    IconComponent,
    ButtonComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
