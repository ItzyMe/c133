var img="";
 var status="";
var objetos=[]

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
     objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: detectsndo objetos"
}
 function modelLoaded(){
console.log("Modelo carregado.")
status=true
objectDetector.detect(img,gotResults)
 }



 function gotResults(error,results){
if(error){
console.log(error)

}
console.log(results)
objetos=results
 }


function draw(){
image(img,0,0,640,420)
if(status!=""){
for(i=0;i<objetos.length;i++){
 document.getElementById("status").innerHTML=" Status: OBJETO DETECTADO"
 fill("#FF0000")
percentual=floor(objetos[i].confidence)
text(objetos[i].label+"  "+percentual+"%", objetos[i].x + 15, objetos[i].y + 15)
noFill()
stroke("#FF0000")
rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);
}

}
}


