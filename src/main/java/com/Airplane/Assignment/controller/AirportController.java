package com.Airplane.Assignment.controller;

import com.Airplane.Assignment.AirplanAssignment.model.Airport;
import com.Airplane.Assignment.AirplanAssignment.repositories.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/airport")
public class AirportController {
    @Autowired
    private AirportRepository airportRepository;

    @GetMapping
    public List<Airport>getAirport(){

        return airportRepository.findAll();
    }
    @PostMapping
    public void addAirport(@RequestBody Airport airport){
        airportRepository.save(airport);
    }
@DeleteMapping("/{id}")
    public void deleteAirportAirport(@PathVariable Long id){

        airportRepository.deleteById(id);

}
@PutMapping("/{id}")
    public void updateAirport(@PathVariable Long id,@RequestBody Airport airport){
        airport.setId((id));
        airportRepository.save(airport);
    }





}
