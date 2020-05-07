// 2번 테이블 코드//
function proc(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var str = '<tr><td>'+item.area+'</td>';
      str += '<td>' + item.pquest + '</td>';
      str += '<td>' + item.pid + '</td>';
      str += '<td>' + item.cquest + '</td>';
      str += '<td>' + item.cid + '</td>'
      str += '<td>' + item.job + '</td></tr>';
      $("#job1").append(str);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-tb.json',
      success : function (result) {
        proc(result);
      }
    });
});
