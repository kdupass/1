// 2번 테이블 코드//
function proc(result1){
  $.each(result1, function (index1, job1) {

// tbody에 출력

    var tb = '<tr><td>'+job1.area+'</td>';
      tb += '<td>' + job1.pquest + '</td>';
      tb += '<td>' + job1.pid + '</td>';
      tb += '<td>' + job1.cquest + '</td>';
      tb += '<td>' + job1.cid + '</td>'
      tb += '<td>' + job1.job + '</td></tr>';
      $("#job1").append(tb);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-tb.json',
      success : function (result1) {
        proc(result1);
      }
    });
});
