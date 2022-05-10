



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
//
fs.readFile('Tarea_FB.txt', 'utf8', (err, data) => {
	if(err){
		console.error(err);
		return;
    }
    var resultado = fibonacci(parseInt (data)) ;
    console.log('F('+parseInt(data)+')= '+ resultado) ;
})
  