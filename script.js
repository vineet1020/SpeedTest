var s="";
var count=0;
var array=[];
var tem=25;
 for(var x=0;x<25;x++)
 array.push(x+26);                              
var numarray=[];
 var temp=25;
  for(var x=0;x<25;x++)
  numarray.push(x+1);
            for(var i=0;i<25;i++)
            {
                    
                    var number=Math.floor((Math.random()*temp--));
                    var value=numarray[number];
                    value=value.toString();
                    s=s+'<div class = "cell" onclick="clickf(this)" ontouchstart="clickf(this)"  style="color:black;"  > '+value+ '</div> ' ;

                    numarray.splice(number,1);
                    
            }
            document.getElementById("grid").innerHTML= s ;
            
            var timer;

            var a=0;
        
        function clickf(elem){

            if(count==0){
               var d= new Date() ; 
               timer=d.getTime() ;
            }
            if(count==0)
            {
                a=1;
              stopwatch();
            }
            
           
           var m = parseInt(elem.innerHTML) ;
           
               if( m == (count+1) ){
           
              if(m<=25){
                var rand=Math.floor((Math.random()*tem--));
                    var value=array[rand];
                    array.splice(rand,1);  
               elem.innerHTML = value.toString() ;
              }
              else {
           
               elem.innerHTML="";
               
               elem.style.background = "white" ;
           
              }
           
           
              count++ ;
           
            
              if(count == 50 ){
                document.getElementById("clock").innerHTML="00s";
                  
                
            
            document.getElementById("result").innerHTML="YOU TOOK "+sec+" SECONDS :)";

              }
            }
        }

        var sec=0;
        function stopwatch(){
            if(a==1 && count<50)
            {
            sec++;
            document.getElementById("clock").innerHTML=sec+"s";
            }
        }
        window.setInterval(stopwatch,1000);