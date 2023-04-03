import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';
import { AdminComponent } from './admin/admin.component';
import { AoutComponent } from './aout/aout.component';
import { CourseDetailCsComponent } from './course-detail-cs/course-detail-cs.component';
import { CourseDetailsCmaComponent } from './course-details-cma/course-details-cma.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import {  CourseComponent } from './course/course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ImpLinksComponent } from './imp-links/imp-links.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
   {path:"home", component:HomeComponent},
   {path:"about", component:AoutComponent},
   {path:"faculty", component:FacultyComponent},
   {path:"ca", component:CourseComponent},
   {path:"cs", component:CourseComponent},
   {path:"cma", component:CourseComponent},
   {path:"gallery", component:GalleryComponent},
   {path:"result", component:ResultComponent},
   {path:"course-detail/ca/foundation", component:CourseDetailsComponent},
   {path:"course-detail/ca/intermediate", component:CourseDetailsComponent},
   {path:"course-detail/ca/final", component:CourseDetailsComponent},
   {path:"course-detail/cma/foundation", component:CourseDetailsCmaComponent},
   {path:"course-detail/cma/intermediate", component:CourseDetailsCmaComponent},
   {path:"course-detail/cma/final", component:CourseDetailsCmaComponent},
   {path:"course-detail/cs/foundation", component:CourseDetailCsComponent},
   {path:"course-detail/cs/intermediate", component:CourseDetailCsComponent},
   {path:"course-detail/cs/final", component:CourseDetailCsComponent},
   {path:"admin-list", component:AdminTableComponent},
   {path:"banner-list", component:AdminTableComponent},
   {path:"teacher-list", component:AdminTableComponent},
   {path:"result-list", component:AdminTableComponent},
   {path:"gallery-list", component:AdminTableComponent},
   {path:"important-links", component:ImpLinksComponent},
   {path:"admin", component:AdminComponent},
   {path:"",component:HomeComponent},
   {path:"**",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
