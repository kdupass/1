
function checkjob() {
var check_job = document.getElementsByName("ckjob"); //체크박스 name
for (k = 0; k < check_job.length; k++) {
  var disign = document.getElementById("j"+[k+1]); // 보여질내용
  if(check_job[k]).checked == true ){
    disign.style.display = "blcok";
  }else{
    check_job[k].checked = false;
    disign.style.display = "none";
};
};
}
