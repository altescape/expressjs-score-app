var score_results = [];

$('.buttons').on('click', 'button', function(e){
  e.preventDefault();
  
  var target = $(e.target);
  var id = target.closest('div').data('id');
  var score = target.closest('button').find('span').text();

  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    url: 'http://localhost:3000/image/' + id + '/score/' + score,
    data: JSON.stringify({ score: score, id: id }),
    complete: voteCast
  });

  score_results.push({ votes: { image: id, score: score } });
  
  console.log(target);
  console.log(id);
  console.log(score);
});

function voteCast () {
  console.log('Vote is cast', score_results);
}
