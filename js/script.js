$(document).ready((function(){$(".burger-menu").on("click",(function(){$("body").toggleClass("lock-scroll"),$(this).toggleClass("active-menu"),$(".menu").toggleClass("active-menu")})),$(".footer-menu-header").on("click",(function(){$(this).toggleClass("active-footer"),$(this).next(".footer-menu").toggleClass("active-footer")}))}));