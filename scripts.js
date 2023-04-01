$(document).ready(function() {
  // Read the values from the file and update the input fields
  $.get('details.txt', function(data) {
    var lines = data.split('\n');
    $('#aadhar-id').val(lines[0]);
    $('#aadhar-hash').val(lines[1]);
  });

  // Update the input fields when the file is updated
  setInterval(function() {
    $.get('details.txt', function(data) {
      var lines = data.split('\n');
      $('#aadhar-id').val(lines[0]);
      $('#aadhar-hash').val(lines[1]);
    });
  }, 5000); // check every 5 seconds
});