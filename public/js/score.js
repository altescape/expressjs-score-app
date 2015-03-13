$('.buttons').on('click', 'button', function(e){
  e.preventDefault();
  
  var target = $(e.target);
  var id = target.closest('div').data('id');
  var score = target.closest('button').find('span').text();

  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    url: 'http://localhost:3000/score/' + id + '/votes',
    data: JSON.stringify({score: score }),
    complete: voteCast
  });

  console.log(target);
  console.log(id);
  console.log(score);
});

function voteCast () {
  console.log('Vote is cast');
}
