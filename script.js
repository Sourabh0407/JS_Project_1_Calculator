let string="";
let buttons=document.querySelectorAll('.button');
var paranthesis=document.getElementById("para");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{


        if(e.target.innerHTML == '='){
            string = eval(string);
            if(string == undefined || string == null){
                string="";
            }
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value=string; 
        }else if(e.target.innerHTML == 'C'){
            string=string.slice(0, -1);
            document.querySelector('input').value=string;
        }
        
        else{
            console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value=string; 
        }


        if(e.target.innerHTML == '('){
            button.textContent = ")";
        }else if(e.target.innerHTML == ')'){
            button.textContent = "(";
        }


        
    } )
})