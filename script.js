//Variables
	var countS=0
	var countV=0
	var countH=0
	
	var countVStart=14
	
// RESET
	document.getElementById("resetAll").onclick=function(){
		window.location.href = window.location.href;
	}

//START HEALTH
	document.getElementById("villainTotalStart").innerHTML=countVStart;

		
//SHIELD START
	document.getElementById("shieldAdd").onclick=function(){
		countS=countS+1;
		document.getElementById("shieldDamage").innerHTML=countS;
	  	  if (countS > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	document.getElementById("shieldSubtract").onclick=function(){
		countS=Math.max(0, countS-1)
		document.getElementById("shieldDamage").innerHTML=countS;
	  
	  if (countS >= 0){
		  countFloat=Math.max(0,countA+countP-countS);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}
	
//villain START
	document.getElementById("villainAdd").onclick=function(){
		countV=countV+1;
		document.getElementById("villainDamage").innerHTML=countV;
	  	  if (countV > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	
	document.getElementById("villainAdd5").onclick=function(){
		countV=countV+5;
		document.getElementById("villainDamage").innerHTML=countV;
	  	  if (countV > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	
	document.getElementById("villainSubtract").onclick=function(){
		countV=Math.max(0, countV-1)
		document.getElementById("villainDamage").innerHTML=countV;
	  
	  if (countV >= 0){
		  countFloat=Math.max(0,countA+countP-countV);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}
	
	document.getElementById("villainSubtract5").onclick=function(){
		countV=Math.max(0, countV-5)
		document.getElementById("villainDamage").innerHTML=countV;
	  
	  if (countV >= 0){
		  countFloat=Math.max(0,countA+countP-countV);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}

//hero START
	document.getElementById("heroAdd").onclick=function(){
		countH=countH+1;
		document.getElementById("heroDamage").innerHTML=countH;
	  	  if (countH > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	document.getElementById("heroSubtract").onclick=function(){
		countH=Math.max(0, countH-1)
		document.getElementById("heroDamage").innerHTML=countH;
	  
	  if (countH >= 0){
		  countFloat=Math.max(0,countA+countP-countH);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}
