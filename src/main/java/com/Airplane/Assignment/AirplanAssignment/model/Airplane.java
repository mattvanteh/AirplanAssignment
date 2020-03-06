package com.Airplane.Assignment.AirplanAssignment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Airplane {
    @Id
    @GeneratedValue

    private Long id;
    private  String name;

    @ManyToOne
    private Airport Airport;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public com.Airplane.Assignment.AirplanAssignment.model.Airport getAirport() {
        return Airport;
    }

    public void setAirport(com.Airplane.Assignment.AirplanAssignment.model.Airport airport) {
        Airport = airport;
    }
}
