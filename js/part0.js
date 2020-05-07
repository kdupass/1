$(document).ready(function(){
  $.getJSON('./json/q0.json', function(data){
    var part0 = [];

    $.each(data, function(i, quest){
      console.log(quest.length);
      for(var num = 0; num < quest.length; num++){
        part0.push('<tr><td>'+quest[num].area+'</td>');
        part0.push('<td>'+quest[num].pquest+'</td>');
        part0.push('<td>'+quest[num].pid+'</td>');
        part0.push('<td>'+quest[num].cquest+'</td>');
        part0.push('<td>'+quest[num].cid+'</td>');
        part0.push('<td>'+quest[num].job+'</td></tr>');
      }
    });
    $('#q0_table').html(html.join(''));
  });
});
