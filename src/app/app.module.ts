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
  MatButtonModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';
import { NovelListsComponent } from './pages/novel-lists/novel-lists.component';
import { HeaderComponent } from './organisms/header/header.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { IconComponent } from './atoms/icon/icon.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './atoms/button/button.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';
import { CardComponent } from './molecules/card/card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { InputComponent } from './pages/input/input.component';
import { LinkComponent } from './atoms/link/link.component';
import { Error404Component } from './pages/error404/error404.component';
import { ListComponent } from './molecules/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    NovelListsComponent,
    HeaderComponent,
    FooterComponent,
    IconComponent,
    ButtonComponent,
    IconButtonComponent,
    CardComponent,
    DetailComponent,
    InputComponent,
    LinkComponent,
    Error404Component,
    ListComponent
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
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
