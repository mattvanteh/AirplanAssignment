var airplaneIdToDelete;
function getAirplane() {
    $.get('api/airplane', function (airplane) {
        displayAirplane(airplane);
    });
}

 var airplaneTable = $('#airplaneTable').DataTable({
        ajax: {
            url: 'api/airplane',
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'name' }
        ]
    });


function displayAirplane(airplane) {

    var airplaneContainer = $('#airplaneContainer');
    airplaneContainer.empty();

    $.each(airplane, function (index, teacher) {
          $('#airplaneContainer').append(' <tr><td>id: ' + airplane.id + '</td> +
            '<td> airplane: ' + airplane.name + '</td><td><button class="remove-button" airplaneId="' + airplane.id + '" >delete</button></td></tr>');
    });
    $('#airplaneContainer .remove-button').click(showRemoveAirplaneDialog);
}



function postAirplane(airplane) {
    var jsonAirplane = JSON.stringify(airplane);

    $.ajax({
        url: 'api/airplane',
        type: 'POST',
        contentType: 'application/json',
        data: jsonAirplane,
        success: function () {

            alert('you created a new airplane!');
        },
        error: function () {
            alert('try again. There is something wrong');
        }

    });

}

function createAirplane() {
    var airplaneName = $('#airplaneNameInput').val();

    if (!airplaneName) {
        alert('the airplane should be set');
        return;
    }
    if (airplaneName.length < 3) {
        alert(' name is short');
        return;
    }
    var airplane = {
        name: airplaneName
    };
    postAirplane(airplane);

}

function airplaneSelect(airplane) {
    var airport = {
        airplane: {
            id: $('#airplaneSelect').val()
        },
        name: $('#airplaneNameInput').val()
    }
    var jsonAirplane = JSON.stringify(airplane);
}
function showRemoveAirplaneDialog() {
    airplaneIdToDelete = $(this).attr('airplaneId');
    $('#airplaneModal').modal('show');
}



function removeAirplane() {
    var airplaneId = airplaneIdToDelete;
    $.ajax({
        url: 'api/airplane/' + airplaneId,
        type: 'DELETE',
        success: function () {
            alert('airplane' + airplaneId + 'deleted.');
            $('#airplaneModal').modal('hide');
        },
        error: function () {
            alert('Try again,Something went wrong..');
        }
    });
}

