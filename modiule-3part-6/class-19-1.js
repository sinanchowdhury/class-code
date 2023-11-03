
// module - 3
// pasrt-6, class-19-1
// subject- ki bhbe jor, bejor er man bahir korbo : funcation er madome 2 ta var ke akk shte kaj korbao;



function evenify(num){
    if( num % 2 == 0){
        console.log(num, ':is it even')
    }
    else{
        console.log(num, ':is it odd')
    }
}

function evenify_all (nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        evenify(num)
}
}




nums = [10,11,12,13,14,15,16,17,18,19,20]
evenify_all(nums);
   
    
friend_age = [19,77,44,56,43,56,40];
evenify_all(friend_age);

