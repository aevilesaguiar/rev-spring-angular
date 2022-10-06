package com.loaine.controller;


import com.loaine.model.Course;
import com.loaine.repository.CourseRepository;
import lombok.AllArgsConstructor;
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

    @PostMapping
    //@RequestMapping(method=RequestMethod.POST)
    public void create(@RequestBody Course course){//O spring pega o Payload request o objeto  que vimos no angular e comprar com a classe model se houver nome diferente ele não faz o mapeamento e tudo isso consigo fazer devido o @RequestBody
       // System.out.println(course.getName()); <-teste

        courseRepository.save(course);
    }
    
}
