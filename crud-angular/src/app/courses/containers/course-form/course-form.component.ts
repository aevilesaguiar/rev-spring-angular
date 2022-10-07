import { Component, OnInit } from '@angular/core';
import {  NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  //declaro os campos de string
  form= this.formBuilder.group({
    //apenas nosso campo vai ter acesso
    _id:[''],
    name:[''],
    category:['']
});

  //FormBuilder tem toda a lógica que vai criar o nosso form group
  //Location é uma classe que pega a localização e volta a pagina
  constructor(private formBuilder: NonNullableFormBuilder,//quando eu uso a classe NonNullableFormBuilder não permite que o valor seja nulo
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location:Location,
    private route: ActivatedRoute ) {

  }
  //se estamos setando apenas alguns valores do formulario fazemos um patch
  //se estamos setendo todos os valores usamos set


  ngOnInit(): void {

    const course: Course =this.route.snapshot.data['course'];
    console.log(course);
    this.form.setValue({
      _id:course._id,
      name:course.name,
      category:course.category
    })

  }

  onSubmit(){

   // console.log(this.form.value)<-teste

   this.service.save(this.form.value)
   .subscribe(result=>this.onSucess(), error=>this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this._snackBar.open("Curso Salvo com Sucesso!", '',{duration: 3000});
    this.onCancel();
  }


  private onError(){
    this._snackBar.open("Erro ao salvar Curso", '',{duration: 3000});
  }

}
