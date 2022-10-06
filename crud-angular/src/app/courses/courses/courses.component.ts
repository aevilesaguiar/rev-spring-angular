import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //$- significa que é um observable
  courses$:Observable <Course[]>;
//as colunas que vamos mostrar
  displayedColumns=['name','category','actions'];


//Router a classe que controla o roteamento no angular
//route: ActivatedRoute -> referencia para a rota atual
  constructor(private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute ) {
    //httperrorResponse é o objeto que retorna o erro juntamente com o código e mensagem

    this.courses$=this.coursesService.list()
        .pipe(
          catchError(error =>{
            this.onError('Erro ao carregar cursos!')
            return of([])//cria um Observable que vai retornar um array vazio
          })
        );

  }
  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.route})//o angular relativeTo:this.route e agrega a rota atual
  }

}
