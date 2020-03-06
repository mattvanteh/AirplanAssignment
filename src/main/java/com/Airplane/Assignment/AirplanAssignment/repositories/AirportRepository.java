package com.Airplane.Assignment.AirplanAssignment.repositories;

import com.Airplane.Assignment.AirplanAssignment.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airport,Long> {
}
