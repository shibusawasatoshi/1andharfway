
const start = document.querySelector('.timer');
const finish = document.querySelector('.finish');
const log=document.querySelector('.log');
const result=document.querySelector('.result');
const bgm0 = document.querySelector('.bgm0');
const bgm1 = document.querySelector('.bgm1');
const bgm2 = document.querySelector('.bgm2');
const bgm3 = document.querySelector('.bgm3');
const bgm4 = document.querySelector('.bgm4');
const bgm5 = document.querySelector('.bgm5');
const bgm6 = document.querySelector('.bgm6');
const bgm7 = document.querySelector('.bgm7');
const bgm8 = document.querySelector('.bgm8');
const bgm9 = document.querySelector('.bgm9');
const bgmdown = document.querySelector('.bgmdown');
const bgmup= document.querySelector('.bgmup');


let count = 0;
let downcount=0;
let repcount=0;
let bgmcount_down=0;
let bgmcount_up=0;
let timer = null;
let setcount=0;

const bgm=new Array(bgm0,bgm1,bgm2,bgm3,bgm4,bgm5,bgm6,bgm7,bgm8,bgm9);

const result_rep=new Array('apple');

function countdown(){
    count=-2;
    let downid = setTimeout(countdown, 1000);
    console.log(`上げるカウント${downcount++}`);
    
    
    if(downcount > 2){　
      clearTimeout(downid);　//idをclearTimeoutで指定している
      repcount++;
      console.log(`行なった回数${repcount}`);
      const down_promice=new Promise((resolve,)=>{
       // bgmup.play();
        setTimeout(console.log('間隔'),10000);
        resolve();
    });
    down_promice.then(()=>{
   countup()});

    }else if(timer==1||timer==2){
        clearTimeout(downid);
    }else{
      
        log.innerHTML=`下げる${downcount}`;
    }
    }
    



function countup(){
    downcount=-2;
    let id = setTimeout(countup, 1000);
    console.log(`下げるカウント${count++}`);
    if(count > 2){　
        repcount++;
      clearTimeout(id);　//idをclearTimeoutで指定している
      const up_promice=new Promise((resolve,)=>{
       // bgmdown.play();
        setTimeout(console.log('間隔'),10000);
        resolve();
    });
    up_promice.then(()=>{
      countdown();
    });
     
    }else if(timer==1||timer==2){
        clearTimeout(id);
    }else{
     
        log.innerHTML=`下げる${count}`;
    }
    };











function voicecount_down(){
    let downbgm = setTimeout(voicecount_down, 1000);
    
    bgmcount_up=0;
    console.log(bgmcount_down);
    if(bgmcount_down > 1){　
        const up_promice=new Promise((resolve,)=>{
            clearTimeout(downbgm);
             bgmdown.play();
             const up_up_promice=new Promise((resolve,)=>{
                
                 setTimeout(()=>{
                    resolve();
                    console.log('a');
                    bgmup.play();
                   },1000);
             });
             up_up_promice.then(()=>{
            });
            
             setTimeout(()=>{
                resolve();
                console.log('a');
               },2000);
         });
         up_promice.then(()=>{
            voicecount_up();
        });
      　//idをclearTimeoutで指定している
      
    }else if(timer==1||timer==2){
        clearTimeout(downbgm);
}if(timer==0&&bgmcount_down<=1){
    bgm[bgmcount_down].play();
    bgmcount_down=bgmcount_down+1;
    }
}







function voicecount_up(){
    
    bgmcount_down=0;
    let upbgm = setTimeout(voicecount_up, 1000);
    
    console.log(bgmcount_up);
    if(bgmcount_up > 1){　
        const down_promice=new Promise((resolve,)=>{
            bgmdown.play();
            const down_down_promice=new Promise((resolve,)=>{
                clearTimeout(upbgm);
                setTimeout(()=>{
                    resolve();
                    console.log('a');
                    bgmup.play();
                   },1000);
             });
           down_down_promice.then(()=>{
            
            });
            clearTimeout(upbgm);
            setTimeout(()=>{
                resolve();
                console.log('a');
               },2000);
         });
       down_promice.then(()=>{
            voicecount_down();
        });
     
     　//idをclearTimeoutで指定している
      
    }else if(timer==1||timer==2){
        clearTimeout(upbgm);
}if(timer==0&&bgmcount_up<=1){
    bgm[bgmcount_up].play();
    bgmcount_up=bgmcount_up+1;
}
}







 
start.onclick= function(){
    if(timer == null||timer==2){
    timer=0;
    downcount=0;
    count=0;
    const first_up_promice=new Promise((resolve,)=>{
         bgmup.play();
        
         setTimeout(()=>{
             resolve();
             console.log('a');
            },1000);
     });
     first_up_promice.then(()=>{
        countup();
        voicecount_down();
    });
    }
};
   
    

   
finish.onclick= function(){
    if(timer == 0 ){
        timer=2;
    bgmcount_up=0;
    bgmcount_down=0;
    setcount++;
    log.innerHTML=``;
    result_rep.push(`<div> ${setcount}セット目に行なった回数は${repcount}回です。</div>`);
    result.insertAdjacentHTML('beforeend',result_rep[setcount] );
    repcount=0;
 

    }else{
        log.innerHTML=`行なった回数は${repcount}回です。`;
        repcount=0;
    }
};
   
