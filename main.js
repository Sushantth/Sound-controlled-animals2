function startClassification(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/W2vsiQrkQ/model.json , modelReady()");
};

function modelReady(){
classifier.classify(gotResults);
};

if(error , results){
console.log("gotResults");
};

