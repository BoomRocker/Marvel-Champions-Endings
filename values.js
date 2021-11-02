
/////////////////////////////////////

function start()
{
	var hero = document.getElementById("myHero").value;
	
	var villain = document.getElementById("theVillain").value;
	
	var article = ["the","a","one","some","any" ];
	
	var preposition = [ "to","from","over","under","on" ];
	
	var fallflavor = [ "falls to the ground with a great THUD.", "crashes into an armored truck, with a fantastic CRASH" ];
    
// Hero Spiderman Conditionals
  if (hero == "Spiderman") { var verb = ["flipped","jumped","spidey-sensed","stuck","th-wipped" ]; }

// Villain Rhino Conditionals
  if (villain == "Rhino") { 
	var noun = [ "horn", "tusk", "claw", "skin","teeth" ]; 
	var verb = [ "skulked", "lumbered", "stumbled", "trampled","thudded" ]; 
	}

// Villian Green Goblin Conditionals
  if (villain == "Green Goblin") { 
	var noun = [ "pumpkin bombs","devil sled","mutagen","explosive","lasers" ];	
	var verb = [ "thrust", "skimpered", "slinked", "slid","splat" ]; 
	}
	
	endingHeader.innerHTML = "Congratulations " + hero + ", you've defeated " + villain + " !\n";

  var story = document.getElementById( "storyContent" );
  	ending.innerHTML = "\n";
	  for (var i = 0; i < 5; i++)
	  {
		//ending.innerHTML += capitalizeFirstLetter(article[Math.floor(Math.random() * article.length) ] ) + " ";
		ending.innerHTML += villain + " ";
		//ending.innerHTML += noun[Math.floor(Math.random() * noun.length)] + " ";
		ending.innerHTML += fallflavor[Math.floor(Math.random() * fallflavor.length)] + " ";
		ending.innerHTML += verb[Math.floor(Math.random() * verb.length)] + " ";
		ending.innerHTML += article[Math.floor(Math.random() * article.length)] + " ";
		ending.innerHTML += noun[Math.floor(Math.random() * noun.length)] + " ";
		ending.innerHTML += preposition[Math.floor(Math.random() * preposition.length)] + " ";
		ending.innerHTML += article[Math.floor(Math.random() * article.length)] + " ";
		ending.innerHTML += noun[Math.floor(Math.random() * noun.length)] + ". ";
	  }
  ending.innerHTML += "\nTHE END or is it?\n";
}

function capitalizeFirstLetter(input)
{
    return input.charAt(0).toUpperCase() + input.slice(1);
}

//window.addEventListener( "load", start, false );
