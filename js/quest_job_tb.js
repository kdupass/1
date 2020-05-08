// 2번 테이블 코드//
function proc2(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var tb = '<tr><td>'+item.area+'</td>';
      tb += '<td>' + item.pquest + '</td>';
      tb += '<td>' + item.pid + '</td>';
      tb += '<td>' + item.cquest + '</td>';
      tb += '<td>' + item.cid + '</td>'
      tb += '<td>' + item.job + '</td></tr>';
      $("#job1").append(tb);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-tb.json',
      // async:false,
      success : function (result) {
        proc2(result);
      }
    });
});
