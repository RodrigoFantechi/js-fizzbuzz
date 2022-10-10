for (let i = 1; i <=100; i++) {
    let x = i;
 
    if ((i%3)===0 && (i%5)===0){
     x ='fizz-buzz';
    } else if((i%3)===0){
         x = 'fizz';
     } else if ((i%5)===0){
         x ='buzz';
     } 
     console.log(x);
 }