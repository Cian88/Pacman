let myGrid = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

function showGrid() {
    document.getElementById('grid').innerHTML='';
    for(let i =0;i<myGrid.length;i++){
        for(let j = 0;j<myGrid[i].length;j++){   
            let myElem=document.createElement('div');
            if(myGrid[i][j]==0){
                myElem.classList.add('wall');
            }
            else if (myGrid[i][j]==1){
                myElem.classList.add('ground');
            }
            else if (myGrid[i][j]==2){
                myElem.classList.add('sweet');
            }
            myElem.style.gridRowStart=i+1;
            myElem.style.gridColumnStart=j+1;
            document.getElementById('grid').appendChild(myElem);
        }
    }
}

let pacman = {
    //position de départ de Pacman sur la grille
     y:2, 
     x:5,
    //direction de départ de pacman (haut :4 , bas : 2, gauche : 3, droite : 1)
     direction:1
}

function showPacman(){
    var myPacman=document.createElement('div');
    myPacman.classList.add('pacman');
    myPacman.style.gridRowStart=pacman.y;
    myPacman.style.gridColumnStart=pacman.x;
    document.getElementById('grid').appendChild(myPacman);
}

function movePacman(){
    if(direction==1){
        x++;
    }
    else if(direction==3){
        x--;
    }
    else if(direction==4){
        y++;
    }
    else if(direction==2){
        y--;
    }
}

function refresh()
{
    showGrid();
    movePacman();
    showPacman();
    setTimeout(refresh,1000);
}


refresh();