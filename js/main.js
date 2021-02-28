/*Chapter18*/
var iCount = 2;

window.onload=function()
{
	/*Chapter17*/
	var oDt=new Date();
	var sWd="";

	var week = ["日", "一", "二", "三", "四", "五", "六"];
	var iMonth = parseInt(oDt.getMonth()) + 1;
	document.getElementById("date").innerHTML="<span>"+oDt.getFullYear()+"年"+iMonth+"月"+oDt.getDate()+"日 星期"+week[oDt.getDay()]+"</span>";
	var iTimerid = window.setInterval("showtime()",1000);
	
	/*Chapter18*/
	if(document.getElementById("a1") != null)
	{
		document.getElementById("a1").onclick = function()
		{
			iCount = 1;
			changebgcolor(iCount);
		}
	}
	if(document.getElementById("a2") != null)
	{
		document.getElementById("a2").onclick = function()
		{
			iCount = 2;
			changebgcolor(iCount);
		}
	}
	if(document.getElementById("a3") != null)
	{
		document.getElementById("a3").onclick = function()
		{
			iCount = 3;
			changebgcolor(iCount);
		}
	}
	if(document.getElementById("a4") != null)
	{
		document.getElementById("a4").onclick = function()
		{
			iCount = 4;
			changebgcolor(iCount);
		}
	}
	
	var iCarouselid = window.setInterval("carousel()", 2000);
	
	/**exchange**/
	var images = ["images/exchange01.gif", "images/exchange02.gif", "images/exchange03.gif"];
	var index = 1;
	var backbutton = document.getElementById("back");
	var nextbutton = document.getElementById("next");
	var img = document.getElementById("exchange");
	nextbutton.addEventListener("click",function(){
		if (index >= images.length)
		{
			index = 0;
		}
		img.src = images[index++];
	},false);
	backbutton.addEventListener("click",function(){
		if (index < 0)
		{
			index = images.length-1;
		}
		img.src = images[index--];
	},false);
	
	/**exchange3**/
	var images2 = ["images/exchange21.jpg", "images/exchange22.jpg", "images/exchange23.jpg"];
	var index2 = 0;
	var backbutton2 = document.getElementById("back2");
	var nextbutton2 = document.getElementById("next2");
	var img2 = document.getElementById("exchange2");
	nextbutton2.addEventListener("click",function(){
		img2.src = images2[index2++];
		if (index2 >= images2.length)
		{
			index2 = 0;
		}
		
		
	},false);
	backbutton2.addEventListener("click",function(){
		if (index2 <= 0)
		{
			index2 = images2.length-1;
		}
		img2.src = images2[index2--];
		
	},false);
	
	/**exchange4**/
	var images3 = ["images/exchange31.jpg", "images/exchange32.jpg", "images/exchange33.jpg", "images/exchange34.jpg"];
	var index3 = 1;
	var backbutton3 = document.getElementById("back3");
	var nextbutton3 = document.getElementById("next3");
	var img3 = document.getElementById("exchange3");
	nextbutton3.addEventListener("click",function(){
		if (index3 >= images3.length)
		{
			index3 = 0;
		}
		img3.src = images3[index3++];
	},false);
	backbutton3.addEventListener("click",function(){
		if (index3 < 0)
		{
			index3 = images3.length-1;
		}
		img3.src = images3[index3--];
	},false);
	
	
}

function showtime()
{
	var oDt = new Date();
	var iTimerid;
	var sTime = "";

	sTime += time(oDt.getHours()) + ":"+ time(oDt.getMinutes()) + ":"+  time(oDt.getSeconds());
	document.getElementById("time").innerHTML = "<span>" + sTime + "</span>";
}
function time(x)
{
	if (x > 9)
		return x;
	else
		return "0" + x;
}

/*Chapter18*/
function carousel()
{
	var sImgSrc = eval("'images/b-ad'+iCount.toString()+'.jpg'");
	var sAchange = eval("'a'+iCount.toString()");
	/*记录需要变回颜色的链接顺序*/
	var iA = iCount - 1;
	if (iA == 0)
	{
		iA = 4;
	}
	var sArestore = eval("'a'+iA.toString()");
	document.getElementById("banner").src = sImgSrc;
	document.getElementById(sAchange).style.backgroundColor = "#5F8EC2";
	document.getElementById(sArestore).style.backgroundColor = "#2B4D71";
	iCount = iCount + 1;
	if (iCount == 5)
	{
		iCount = 1;
	}
}

function changebgcolor(iNum)
{
	document.getElementById("banner").src=eval("'images/b-ad'+iNum.toString()+'.jpg'");
	for (var iC=1; iC<=4; iC++)
	{
		var sA = eval("'a' + iC.toString()");
		if (iC==iNum)
		{
			document.getElementById(sA).style.backgroundColor="#5F8EC2";
		}
		else
		{
			document.getElementById(sA).style.backgroundColor="#2B4D71";
		}
	}
}

/* -----------------------------------------------菜单搜索-------------------------------------------- */


			
function myFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myMenu");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}



function view() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

