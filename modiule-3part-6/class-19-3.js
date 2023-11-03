function explain_callback(name,age,task){
     task();
    console.log('hello', name)
    console.log ('your age', age)
    
    }

    function frist(){
        console.log('1st Member')

    }

    function second(){
        console.log('2nd member')
        
    }




    explain_callback('sinan chowdhury',17 , frist)
    explain_callback('kinan chowdhury' ,18, second)

