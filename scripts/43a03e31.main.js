(function(){$(document).ready(function(){return $("#tutorial").tooltip({placement:"bottom"}),$("#btn-alchemy-rel").tooltip({placement:"bottom"}),$("pre").addClass("prettyprint"),prettyPrint(),$("#example3").addClass("hidden"),$("#full-app-btn").on("click",function(){return $("#examples").toggleClass("hidden"),$(".footer").toggleClass("hidden"),$(".header").toggleClass("hidden"),$("#btn-alchemy-rel").toggleClass("hidden"),$("#example3").toggleClass("hidden"),$("#examples").hasClass("hidden")?($("#full-app-btn").css("transform","translate(0%, 0%)"),$("#full-app-btn>h3").html("<i class='glyphicon glyphicon-arrow-left'></i> Go back to Example Code")):($("#full-app-btn").css("transform","translate(100%, 250%)"),$("#full-app-btn>h3").html("Click to view the Full App in Action <i class='glyphicon glyphicon-arrow-right'></i>"))})})}).call(this);