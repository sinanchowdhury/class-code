// subjest - ager class er function ke kaji lagai kamne return kore, retun koi kaje ase

function evenify(num){
   var result;
   if( num % 2 == 0){
       result = num;
   }
   else{
       result=num*2;
   }
   return result;
}

 var result = evenify(13)
 var sqaure = result * result;
 console.log('square', sqaure )

function evenify_all (nums){
    var  even_array = []
   for (let i = 0; i < nums.length; i++) {
       const num = nums[i]
       var result = evenify(num)
       even_array.push(result);
}
      return even_array;

}

var nums = [10,11,12,13,14,15,16,17,18,19,20]
var nums_even = evenify_all(nums);
console.log(nums_even);
  
   
friend_age = [19,77,44,56,43,56,40];
// evenify_all(friend_age);

