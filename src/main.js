const $div = $("<div><span>1</span></div>");
$div.appendTo($("body")).print();
const $childList = $(".child");
$("body").append($childList).find("span").end().print();
//$("div").find(".child").end().print();
// console.log(
//   $div.appendTo($("body")).parent().children().end().end().addClass("red")
// );
