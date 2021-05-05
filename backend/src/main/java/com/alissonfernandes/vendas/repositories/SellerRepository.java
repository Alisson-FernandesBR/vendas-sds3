package com.alissonfernandes.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alissonfernandes.vendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
