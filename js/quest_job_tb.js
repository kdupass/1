// 2번 테이블 코드//
function proc(tbresult){
  $.each(tbresult, function (index, tquest) {

// tbody에 출력

    var tb = '<tr><td>'+tquest.area+'</td>';
      tb += '<td>' + tquest.pquest + '</td>';
      tb += '<td>' + tquest.pid + '</td>';
      tb += '<td>' + tquest.cquest + '</td>';
      tb += '<td>' + tquest.cid + '</td>'
      tb += '<td>' + tquest.job + '</td></tr>';
      $("#job1").append(tb);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-tb.json',
      success : function (tbresult) {
        proc(tbresult);
      }
    });
});
