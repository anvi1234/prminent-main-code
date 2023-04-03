import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AoutComponent } from './aout/aout.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course/course.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseDetailCsComponent } from './course-detail-cs/course-detail-cs.component';
import { CourseDetailsCmaComponent } from './course-details-cma/course-details-cma.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ImpLinksComponent } from './imp-links/imp-links.component'; 

initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    AoutComponent,
    FacultyComponent,
    CourseComponent,
    CourseDetailsComponent,
    CourseDetailCsComponent,
    CourseDetailsCmaComponent,
    GalleryComponent,
    ResultComponent,
    AdminComponent,
    AdminTableComponent,
    ImpLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgxSpinnerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
