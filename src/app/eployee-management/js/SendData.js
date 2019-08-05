$(document).ready(function() {
    if (localStorage.getItem('exist') == 'false') {
        $('.currentId').text(localStorage.getItem('managerId'));
    }
    var apiUrl = 'http://localhost:56952/api/files';
    var fileByteArray = [];
    var saveButton = $('#save');
    $('#upload').change(readURL);
    saveButton.click(function() {
        if (fileByteArray.length != 0) {
            var urlSplit = $(location).attr('href').split('/');
            var employeeId = urlSplit[urlSplit.length - 1];
            var data = {
                Name: employeeId,
                Path: 'employee',
                Bytes: fileByteArray,
                EmployeeId: employeeId
            };
            var json = JSON.stringify(data);
            if ($('#avatar-img').attr('src') == 'assets/img/765-default-avatar.png') {
                $.ajax({
                    contentType: 'application/json',
                    data: json,
                    dataType: 'json',
                    success: function(data, textStatus, xhr) {

                    },
                    error: function() {
                        app.log("Device control failed");
                    },
                    processData: false,
                    type: 'POST',
                    url: apiUrl
                });
            } else {
                $.ajax({
                    contentType: 'application/json',
                    data: json,
                    dataType: 'json',
                    success: function(data, textStatus, xhr) {

                    },
                    error: function() {
                        app.log("Device control failed");
                    },
                    processData: false,
                    type: 'PUT',
                    url: apiUrl + "/" + employeeId
                });
            }
        }
    });

    function readURL(e) {
        var file = document.getElementById("upload").files[0];
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {
                var arrayBuffer = evt.target.result,
                    array = new Uint8Array(arrayBuffer);
                for (var i = 0; i < array.length; i++) {
                    fileByteArray.push(array[i]);
                }
            }
        }
    }
})