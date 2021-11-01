function getInputValue(){
    // Selecting the input element and get its value
    //var hero = document.getElementById("myHero").value;
    //var villain = document.getElementById("theVillain").value;
    // Displaying the value
    //alert(hero + "  " + villain);
}

function start()
{
  var hero = document.getElementById("myHero").value;
  var villain = document.getElementById("theVillain").value;

  var heroes = [
    "Spiderman",
    "Thor",
    "Captain America",
    "Iron Man" ];

  var article = [
    "the",
    "a",
    "one",
    "some",
    "any" ];
    
// Hero Spiderman Conditionals
  if (hero == "Spiderman") {
    var verb = [
      "flipped",
      "jumped",
      "spidey-sensed",
      "stuck",
      "th-wipped" ];
    }

// Villain Rhino Conditionals
  if (villain == "Rhino") {
    var noun = [
      "horn",
      "tusk",
      "claw",
      "skin",
      "teeth" ];
    }

// Villian Green Goblin Conditionals
  if (villain == "Green Goblin") {
      var noun = [
        "pumpkin bombs",
        "devil sled",
        "mutagen",
        "explosive",
        "lasers" ];
      }

  var preposition = [
    "to",
    "from",
    "over",
    "under",
    "on" ];

  var story = document.getElementById( "ending" );
    ending.innerHTML = "Congratulations " + hero + ", you've defeated " + villain + "\n";

  for (var i = 0; i < 10; i++)
  {
    ending.innerHTML += capitalizeFirstLetter(article[Math.floor(Math.random() * article.length) ] ) + " ";
    ending.innerHTML += hero + " ";
    ending.innerHTML += noun[Math.floor(Math.random() * noun.length)] + " ";
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
