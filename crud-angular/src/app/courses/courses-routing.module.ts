import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CourseResolver } from './guards/course.resolver';


const routes: Routes = [

  { path: '', component:CoursesComponent },//quando for apenas /cursos agente vai renderizar o CoursesComponent
  { path: 'new', component:CourseFormComponent, resolve:{course: CourseResolver}  },
  { path: 'edit/:id', component:CourseFormComponent,resolve:{course: CourseResolver} }//no angular para passar parametro da url usamos ':'nome
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
