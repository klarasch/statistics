var in_favour;
var against;
var abstentions;
var absent;
var total;

function getTotal () {
  in_favour = $('#id_in_favour');
  against = $('#id_against');
  abstentions = $('#id_abstentions');
  absent = $('#id_absent');
  total = parseInt(in_favour.val()) + parseInt(against.val()) + parseInt(abstentions.val()) + parseInt(absent.val());
  $('#total').html(total);
}

$( "input" ).keyup( getTotal );

$(document).ready( getTotal );
