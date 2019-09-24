
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
			"https://api.openweathermap.org/data/2.5/weather",
			{
				"id":"687700",
				"appid":"aca2794480d2faec2d7717083dbacfba"
			},
			function(data){
				console.log(data);
				let ww = data.weather[0].icon;
				let outCenter = '';
				let outStart = '';
				let outEnd = '';
				console.log(ww);
				ww = "http://openweathermap.org/img/wn/" + ww +".png";
				//document.getElementById("blockW").style.cssText = "background-repeat: no-repeat";
				document.getElementById("blockW").style.cssText = "background-image:url("+ww+");background-repeat: no-repeat;background-size:cover";
				//document.getElementById("blockW").style = "color: blue;font-size:25px;background-image:url('http://openweathermap.org/img/wn/01n.png');";
				let tmp = (data.main.temp)-273;
				
				document.getElementById("blockW").innerHTML = tmp;

				console.log(data.main.humidity);
				console.log(data.main.pressure);
				console.log(data.sys.sunrise);
				console.log(data.sys.sunset);


				console.log(data.visibility);
				console.log(data.weather[0].main);
				console.log(data.weather[0].description);
				console.log(data.wind.speed);


				console.log(data.dt);
				console.log(data.clouds.all);

				outStart += '<p style = "text-align:center;margin: 0;padding: 0;"><img src='+ww+'></p>';
				outStart += '<p>Температура: '+ (Math.round(tmp*10))/10+'&#176</p>';
				outStart += '<p>'+data.weather[0].main+'</p>';
				outStart += '<p>'+data.weather[0].description+'</p>';


				$('#weatherBlocStart').html(outStart);


				outCenter += "Влажность: "+ data.main.humidity+"%<br>";
				outCenter += "Давление: "+ data.main.pressure+"<br>";
				outCenter += "Ветер: "+ data.wind.speed+" м/с<br>";
				outCenter += "Видимость: "+ data.wind.speed+" м/с<br>";
				$('#weatherBlocCenter').html(outCenter);

				


				outEnd += "Восход: "+unixTime(data.sys.sunrise)+"<br>";
				outEnd += "Закат: "+unixTime(data.sys.sunset)+"<br>";
				outEnd += "Последнее обновление данных: "+unixTime(data.dt)+"<br>";
				$('#weatherBlocEnd').html(outEnd);

			}
			);
	});
}


function unixTime(timeX) // время unix в обычное
{
	var date = new Date(timeX*1000);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	var timeY = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return timeY;
}