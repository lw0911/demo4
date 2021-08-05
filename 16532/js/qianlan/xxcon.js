	function setTab03Syn ( i )
	{
		selectTab03Syn(i);
	}
	
	function selectTab03Syn ( i )
	{
		switch(i){
			case 1:
			document.getElementById("TabTab03Con1").style.display="block";
			document.getElementById("TabTab03Con2").style.display="none";
			document.getElementById("TabTab03Con3").style.display="none";
			document.getElementById("font1").style.color="#5fbdfa";
			document.getElementById("font2").style.color="#525252";
			document.getElementById("font3").style.color="#525252";
			break;
			case 2:
			document.getElementById("TabTab03Con1").style.display="none";
			document.getElementById("TabTab03Con2").style.display="block";
			document.getElementById("TabTab03Con3").style.display="none";
			document.getElementById("font1").style.color="#525252";
			document.getElementById("font2").style.color="#5fbdfa";
			document.getElementById("font3").style.color="#525252";
			break;
			case 3:
			document.getElementById("TabTab03Con1").style.display="none";
			document.getElementById("TabTab03Con2").style.display="none";
			document.getElementById("TabTab03Con3").style.display="block";
			document.getElementById("font1").style.color="#525252";
			document.getElementById("font2").style.color="#525252";
			document.getElementById("font3").style.color="#5fbdfa";
			break;
		}
	}

