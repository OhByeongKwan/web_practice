// function nightMode(data){
//     let mode = document.querySelector('body').classList;
//     let grid = document.querySelector('#grid').style;
//     if(mode.length == 0){
//         data.value = '다크모드 해제'
//         mode.add('active');
//         grid.borderRadius = '70px';
//         grid.backgroundColor = 'skyblue';
//         grid.border = '5px solid hsl(217, 99%, 46%)';
//     }else{
//         data.value = '다크모드'
//         mode.remove('active');
//         grid.borderRadius = '0px';
//         grid.backgroundColor = 'white';
//         grid.border = '1px solid black';
//     }
// }

function linksSetColor(color){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
  }
  
  function bodySetColor(color){
    document.querySelector('body').style.color=color;  
  }
  
  function bodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;  
  }
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('powderblue')   
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }
  
  let Body = {
    setColor: function(color){
      document.querySelector('body').style.color=color;  
    },
    setBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor=color;  
    }
  }
  
  let Links = {
    setColor: function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('powderblue')   
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }
  
  