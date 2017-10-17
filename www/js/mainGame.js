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


function getResult(h1,h2,sig){
	var calc = ""+h1+sig+h2+""
	return eval(calc)
}

function getOptions(correct){
	options = [];
	min = Math.ceil(0);
  	max = Math.floor(2);

  	var a = correct + 2;
  	var b = correct - 1;
  	
  	while((options[0] == undefined)&&(options[1] == undefined)&&(options[2] == undefined)){
  		var r = Math.floor(Math.random() * (max - min + 1)) + min;
  	}

}


