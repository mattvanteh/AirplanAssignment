package com.Airplane.Assignment.AirplanAssignment.repositories;

import com.Airplane.Assignment.AirplanAssignment.model.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirplaneRepository extends JpaRepository<Airplane,Long> {
}
