"use strict";

function dis() {
  var n1 = parseInt(document.getElementById("quick_cal_n1").value, 10);
  var n2 = parseInt(document.getElementById("quick_cal_n2").value, 10);

  if (isNaN(n1) || isNaN(n2)) {
    UIkit.notification({
      message: "請先輸入數值在上兩格中",
      status: 'warning',
      timeout: '2000'
    });
    n1 = 0;
    n2 = 0;
  } else {
    document.getElementById("quick_cal_ans").value = n1 - n2;
    addRecord();
  }
}

function sol_to_n1() {
  var convert = parseInt($('#sol_total').text(), 10);

  if (isNaN(convert)) {
    UIkit.notification({
      message: "請先進行買入賣出計算",
      status: 'warning',
      timeout: '2000'
    });
  } else document.getElementById("quick_cal_n1").value = convert;
}

function sol_to_n2() {
  var convert = parseInt($('#sol_total').text(), 10);

  if (isNaN(convert)) {
    UIkit.notification({
      message: "請先進行買入賣出計算",
      status: 'warning',
      timeout: '2000'
    });
  } else document.getElementById("quick_cal_n2").value = convert;
}

var innerHTMLCode = "";

function addRecord() {
  var table1 = document.getElementById("quick_cal_n1").value + "";
  var table2 = document.getElementById("quick_cal_n2").value + "";
  innerHTMLCode = innerHTMLCode + "<tr><td>" + table1 + "</td><td>-</td><td>" + table2 + "</td><td>=</td><td>" + document.getElementById("quick_cal_ans").value + "</td></tr>";
  document.getElementById("record-list").innerHTML = innerHTMLCode;
}

function clearRecord() {
  innerHTMLCode = "";
  document.getElementById("record-list").innerHTML = innerHTMLCode + "<tr><td>無計算紀錄</td></tr>";
}