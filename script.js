let title = document.querySelector('.title')
let gameOver = new Audio('gameover.mp3');
let turn = 'x';
let squares = [];
function end(num1,num2,num3){

    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('item'+num1).style.background ='#9a2f43';
    document.getElementById('item'+num2).style.background ='#9a2f43';
    document.getElementById('item'+num3).style.background ='#9a2f43';
    document.querySelector('body').style.background ='#f22';

    gameOver.play();
    setInterval(function(){ title.innerHTML +='.'},1000)
    setTimeout(function(){location.reload()},4000)
    
}
function winner(){

    for(let i=1; i<10 ;i++)
    {
        squares[i] =document.getElementById('item' +i).innerHTML;
    }

    //horizontal

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !='')
    {
       end(1,2,3)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !='')
    {
        end(4,5,6)
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !='')
    {
        end(7,8,9)
    }

    //vertical

    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !='')
    {
        end(1,4,7)

    } else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !='')
    {
        end(2,5,8)

    } else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] !='')
    {
        end(3,6,9)
    }
    // italics

    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !='')
    {
        end(1,5,9)
    } else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] !='')
    {
        end(3,5,7)
    }
    else if(squares[i] ==''){
        setTimeout(function(){location.reload()},1000)

    }
}

function game(id){
    let element = document.getElementById(id);
    if(turn === 'x'&& element.innerHTML==''){
        element.innerHTML = 'x';
        turn ='o';
        title.innerHTML='o';
    }
    else if(turn ==='o' && element.innerHTML==''){
        element.innerHTML='o';
        turn ='x';
        title.innerHTML ='x'
    }

    winner();
}