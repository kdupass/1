var q410 = $.ajax({
  dataType: "json",
  url: './json/q4-q10.json',
  data: data
});
// 4~10 [4장] 퀘스트 코드//
function proc410q4(result){
  $.each(result, function (index, item) {
// tbody에 출력
    var q4 = '<tr><td>'+item.q410.quest4[0].area +'</td>';
      q4 += '<td>' + item.q410.quest4[0].pquest + '</td>';
      q4 += '<td>' + item.q410.quest4[0].pid + '</td>';
      q4 += '<td>' + item.q410.quest4[0].cquest + '</td>';
      q4 += '<td>' + item.q410.quest4[0].cid + '</td>'
      q4 += '<td>' + item.q410.quest4[0].job + '</td></tr>';
      $("#t410q4").append(q4);
    };
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q4-q10.json',
      async:false,
      success : function (result) {
        proc410q4(result);
      }
    });
});
// 4~10 [4장] 퀘스트 코드 종료 //
