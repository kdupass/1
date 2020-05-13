
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
// 당문 1~3장 퀘스트 코드//
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
// 당문 1~3장 퀘스트 코드 종료 //
// 천향 1~3장 퀘스트 코드//
function proc6(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var ch = '<tr><td>'+item.area+'</td>';
      ch += '<td>' + item.pquest + '</td>';
      ch += '<td>' + item.pid + '</td>';
      ch += '<td>' + item.cquest + '</td>';
      ch += '<td>' + item.cid + '</td>'
      ch += '<td>' + item.job + '</td></tr>';
      $("#job5").append(ch);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-ch.json',
      async:false,
      success : function (result) {
        proc6(result);
      }
    });
});
// 천향 1~3장 퀘스트 코드 종료 //
// 진무 1~3장 퀘스트 코드//
function proc7(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var jm = '<tr><td>'+item.area+'</td>';
      jm += '<td>' + item.pquest + '</td>';
      jm += '<td>' + item.pid + '</td>';
      jm += '<td>' + item.cquest + '</td>';
      jm += '<td>' + item.cid + '</td>'
      jm += '<td>' + item.job + '</td></tr>';
      $("#job6").append(jm);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-jm.json',
      async:false,
      success : function (result) {
        proc7(result);
      }
    });
});
// 진무 1~3장 퀘스트 코드 종료 //
// 오독 1~3장 퀘스트 코드//
function proc8(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var od = '<tr><td>'+item.area+'</td>';
      od += '<td>' + item.pquest + '</td>';
      od += '<td>' + item.pid + '</td>';
      od += '<td>' + item.cquest + '</td>';
      od += '<td>' + item.cid + '</td>'
      od += '<td>' + item.job + '</td></tr>';
      $("#job7").append(od);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-od.json',
      async:false,
      success : function (result) {
        proc8(result);
      }
    });
});
// 오독 1~3장 퀘스트 코드 종료 //
// 신도 1~3장 퀘스트 코드//
function proc9(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var sd = '<tr><td>'+item.area+'</td>';
      sd += '<td>' + item.pquest + '</td>';
      sd += '<td>' + item.pid + '</td>';
      sd += '<td>' + item.cquest + '</td>';
      sd += '<td>' + item.cid + '</td>'
      sd += '<td>' + item.job + '</td></tr>';
      $("#job8").append(sd);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-sd.json',
      async:false,
      success : function (result) {
        proc9(result);
      }
    });
});
// 신도 1~3장 퀘스트 코드 종료 //
// 이화 1~3장 퀘스트 코드//
function proc10(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var eh = '<tr><td>'+item.area+'</td>';
      eh += '<td>' + item.pquest + '</td>';
      eh += '<td>' + item.pid + '</td>';
      eh += '<td>' + item.cquest + '</td>';
      eh += '<td>' + item.cid + '</td>'
      eh += '<td>' + item.job + '</td></tr>';
      $("#job9").append(eh);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1-eh.json',
      async:false,
      success : function (result) {
        proc10(result);
      }
    });
});
// 이화 1~3장 퀘스트 코드 종료 //
// 4~10 [4장] 퀘스트 코드//
function proc410q4(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var q4 = '<tr><td>'+item.quest4.area+'</td>';
      q4 += '<td>' + item.quest4.pquest + '</td>';
      q4 += '<td>' + item.quest4.pid + '</td>';
      q4 += '<td>' + item.quest4.cquest + '</td>';
      q4 += '<td>' + item.quest4.cid + '</td>'
      q4 += '<td>' + item.quest4.job + '</td></tr>';
      $("#t410q4").append(q4);
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
// 4~10 [5장] 퀘스트 코드//
function proc410q5(result){
  $.each(result, function (index, item) {

// tbody에 출력

    var q5 = '<tr><td>'+item.quest5.area+'</td>';
      q5 += '<td>' + item.quest5.pquest + '</td>';
      q5 += '<td>' + item.quest5.pid + '</td>';
      q5 += '<td>' + item.quest5.cquest + '</td>';
      q5 += '<td>' + item.quest5.cid + '</td>'
      q5 += '<td>' + item.quest5.job + '</td></tr>';
      $("#t410q5").append(q5);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q4-q10.json',
      async:false,
      success : function (result) {
        proc410q5(result);
      }
    });
});
// 4~10 [5장] 퀘스트 코드 종료 //
