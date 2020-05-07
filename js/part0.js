$(document).ready(function(){
  $.getJSON('./json/q0.json', function(data){
    var part0 = [];

    $.each(data, function(i, quest){
      console.log(quest.p0.length);
      for(var num = 0; num < quest.p0.length; num++){
        part0.push('<tr><td>'+quest.p0[num].area+'</td>');
        part0.push('<td>'+quest.p0[num].pquest+'</td>');
        part0.push('<td>'+quest.p0[num].pid+'</td>');
        part0.push('<td>'+quest.p0[num].cquest+'</td>');
        part0.push('<td>'+quest.p0[num].cid+'</td>');
        part0.push('<td>'+quest.p0[num].job+'</td></tr>');
      }
    });
    $('#q0_table').html(html.join(''));
  });
});
