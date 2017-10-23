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
  options = setInOptions(div.toFixed(), options);
  return verificationOptions(options);
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

function verificationOptions(options){
  var indice = -100;
  var sugestao = -100;
  var opRepeat = -100;
  var exist = false;
  for(var x = 0; x < options.length; x++){
    var opX = options[x];
    for(var y = 0; y < options.length; y++){
      if (y != x){
        if (opX == options[y]){
          opRepeat = opX;
          break;
        }
      }
    }
  }
  if (opRepeat != -100){
    do{
      exist = false;
      sugestao = getRandomIntInclusive(-5, 25);
      for(var i = 0; i < options.length; i++){
        exist = (options[i] == sugestao && 
                sugestao != opRepeat);
        if (exist){
          break;
        }
        if (opRepeat == options[i]){
          indice = i;
          break;
        }
      }
      if (indice != -100){
        break;
      }
    } while (!exist);
    options[indice] = sugestao;
  }
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
    html += '<li onclick="clickOption('+options[i]+', \''+handOneValue+'\',\''+handTwoValue+'\',\''+signal+'\')">'+options[i]+'</li>';
  }
  html += '</ul>'
  return body = html;
}


