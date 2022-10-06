import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //se meu caminho estiver vazio '' eu peço para ele fazer um redictTo, rota de courses patchMatch é full para garantir que ele vai ele verifica o rotramento e vai ter certeza que não vai ter nada, pode ser localhost:4200/ ou outras
  { path: '',  pathMatch:'full' , redirectTo: 'courses'},
  { path: 'courses' //esse caminho eu sou o nome que eu quiser
  ,loadChildren : ()=> import('./courses/courses.module').then(m=>m.CoursesModule)} //loadChildren: carregue a rota de forma automatica, já que ele é um modulo filho
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
