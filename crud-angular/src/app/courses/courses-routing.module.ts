import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';


const routes: Routes = [

  { path: '', component:CoursesComponent },//quando for apenas /cursos agente vai renderizar o CoursesComponent
  { path: 'new', component:CourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
