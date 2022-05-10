//secuancia de Fibonacci en java Script
//F0 F1 Fk=0,=1,=Fk−1+Fk−2,cuando k≥2



//la funcion parte construyendo una array con los numeros de Fibonacci hasta que el ultimo sea mayor al numero que se le entrega a ala funcion
//luego revisa si hay que retornar el ultimo numero o crear un num de Fibonacci mas 
function fibonacci(num){
    if (num <= 2) return 1;
    var nums = [1, 1];
    while (num > nums[nums.length -1]){
        const x = nums[nums.length -2] + nums[nums.length -1];
        nums.push(x);
    }

    if (nums.includes(num) == true){
        return (nums[nums.length -2] + nums[nums.length -1]);
    }
    return nums[nums.length -1];
}


const fs = require("fs");
//leyendo el archivo 
//codigo sacado de internet ajustado a las istrucciones de la tarea
fs.readFile('Tarea_FB.txt', 'utf8', (err, data) => {
	if(err){
		console.error(err);
		return;
    }
    var resultado = fibonacci(parseInt (data)) ;
    console.log('F('+parseInt(data)+')= '+ resultado) ;
})
  