var fizzbuzz = function(a,b,num) { //creating function, naming it Fizzbuzz. It will take 3 inputs.
    var tempNum = num //Using a temporary variable to store input number
    var result = '' //Creates the string based on its condition to log.
    var counter = 0 //Counts which iteration this function is currently on
    
    for(var i = 0; i < num; i++) { // Run loop times equal to the input number
     
        counter += 1 // Adds 1 to count per round on the loop

//         log(counter)
        // Conditions start //
        if (counter % a !== 0 && counter % b !== 0) { 
            result = counter


		// Conditions start //
        if (counter % 3 !== 0 && counter % 5 !== 0) { 
        	result = counter

        }
        if (counter % a === 0) {
            result = 'fizz'
        }
        if (counter % b === 0) {
            result = 'buzz'
        }
        if (counter % a === 0 && counter % b === 0) {
            result = 'fizzbuzz'
        }
        console.log(result)
        // Conditions end //
    }


}

// console.log whatever numbers you like! :]
console.log(fizzbuzz(3,5,20))