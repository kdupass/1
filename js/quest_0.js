
// 서장 퀘스트 코드 //
// 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성
function proc1(result){
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

// json 파일 불러오기
$(document).ready(function(result) {
  $.ajax({
    url: './json/q0.json',
    async:false,
    success : function (result) {
      proc1(result);
    }
  })
})
// 서장 퀘스트 코드 종료 //
// 태백 1~3장 퀘스트 코드//
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
      async:false,
      success : function (result) {
        proc2(result);
      }
    });
});
// 태백 1~3장 퀘스트 코드 종료 //
// 신위 1~3장 퀘스트 코드//
function proc3(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var sw = '<tr><td>'+item.area+'</td>';
      sw += '<td>' + item.pquest + '</td>';
      sw += '<td>' + item.pid + '</td>';
      sw += '<td>' + item.cquest + '</td>';
      sw += '<td>' + item.cid + '</td>'
      sw += '<td>' + item.job + '</td></tr>';
      $("#job2").append(sw);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-sw.json',
      async:false,
      success : function (result) {
        proc3(result);
      }
    });
});
// 신위 1~3장 퀘스트 코드 종료 //
// 개방 1~3장 퀘스트 코드//
function proc4(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var gb = '<tr><td>'+item.area+'</td>';
      gb += '<td>' + item.pquest + '</td>';
      gb += '<td>' + item.pid + '</td>';
      gb += '<td>' + item.cquest + '</td>';
      gb += '<td>' + item.cid + '</td>'
      gb += '<td>' + item.job + '</td></tr>';
      $("#job3").append(gb);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-gb.json',
      async:false,
      success : function (result) {
        proc4(result);
      }
    });
});
// 개방 1~3장 퀘스트 코드 종료 //
// 개방 1~3장 퀘스트 코드//
function proc5(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var dm = '<tr><td>'+item.area+'</td>';
      dm += '<td>' + item.pquest + '</td>';
      dm += '<td>' + item.pid + '</td>';
      dm += '<td>' + item.cquest + '</td>';
      dm += '<td>' + item.cid + '</td>'
      dm += '<td>' + item.job + '</td></tr>';
      $("#job4").append(dm);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-dm.json',
      async:false,
      success : function (result) {
        proc5(result);
      }
    });
});
// 개방 1~3장 퀘스트 코드 종료 //
