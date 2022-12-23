TextInput = document.getElementById("TextInput").value;

function generate(){
    let i=0;
    input = TextInput;
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
    console.log(string)
    document.getElementById('fibo').innerHTML = string;
}

// document.write(string);
//function gen2(){
  //  Input = TextInput;
  //  document.getElementById('fibo').innerHTML = generate(Input);
//}
