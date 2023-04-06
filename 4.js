

function lessThanFive(num){
	if(num<5){
		console.log(num+" IS less than five!");
	}

	else if (num>=5){
		console.log(num+" is NOT less than five!");
	}

	else {
		console.log(num+" is not a number!");
	}
}

lessThanFive(3);
lessThanFive(6);
lessThanFive("bananas");