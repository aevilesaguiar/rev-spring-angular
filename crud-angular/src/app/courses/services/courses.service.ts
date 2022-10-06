import { Injectable } from '@angular/core';
import{ HttpClient } from'@angular/common/http';/*classe utilitaria que fornece */

import { Course } from './../model/course';
import{ delay, first, tap } from 'rxjs/operators'

/*obteremos a informação da API java
Para fazer isso precisamos desenvovler uma chamada ajax, que é uma chamada assincrona,
para o servidor e no angular nós temos uma classe utilitária que fornece todos os métodos
 para fazer essa conexão com a nossa API que é o httpClient*/

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API='api/courses';//ao invés de usar todo o http://localhost:8080/api/courses eu uso o api/courses

  constructor(private httpClient: HttpClient) { }

  //buscando no browser na aba network, localizamos fetch/XHR significa
  //XMLHttpRequest (XHR)  é um objeto que fornece funcionalidade ao cliente
  //para transferir dados entre um cliente e um servidor.
  //XMLHttpRequest (XHR) é uma API disponível em linguagens de script para
  //navegadores web tais como JavaScript. É utilizada para enviar requisições
  //HTTP ou HTTPS diretamente para um servidor web e carregar os dados de
  //resposta do servidor diretamente de volta ao script[1]. Apesar do
  //nome XMLHttpRequest, os dados podem ser recebidos do servidor através de
  //JSON[2], XML[3], HTML, ou como texto puro[4].
  list(){
    //lista de cursos para o component
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //first(carrega só o primeiro), take-assim que o servidor der uma resposta eu vou finalizar a inscrição
      first(),
      //delay(1000),
      tap(courses=> console.log(courses))
    );

}
//record=registro
save(record:Course){
   // console.log(record);
   return this.httpClient.post<Course>(this.API, record)//.pipe(first());
}
}
