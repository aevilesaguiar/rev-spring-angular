package com.loaine.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data//equivale ao equals/tostring/getter/setter/constructor
@Entity
//@Table(name="cursos")
public class Course{

    @Id//chave primária
    @GeneratedValue(strategy = GenerationType.AUTO)//significa que esse valor será gerado automaticamentepelo BD quando fizermos o insert
    @JsonProperty("_id")//eu passo o nome que quero utilizar, quando jakson estiver fazendo a transformação de objeto para json ou de json para para objeto
    private Long id;

    @Column(name = "nome", length = 200, nullable = false)//nullabe quer dizer que ele não permite que seja criado um registro nulo(not null)
    private String name;

    @Column(name = "categoria", length = 10, nullable = false)
    private String category;




}