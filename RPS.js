  
 const score=JSON.parse(localStorage.getItem('score'))||{
    win :0,
    Loose:0,
    Tie:0
 }

 
function makemove(playermoves){
    const Computermoves=pickcomputer();
    const resultelement=document.querySelector('.showcom')

    if(playermoves===Computermoves){
        resultelement.innerHTML=`Tie`
        score.Tie+=1;
    }else if((playermoves==='rock' && Computermoves==='scissor')||(playermoves==='paper' && Computermoves==='rock')||(playermoves==='scissor' && Computermoves==='paper')){
        resultelement.innerHTML=`Win`
        score.win+=1
    }
    else{
        resultelement.innerHTML='Loose'
        score.Loose+=1
    }
    updatescore();
    localStorage.setItem('score',JSON.stringify(score))
}
function pickcomputer(){
      const RandomNumber=Math.random()
    let Computermoves=''

    if(RandomNumber >=0 && RandomNumber < 1/3)
    {
        Computermoves ='rock';
        innerHTML=`<img src="pictures/rock.png">`
    }
    else if(RandomNumber >=1/3 && RandomNumber < 2/3)
    {
        Computermoves ='Paper';
    }
    else if(RandomNumber >=2/3 && RandomNumber < 1){
        Computermoves ='Scissor';
    }
 return Computermoves


}



function updatescore(){
     document.querySelector('.jsscore').innerHTML=` Win : ${score.win} Loose : ${score.Loose}  Tie : ${score.Tie}`
     localStorage.setItem('score',JSON.stringify(score))

}


function Resetscore(){
 if(confirm("Are you sure you want to clear data..")){
    localStorage.removeItem('score')
    location.reload()
  }
   
}
