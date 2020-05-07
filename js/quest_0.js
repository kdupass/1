
// 1번 테이블 코드 //
// 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성
function proc(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var str = '<tr><td>'+item.area+'</td>';
      str += '<td>' + item.pquest + '</td>';
      str += '<td>' + item.pid + '</td>';
      str += '<td>' + item.cquest + '</td>';
      str += '<td>' + item.cid + '</td>'
      str += '<td>' + item.job + '</td></tr>';
      $("#q0_table").append(str);
    });
  };

function proc(result1){
        $.each(result1, function (index1, job1) {

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
      url: './json/q0.json',
      success : function (result) {
        proc(result);
      }
    });
});
// 1번 테이블 코드 종료 //

$(document).ready(function() {
    $.ajax({
      url: './json/q1-tb.json',
      success : function (result1) {
        proc(result1);
      }
    });
});
