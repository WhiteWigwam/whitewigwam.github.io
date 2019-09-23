
function change()
{
	var h = window.innerHeight;
	var w = window.innerWidth;

	document.getElementById("row1d2").innerHTML=w; 
	document.getElementById("row2d2").innerHTML=h; 
}



function weather(){
	$(document).ready(function(){
		$.get(
			"http://api.openweathermap.org/data/2.5/weather",
			{
				"id":"687700",
				"appid":"aca2794480d2faec2d7717083dbacfba"
			},
			function(data){
				console.log(data);
				let ww = data.weather[0].icon;
				console.log(ww);
				ww = "http://openweathermap.org/img/wn/" + ww +".png";
				document.getElementById("blockW").style.cssText = "background-image:url("+ww+")";
				//document.getElementById("blockW").style = "color: blue;font-size:25px;background-image:url('http://openweathermap.org/img/wn/01n.png');";
				let tmp = (data.main.temp)-273;
				console.log(ww);
				document.getElementById("blockW").innerHTML = tmp;
			}
			);
	});
}
