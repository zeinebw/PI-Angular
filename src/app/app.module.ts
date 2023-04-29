import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { InterestComponent } from './interest/interest.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbdModalOptionsComponent } from './ngbd-modal-options/ngbd-modal-options.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { CommonModule } from '@angular/common';
import { ContentFrontComponent } from './content-front/content-front.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    SlickCarouselModule,
    HttpClientModule, 
    ComponentsModule,
    NgbModule,
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    InterestComponent,
    NgbdModalOptionsComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    ContentFrontComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
