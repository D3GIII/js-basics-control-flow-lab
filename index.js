function scuberGreetingForFeet(x){
  // Write your code here!
  if (x <= 400){
  	return 'This one is on me!';
  } else if (x > 2000 && x <= 2500){
  	return 'I will gladly take your thirty bucks.';
  }else{
  	return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(string){
  // Write your code here!
  let message;
  switch(string){
  	case 'generous':
  	message = 'Thank you so much.';
  	break;

  	case 'not as generous':
  	message = 'Thank you.'
  	break;

  	default:
  	message = 'Bye.';
  	break;
  }
  return message;
}