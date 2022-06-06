function happy(){
    num = [];
    num[0] = Math.floor(Math.random()*(33 - 1) + 1)
    num[1] = Math.floor(Math.random()*(33 - 1) + 1)
    for (var k = 0 ; k <= 99999; k++){
        if (num[0] == num[1]){
            num[1] = Math.floor(Math.random()*(33 - 1) + 1)
        }else break;
    }
    num[2] = Math.floor(Math.random()*(33 - 1) + 1)
    for (var k = 0 ; k <= 99999; k++){
        if (num[2] == num[1] || num[2] == num[0]){
            num[2] = Math.floor(Math.random()*(33 - 1) + 1)
        }else break;
    }
    num[3] = Math.floor(Math.random()*(33 - 1) + 1)
    for (var k = 0 ; k <= 99999; k++){
        if (num[3] == num[2] || num[3] == num[1] || num[3] == num[0]){
            num[3] = Math.floor(Math.random()*(33 - 1) + 1)
        }else break;
    }
    num[4] = Math.floor(Math.random()*(33 - 1) + 1)
    for (var k = 0 ; k <= 99999; k++){
        if (num[4] == num[3] || num[4] == num[2] || num[4] == num[1] || num[4] == num[0]){
            num[4] = Math.floor(Math.random()*(33 - 1) + 1)
        }else break;
    }
    num[5] = Math.floor(Math.random()*(33 - 1) + 1)
    for (var k = 0 ; k <= 99999; k++){
        if (num[5] == num[4] || num[5] == num[3] || num[5] == num[2] || num[5] == num[1] || num[5] == num[0]){
            num[5] = Math.floor(Math.random()*(33 - 1) + 1)
        }else break;
    }
    num[6] = Math.floor(Math.random()*(16 - 1) + 1)
    document.getElementById('one').innerHTML = num[0];
    document.getElementById('two').innerHTML = num[1];
    document.getElementById('tree').innerHTML = num[2];
    document.getElementById('four').innerHTML = num[3];
    document.getElementById('fiv').innerHTML = num[4];
    document.getElementById('six').innerHTML = num[5];
    document.getElementById('seven').innerHTML = num[6];
    document.getElementById('one').style.backgroundImage = 'none';
    document.getElementById('two').style.backgroundImage = 'none';
    document.getElementById('tree').style.backgroundImage = 'none';
    document.getElementById('four').style.backgroundImage = 'none';
    document.getElementById('fiv').style.backgroundImage = 'none';
    document.getElementById('six').style.backgroundImage = 'none';
}