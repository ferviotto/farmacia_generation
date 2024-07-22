package com.generation.CRUD_Farmacia.repository;

import com.generation.CRUD_Farmacia.model.Categoria;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long> {
	List <Categoria> findAllByNomeContainingIgnoreCase (@Param("nome")String nome);
}
