import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  //usamos quando é um component para e um component filho
  //esse input é tudo que vai ser passado/entrar para o componente courses
@Input()  courses:Course[]=[];
//os eventos que estão saindo
@Output() add= new EventEmitter(false); //Use em componentes com a diretiva para emitir eventos personalizados de forma síncrona ou assíncrona e registre manipuladores para esses eventos assinando uma instância.@Output
@Output() edit= new EventEmitter(false);

//readonly  um objeto final não dá para fazer mudança
  //as colunas que vamos mostrar
readonly  displayedColumns=['name','category','actions'];

  constructor() { }

  ngOnInit(): void {
  }


  onAdd(){
    this.add.emit(true);

  }

  onEdit(course: Course){
    this.edit.emit(course);

  }

}
