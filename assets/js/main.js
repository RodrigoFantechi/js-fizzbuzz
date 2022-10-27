for (let i = 1; i <=100; i++) {
    let varianteDAppoggio = i;
 
    if ((i%3)===0 && (i%5)===0){
        varianteDAppoggio ='FizzBuzz';
    } else if((i%3)===0){
        varianteDAppoggio = 'Fizz';
     } else if ((i%5)===0){
        varianteDAppoggio ='Buzz';
     } 
     console.log(varianteDAppoggio);
 }

// oppure

 for (let i = 1; i <=100; i++) {
   
 
    if ((i%3)===0 && (i%5)===0){
        console.log('FizzBuzz');
    } else if((i%3)===0){
        console.log('Fizz');
     } else if ((i%5)===0){
        console.log('Buzz');
     } else{
     console.log(i);
    }
 }
