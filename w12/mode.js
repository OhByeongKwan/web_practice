function nightMode(data){
    let mode = document.querySelector('body').classList;
    let grid = document.querySelector('#grid').style;
    if(mode.length == 0){
        data.value = '다크모드 해제'
        mode.add('active');
        grid.borderRadius = '70px';
        grid.backgroundColor = 'skyblue';
        grid.border = '5px solid hsl(217, 99%, 46%)';
    }else{
        data.value = '다크모드'
        mode.remove('active');
        grid.borderRadius = '0px';
        grid.backgroundColor = 'white';
        grid.border = '1px solid black';
    }
}