//Variables
	var countS=0
	var countV=0
	var countH=0
	var countSS=0
	
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
	document.getElementById("shieldAdd5").onclick=function(){
		countS=countS+5;
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
	document.getElementById("shieldSubtract5").onclick=function(){
		countS=Math.max(0, countS-5)
		document.getElementById("shieldDamage").innerHTML=countS;
	  
	  if (countS >= 0){
		  countFloat=Math.max(0,countA+countP-countS);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}
	
//Side Scheme START
	document.getElementById("sSchemeAdd").onclick=function(){
		countSS=countSS+1;
		document.getElementById("sSchemeDamage").innerHTML=countSS;
	  	  if (countSS > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	document.getElementById("sSchemeAdd5").onclick=function(){
		countSS=countSS+3;
		document.getElementById("sSchemeDamage").innerHTML=countSS;
	  	  if (countSS > 0 ){
			count=Math.max(0, count-1);
			document.getElementById("damageTotaler").innerHTML=count;
	   } else {
		   
	   }
	}
	document.getElementById("sSchemeSubtract").onclick=function(){
		countSS=Math.max(0, countSS-1)
		document.getElementById("sSchemeDamage").innerHTML=countSS;
	  
	  if (countSS >= 0){
		  countFloat=Math.max(0,countA+countP-countSS);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}
	document.getElementById("sSchemeSubtract5").onclick=function(){
		countSS=Math.max(0, countSS-3)
		document.getElementById("sSchemeDamage").innerHTML=countSS;
	  
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
	
	document.getElementById("heroAdd5").onclick=function(){
		countH=countH+5;
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
	
	document.getElementById("heroSubtract5").onclick=function(){
		countH=Math.max(0, countH-5)
		document.getElementById("heroDamage").innerHTML=countH;
	  
	  if (countH >= 0){
		  countFloat=Math.max(0,countA+countP-countH);
		  count=countFloat;
		 document.getElementById("damageTotaler").innerHTML=Math.max(0, count);
		}
	}
