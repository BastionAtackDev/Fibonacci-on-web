function generate(){
    let i=0;
    let input = prompt('How many numbers of the Fibonacci sequence do you want to know ?');
    let string = ""
    let a=1;
    let b=1;
    let c=0;
    while(i < input){
        c=a+b;
        string = string + c+' ';
        b=c+a;
        i++;
        if(i<input){
        string = string + b+' ';}
        i++;
        a=b+c;
        if(i<input){
        string = string + a+' ';}
        i++;
    }
    document.getElementById('fibo').innerHTML = string;
}
// document.write(string);

