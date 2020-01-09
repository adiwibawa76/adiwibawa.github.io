$("document").ready(function(){
	/*Selector
	$("input").click(function(){
		alert("Selamat Datang")
	})
	$("#text1").css("color","red");
	$(".text2").css("background","red");
	$("#judul").addClass("merahkuning");
	$("#tombol").text("Coba");*/

	/*Efek
	$("#btn1").click(function(){
		$("p").hide();
	})
	$("#btn2").click(function(){
		$("p").show();
	})
	$("#btn3").click(function(){
		$("p").toggle();
	})
	$("#dbl1").dblclick(function(){
		$("p").hide();
	})
	$("#dbl2").dblclick(function(){
		$("p").toggle();
	})
	$("#text1").mouseover(function(){
		$("li").hide();
	})*/
	
	$("#coba1").click(function(){
		$(".f1").fadeOut();
		$(".f2").fadeOut("fast");
		$(".f3").fadeOut("slow");
		$(".f4").fadeOut(3000);
	})
	$("#coba2").click(function(){
		$(".f1").fadeIn();
		$(".f2").fadeIn("fast");
		$(".f3").fadeIn("slow");
		$(".f4").fadeIn(3000);
	})
	$("#coba3").click(function(){
		$(".f1").fadeTo(2000, 0.1);
		$(".f2").fadeTo("fast", 0.2);
		$(".f3").fadeTo("slow", 0.3);
		$(".f4").fadeTo(3000, 0.4);
	})
	$("#coba4").click(function(){
		$(".f1").fadeToggle();
		$(".f2").fadeToggle("fast");
		$(".f3").fadeToggle("slow");
		$(".f4").fadeToggle(3000);
	})
	$("#coba5").click(function(){
		$(".g1").slideUp();
		$(".g2").slideUp("fast");
		$(".g3").slideUp("slow");
		$(".g4").slideUp(3000);
	})
	$("#coba6").click(function(){
		$(".g1").slideDown();
		$(".g2").slideDown("fast");
		$(".g3").slideDown("slow");
		$(".g4").slideDown(3000);
	})
	$("#coba7").click(function(){
		$(".g1").slideToggle();
		$(".g2").slideToggle("fast");
		$(".g3").slideToggle("slow");
		$(".g4").slideToggle(3000);
	})

});