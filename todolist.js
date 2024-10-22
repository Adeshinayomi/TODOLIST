const add=document.getElementById('addBtn');
const ul=document.getElementById('ul');
const inputValue= document.getElementById('input');

inputValue.addEventListener('keyup',function(event){

  if(event.keyCode===13){
    event.preventDefault()

    add.click();
  }

})
var nodelist=document.getElementsByTagName("LI");

for(i = 0; i < nodelist.length; i++){

  var span=document.createElement("SPAN");
  var Txt=document.createTextNode("delete");

  span.className='close'
  span.appendChild(Txt);

  nodelist[i].appendChild(span);

}

var close=document.getElementsByClassName('close');

var i;

for(i=0; i < close.length; i++){
  close[i].onclick=function(){
    var div=this.parentElement;
    div.style.display='none';
  }
}

add.addEventListener('click',function(){

    var li=document.createElement('LI');

    
    var t=document.createTextNode(inputValue.value);

    li.appendChild(t);

    if(inputValue.value === ''){
      alert('please write something')
    }else{
      ul.appendChild(li);
    }
    inputValue.value='';

    var span=document.createElement('SPAN');
    var text=document.createTextNode('delete');

    span.className='close';

    span.appendChild(text);

    li.appendChild(span)
   
    
    for(i=0; i<close.length; i++){
      close[i].onclick=function(){
        var div=this.parentElement
        div.style.display='none' 
      }
    }

    
});