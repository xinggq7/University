/*
*璇s鐨勪綔鐢ㄦ槸鐐归�涓嶅悓鐨勬爣棰樻椂锛屾爣棰樼殑棰滆壊璺熼殢鍙樺寲
*@auther锛歵heOthers
*/

function changeTitle(flag){
	

	//alert(flag);
	//鑾峰彇褰撳墠琚�涓殑鏍囬
	var currentLast = document.querySelector("a.current");
	//娓呴櫎琚�涓殑鏍囬
	currentLast.setAttribute("class","center");
	//閫変腑琚偣閫夌殑鏍囬
	var titleNow = document.getElementById(flag);
	titleNow.setAttribute("class","center current");
	
	

	 
	 
	//鏀瑰彉骞虫澘涓殑鍐呭
	var contain = document.getElementById("contain");

	contain.innerHTML="<div class='swiper-wrapper'>"+
					  "<div class='swiper-slide' style='background:url(img/11.png);background-size:100% 100%'>"+
						"<div class='title'>Slide 1</div>"+
					  "</div>"+
					  "<div class='swiper-slide' style='background:url(img/13.png);background-size:100% 100%'>"+
						"<div class='title'>Slide 2</div>"+
					  "</div>"+
					  "<div class='swiper-slide' style='background:url(img/12.png);background-size:100% 100%'>"+
						"<div class='title'>Slide 3</div>"+
					  "</div>"+
					"</div>";

	contain.setAttribute("class","swiper-container");
	var mySwiper = new Swiper('.swiper-container')

}