package com.alissonfernandes.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alissonfernandes.vendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
