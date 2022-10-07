package com.loaine.controller;


import com.loaine.model.Course;
import com.loaine.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")// o/api é importante para distinguirmos o roteamento angular para o rotamento do servidor
@AllArgsConstructor //se eu não quiser expor o construtor eu posso usar essa anotação para fazer a injeção de dependencia
public class CourseController {
    //posso fazer injeção de dependencia via atributo, através de Setter e via controller
    //as boas práticas dizem que o melhor é via construtor e não precisa anotação autowired o spring faz
    //via propriedade
   // @Autowired
    //private CourseRepository courseRepository;

    private final CourseRepository courseRepository; //o construtor está implicito devido a anotação e o final é apenas para garantir que não haverá nenhuma alteração dessa instancia

    @GetMapping
    //@RequestMapping(method=RequestMethod.GET) é a mesma coisa que @GetMapping @AllArgsConstructor
    public List<Course> list(){
        return courseRepository.findAll();
    }


    //ResponseEntity entidade de Resposta do Spring
    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id){//@PathVariable parte da url
        //Optional de retorno do java
       return courseRepository.findById(id)
               .map(record-> ResponseEntity.ok().body(record))
               .orElse(ResponseEntity.notFound().build());

    }

/*
//fazendo post com ResponseEntity, a vantagem de usar é  caso vc precise manipular header, cabeçalho ou algumas informações do response
você tem todos os métodos para fazer isso. Se tivermos que manusear o response é indicado fazer com response status
,mas se tivesse que alterar o response seria indicado o Response Entity
    @PostMapping
    public ResponseEntity<Course> create(@RequestBody Course course){//O spring pega o Payload request o objeto  que vimos no angular e comprar com a classe model se houver nome diferente ele não faz o mapeamento e tudo isso consigo fazer devido o @RequestBody
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(courseRepository.save(course));
}*/

    @PostMapping
    @ResponseStatus(code=HttpStatus.CREATED)
    public Course create(@RequestBody Course course){
        return courseRepository.save(course);
    }






}
