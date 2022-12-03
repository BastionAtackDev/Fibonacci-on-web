let i=0;
    let input = prompt('How many numbers of the Fibonacci sequence do you want to know ?');
    let a=1;
    let b=1;
    let c=0;
    while(i < input){
        c=a+b;
        document.write(c+' ');
        b=c+a;
        i++;
        if(i<input){
        document.write(b+' ');}
        i++;
        a=b+c;
        if(i<input){
        document.write(a+' ');}
        i++;
    }