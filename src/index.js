function sum(num1, num2) {
    return num1 + num2;
  }
  
  function calc(num1, num2, callback) {
    return callback(num1, num2);
  };
  
  console.log(calc(2, 2, sum));


  // setTimeout contiene  en si mismo un callback al llamar una funcion anonima de temporizado
  setTimeout(function () {
    console.log('Hola JavaScript');
  }, 5000)
  

  // otra forma de usar setTimeout 
  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Oscar');