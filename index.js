var res = document.querySelector('.result-section').innerText;
var list = [];
document.querySelector('.calc').addEventListener('click',(e) => {
    var clickedBtn = e.target.innerHTML;
    if(clickedBtn == 'C'){
        clearResult();
        list = [];
    }
    else if (clickedBtn == '←')
    {
        clearResult();
        list.pop();
        if(list.length == 0)
        showResult('0')
        else
        showResult(list.join(''));
    }
    else if(clickedBtn == '='){
        clearResult();
        calculate(list);
        showResult();
        list=[];
        list.push(res);
        
    }
    else{
        list.push(clickedBtn);
        showResult(clickedBtn);
    }
    console.log(list);

    
});
function clearResult(){
    document.querySelector('.result-section').innerHTML = '0';
}
function showResult(ans = res){
    console.log(ans);
    var init = document.querySelector('.result-section');
    if(init.innerHTML == '0')
    {
        init.innerHTML = ans;
    }
    else{
        init.innerHTML += ans;
    }
}
function calculate(arr){
    //1 + 2 + 3
    var x=0;
    console.log('In calculation:');
    for(let i=0;i<arr.length;){
        let y = 0;
        switch(arr[i])
        {
            case '+':
                ++i;
                while(i<arr.length && (arr[i]!='+' && arr[i]!='÷' && arr[i]!='-' && arr[i]!='/'))
                {
                    if(y==0)
                    y=arr[i];
                    else
                    y+=arr[i];
                    ++i;
                };
                x=add(parseInt(x),parseInt(y));  
                break;
            case 'x':
                ++i;
                while(i<arr.length && (arr[i]!='+' && arr[i]!='÷' && arr[i]!='-' && arr[i]!='/'))
                {
                    y+=arr[i];
                    ++i;
                };
                x=mul(parseInt(x),parseInt(y));  
                break;
            case '-':
                ++i;
                while(i<arr.length && (arr[i]!='+' && arr[i]!='÷' && arr[i]!='-' && arr[i]!='/'))
                {
                    y+=arr[i];
                    ++i;
                };
                x=sub(parseInt(x),parseInt(y));  
                break;
            case '÷':
                ++i;
                while(i<arr.length && (arr[i]!='+' && arr[i]!='÷' && arr[i]!='-' && arr[i]!='/'))
                {
                    y+=arr[i];
                    ++i;
                };
                x=div(parseInt(x),parseInt(y));  
                break;
             default:
                x == 0?x=arr[i]:x+=arr[i];
                ++i;
        }  
        console.log('after iteration : ' + x + ' '+ y);
    }
    res = x;
}

function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function div(x,y){
    return x/y;
}
function mul(x,y){
    return x*y;
}