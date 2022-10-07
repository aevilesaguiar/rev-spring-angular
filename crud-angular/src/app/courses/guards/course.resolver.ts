import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {

  constructor(private service: CoursesService){

  }


//o resolver pega as informações do parametro
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
//se minha route tem parametros e tem id(é o mesmo que declaramos na rota)
    if(route.params && route.params['id']){
      //se tem parametro e tem id eu vou buscar o objeto que tem esse id
      return this.service.loadByid(route.params['id']);

    }

    return of({_id:'',name:'',category:''});
  }
}
