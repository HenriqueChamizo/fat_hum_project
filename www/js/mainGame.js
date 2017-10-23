var score = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getSignal(){
  signals = ['+','-','/','*'];
  min = Math.ceil(0);
  max = Math.floor(3);
  return signals[Math.floor(Math.random() * (max - min + 1)) + min];
}

function clickOption(op, h1, h2, sg){
  result = getResult(h1,h2,sg)
  if (op == result){
    score += 10;
    return true
  }else{
    return false
  }
}

function getResult(h1,h2,sig){
	var calc = ""+h1+sig+h2+""
	return eval(calc)
}

function getOptions(hand1, hand2){
	options = [];

  var sum = hand1+hand2;
  var sub = hand1-hand2;
  var mul = hand1*hand2;
  var div = hand1/hand2;
  
  options = setInOptions(sum, options);
  options = setInOptions(sub, options);
  options = setInOptions(mul, options);
  options = setInOptions(div, options);
  return options;
}

function setInOptions(result, options){
  var ocup = true;
  do{
    var ind = getRandomIntInclusive(0, 3);
    if (options[ind] != undefined){
      ocup = true;
    }
    else{
      ocup = false;
      options[ind] = result; 
    }
  } while(ocup);

  return options;
}

function start(){

  var handOneValue = (getRandomIntInclusive(1,5));
  var handTwoValue = (getRandomIntInclusive(1,5));
  var signal = (getSignal());
  var options = getOptions(handOneValue, handTwoValue);

  var html = ('<ul class="handsGame"><li><img id="h1" src="img/hands/'+handOneValue+'.png"/></li><li>'+signal+'</li><li><img id="h2" src="img/hands/'+handTwoValue+'.png"/></li></ul>');

  html += '<ul class="optionsGame">';
  for (var i = 0; i < options.length; i++) {
    html += '<li onclick="clickOption('+options[i]+', '+handOneValue+','+handTwoValue+','+signal+')">'+options[i]+'</li>';
  }
  html += '</ul>'
  return body = html;
}


