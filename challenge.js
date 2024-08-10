function randomWordsText(t) {

    
    var text = t;
    var randomText = "";
    text = text.split(" ");
    var random = 0;
    var randomList = [];
    var isThere = false;
    var isSame = 0;
    
    
    
    for(i=0;i<text.length;i++) {
        random = Math.floor(Math.random()*text.length);
        for(j=0;j<randomList.length;j++) {
            if(random == randomList[j]){
                isThere = true;
            }
        }
        if(isThere == false) {
            randomText += text[random];
            if(i < text.length) {
                randomText += " ";
            }
            randomList.push(random);
        }
    
        if(isThere == false && text[i] == text[random]) {
            isSame = isSame + 1;
        }
    
        if(isSame == text.length) {
            randomList = [];
            i = -1;
            randomText = "";
            isSame = 0;
        }
        if(isThere == true) {
            isThere = false;
            i = i - 1;
        }
        
        
    }
    
        return randomText;
    }
    
    
    console.log(randomWordsText("hello how are you?"));
    