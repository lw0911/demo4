// JavaScript Document

 window.onload = function(){
                 
                 
                    var angle = [10,20,30,40,50,60,70,80,90,100];
                    var alpha = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
                    var h5dctx = H5D.D2('cvs');
                    setInterval(function(){
                    h5dctx .clear();
                    h5dctx .drawCircle(240,80,14).stroke(
                    {    color:"#777",
                        lineWidth:8
                    });
                    for(var i = 0;i < 10;i++){
                        if(angle[i]==360){angle[i]=0;}
                        var x = 14*Math.cos((angle[i])*Math.PI/180)+240;
                        var y = 14*Math.sin((angle[i])*Math.PI/180)+80;
                        h5dctx.drawCircle(x,y,5).fill(
                        {    color:"rgba(180,180,180,"+alpha[i]+")",
                            shadow:{
                            //blur:2,color:"#ddd"
                        }});
                        angle[i]+=10;
                    }
                    h5dctx .drawText({
                        message:"Loading...",
                        xPos:220,
                        yPos:125,
                        type:"fill",
                        color:"rgba(255,255,255,1)",
                         
                    });
                    },33);
            }            