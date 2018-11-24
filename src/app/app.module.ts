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
  MatCardModule
} from '@angular/material';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './organisms/header/header.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { IconComponent } from './atoms/icon/icon.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './atoms/button/button.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';
import { CardComponent } from './atoms/card/card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { InputComponent } from './pages/input/input.component';
import { LinkComponent } from './atoms/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    IconComponent,
    ButtonComponent,
    IconButtonComponent,
    CardComponent,
    DetailComponent,
    InputComponent,
    LinkComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
