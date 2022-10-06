import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  //FormGroup no angular é quando temos um grupo de caampos
  form: FormGroup;

  //FormBuilder tem toda a lógica que vai criar o nosso form group
  //Location é uma classe que pega a localização e volta a pagina
  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location:Location) {
    this.form=this.formBuilder.group({
        name:[null],
        category:[null]
    })
  }


  ngOnInit(): void {}

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
