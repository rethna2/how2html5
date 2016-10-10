var map = [0, 2,4,8,16,32,64,128,256,512,1024,2048,4096, 8192]
var state = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

$(function(){
    $("button").on("click", function(){
        var action = $(this).attr("id");
        if(action == "leftBtn"){
            leftBtnClk();
        }else if(action == "upBtn"){
            upBtnClk();
        }else if(action == "downBtn"){
            downBtnClk();
        }else if(action == "rightBtn"){
            rightBtnClk();
        }
        fillNo();
    })
    $(document).on("keyup", function(e){
        console.log("e.keyCode  = " + e.keyCode );
        if(e.keyCode == 37){
            leftBtnClk();
        }else if(e.keyCode == 38){
            upBtnClk();
        }else if(e.keyCode == 39){
            rightBtnClk();
        }else if(e.keyCode == 40){
            downBtnClk();
        }else{
            return;
        }
        fillNo();
    })
})

function leftBtnClk(){
    for(var i = 0; i < 4; i++){
        var temp = new Array();
        for(var j = 0;j < 4; j++){
            if(state[i][j] != 0){
                temp.push(state[i][j]);
            }
        }
        while(temp.length != 4){
            temp.push(0);
        }
        for(var j = 0; j < 3; j++){
           if(temp[j] != 0 && temp[j] == temp[j+1]){
                temp[j]++;
                temp.splice(j+1,1);
                temp.push(0);
            }
        }
        for(var j = 0;j < 4; j++){
            state[i][j] = temp[j];
        }
    }
}

function upBtnClk(){
    for(var i = 0; i < 4; i++){
        var temp = new Array();
        for(var j = 0;j < 4; j++){
            if(state[j][i] != 0){
                temp.push(state[j][i]);
            }
        }
        while(temp.length != 4){
            temp.push(0);
        }
        for(var j = 0; j < 3; j++){
            if(temp[j] != 0 && temp[j] == temp[j+1]){
                temp[j]++;
                temp.splice(j+1,1);
                temp.push(0);
            }
        }
        for(var j = 0;j < 4; j++){
            state[j][i] = temp[j];
        }
    }
}

function downBtnClk(){
    for(var i = 0; i < 4; i++){
        var temp = new Array();
        for(var j = 3;j >= 0; j--){
            if(state[j][i] != 0){
                temp.push(state[j][i]);
            }
        }
        while(temp.length != 4){
            temp.push(0);
        }
        for(var j = 0; j < 3; j++){
            if(temp[j] != 0 && temp[j] == temp[j+1]){
                temp[j]++;
                temp.splice(j+1,1);
                temp.push(0);
            }
        }
        for(var j = 3;j >=0; j--){
            state[j][i] = temp[3-j];
        }
    }
}

function rightBtnClk(){
    for(var i = 0; i < 4; i++){
        var temp = new Array();
        for(var j = 3;j >= 0; j--){
            if(state[i][j] != 0){
                temp.push(state[i][j]);
            }
        }
        while(temp.length != 4){
            temp.push(0);
        }
        for(var j = 0; j < 3; j++){
            if(temp[j] != 0 && temp[j] == temp[j+1]){
                temp[j]++;
                temp.splice(j+1,1);
                temp.push(0);
            }
        }
        for(var j = 3;j >=0; j--){
            state[i][j] = temp[3-j];
        }
    }
}

function fillNo(){
    var count = 0;
    var b = _.flatten(state);
    for(var i = 0; i < b.length; i++){
        if(b[i] == 0)count++;
    }
    var no = Math.floor(Math.random()* count);
    count = 0;
    mainloop:
    for(var i = 0; i < state.length; i++){
        for(var j = 0; j < state[i].length; j++){
            if(state[i][j] == 0){
                if(count == no){
                    var randomNo = Math.round(Math.random());
                    state[i][j] = randomNo + 1;
                    break mainloop;
                }
                count++;
            }
        }
    }
    refresh();
}

function refresh(){
    for(var i  = 0; i < state.length; i++){
        for(var j = 0; j < state[i].length; j++){
            if(map[state[i][j]] == 0){
                $("#"+i+j).text("");
            }else{
                $("#"+i+j).text(map[state[i][j]]);
            }
        }
    }
}