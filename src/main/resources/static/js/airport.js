var airportIdToDelete;

$(document).ready(function () {
    $('#getAirplaneButton').click(getAirplane);
    $('#getAirportButton').click(getAirport);
    $('#createAirplaneButton').click(createAirplane);
    $('#createAirportButton').click(createAirport);
    $('#deleteAirport').click(removeAirport);
    $('#deleteAirplane').click(removeAirplane);

    getAirplane();
    getAirport();



function getAirport() {
    $.get('api/airport', function (airport) {
        displayAirport(airport);
    });
}



function displayAirport(airport) {
    var airportContainer = $('#airportContainer');
    airportContainer.empty();
    $.each(airport, function (index, airport) {
        $('#airportContainer').append(' <tr><td>id: ' + airport.id + '   </td>     <td>    airport name: ' +
            airport.name + '  <td>  <td>    airport airplane: ' +
            airport.airplane.name + '  <td><td><button class="remove-button" courseId="' + airport.id + '">delete</button></td></tr>');
    });
    $('#airportContainer .remove-button').click(showRemoveAirportDialog);
}

function postAirport(airport) {
    var jsonAirport = JSON.stringify(airport);

    $.ajax({
        url: 'api/airport',
        type: 'POST',
        contentType: 'application/json',
        success: function (getAirport) {

            alert('creating new airport');
        },
        error: function () {
            alert('Try again ,Something is wrong');
        }

    });

}

function createAirport() {
    var airportName = $('#airportNameinput').val();


    if (!airportName) {
        alert('the airport name should set');
        return;
    }
    if (airportName.length < 2) {

        alert('try again, airport name is too short');
        return;
    }

    var airport = {
        name: airportName
    };
    postAirport(airport);

}


function showRemoveAirportDialog() {
    airportIdToDelete = $(this).attr('airportId');
    $('#airportModal').modal('show');
}

function removeAirport() {
    var airportId = airportIdToDelete;
    $.ajax({
        url: 'api/airport/' + airportId,
        type: 'delete',
        success: function () {
            alert('airport' + airportId + 'deleted.');
            $('#airportModal').modal('hide');
        },
        error: function () {
            alert('somethings went wrong');
        }
    });
}
