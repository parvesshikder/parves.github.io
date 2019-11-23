var player1=0;
var playerr2=0;
var playerPosition = [

    block_1,block_20,block_3,block_4,block_5,
    block_6,block_7,block_8,block_9,block_10,
    block_11,block_12,block_13,block_14,block_15,
    block_16,block_17,block_18,block_19,block_20,
    block_21,block_22,block_23,block_24,block_25

];
var snake1=15;
var snake2=23;
var lader1=8;
var lader2=19;
var count=0;
if(player1==0 && playerr2==0){
  document.getElementById("p1_block_1").src ='img/green.png';
  document.getElementById("p2_block_1").src ='img/red.png';
}

//player 1
function diceRollP1(){
  var Number = Math.floor(Math.random() *6)+1;
  document.getElementById("dice_num").innerHTML =Number;

  Number=Number+count;

  if(Number==1){
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='img/green.png';
    count = 1;
  }
  else if(Number==2){
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='img/green.png';
    count = 2;
  }
  else if(Number==3){
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='img/green.png';
    count = 3;
  }
  else if(Number==4){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='img/green.png';
    count = 4;
  }
  else if(Number==5){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='img/green.png';
    count = 5;
  }
  else if(Number==6){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='img/green.png';
    count = 6;
  }
  else if(Number==7){
    document.getElementById("winer1").innerHTML ='<h4>Bonus 7 Point</h4>';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='img/green.png';
    count = 14;



  }
  else if(Number==8){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='img/green.png';
    count = 8;


  }
  else if(Number==9){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='img/green.png';
    count = 9;
  }
  else if(Number==10){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='img/green.png';
    count = 10;
  }
  else if(Number==11){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='img/green.png';
    count = 11;
  }
  else if(Number==12){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='img/green.png';
    count = 12;
  }
  else if(Number==13){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='img/green.png';
    count = 13;
  }
  else if(Number==14){
    document.getElementById("winer1").innerHTML ='<h4>Reduct 7 Point</h4>';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';

    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_5").src ='img/green.png';
    count = 4;
  }
  else if(Number==15){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='img/green.png';
    count =15;


  }
  else if(Number==16){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='img/green.png';
    count = 16;
  }
  else if(Number==17){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='img/green.png';
    count = 17;
  }
  else if(Number==18){
    document.getElementById("winer1").innerHTML ='<h4>Bonus 5 Point</h4>';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='';
    document.getElementById("p1_block_21").src ='';
    document.getElementById("p1_block_22").src ='';
    document.getElementById("p1_block_23").src ='';
    document.getElementById("p1_block_24").src ='img/green.png';
    count = 23;
  }
  else if(Number==19){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='img/green.png';
    count = 19;

  }
  else if(Number==20){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='';
    document.getElementById("p1_block_21").src ='img/green.png';
    count = 20;
  }
  else if(Number==21){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='';
    document.getElementById("p1_block_21").src ='';
    document.getElementById("p1_block_22").src ='img/green.png';
    count = 21;
  }
  else if(Number==22){

    document.getElementById("winer1").innerHTML ='<h4>Reduct 7 Point</h4>';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';

    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='';
    document.getElementById("p1_block_21").src ='';
    document.getElementById("p1_block_22").src ='';
    document.getElementById("p1_block_16").src ='img/green.png';
    count =15;

  }
  else if(Number==23){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='';
    document.getElementById("p1_block_21").src ='';
    document.getElementById("p1_block_22").src ='';
    document.getElementById("p1_block_23").src ='';
    document.getElementById("p1_block_24").src ='img/green.png';
    count = 23;

  }
  else if(Number==24){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p1_block_1").src ='';
    document.getElementById("p1_block_2").src ='';
    document.getElementById("p1_block_3").src ='';
    document.getElementById("p1_block_4").src ='';
    document.getElementById("p1_block_5").src ='';
    document.getElementById("p1_block_6").src ='';
    document.getElementById("p1_block_7").src ='';
    document.getElementById("p1_block_8").src ='';
    document.getElementById("p1_block_9").src ='';
    document.getElementById("p1_block_10").src ='';
    document.getElementById("p1_block_11").src ='';
    document.getElementById("p1_block_12").src ='';
    document.getElementById("p1_block_13").src ='';
    document.getElementById("p1_block_14").src ='';
    document.getElementById("p1_block_15").src ='';
    document.getElementById("p1_block_16").src ='';
    document.getElementById("p1_block_17").src ='';
    document.getElementById("p1_block_18").src ='';
    document.getElementById("p1_block_19").src ='';
    document.getElementById("p1_block_20").src ='';
    document.getElementById("p1_block_21").src ='';
    document.getElementById("p1_block_22").src ='';
    document.getElementById("p1_block_23").src ='';
    document.getElementById("p1_block_24").src ='';
    document.getElementById("p1_block_25").src ='img/green.png';
    count = 24;
    document.getElementById("winer1").innerHTML ='<h4>Super You Win the Game</h4>';
    document.getElementById("winer2").innerHTML ='<h4>You lose the Game </h4>';

  }


}

//player 2
var count1=0;

function diceRollP2(){
  var Number = Math.floor(Math.random() *6)+1;
  document.getElementById("dice_num1").innerHTML =Number;

  Number=Number+count1;

  if(Number==1){
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='img/red.png';
    count1 = 1;
  }
  else if(Number==2){
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='img/red.png';
    count1 = 2;
  }
  else if(Number==3){
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='img/red.png';
    count1 = 3;
  }
  else if(Number==4){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='img/red.png';
    count1 = 4;
  }
  else if(Number==5){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='img/red.png';
    count1 = 5;
  }
  else if(Number==6){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='img/red.png';
    count1 = 6;
  }
  else if(Number==7){
    document.getElementById("winer2").innerHTML ='<h4>Bonus 7 Point</h4>';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='img/red.png';
    count1 = 14;



  }
  else if(Number==8){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='img/red.png';
    count1 = 8;


  }
  else if(Number==9){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='img/red.png';
    count1 = 9;
  }
  else if(Number==10){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='img/red.png';
    count1 = 10;
  }
  else if(Number==11){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='img/red.png';
    count1 = 11;
  }
  else if(Number==12){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='img/red.png';
    count1 = 12;
  }
  else if(Number==13){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='img/red.png';
    count1 = 13;
  }
  else if(Number==14){

    document.getElementById("winer2").innerHTML ='<h4>Reduct 7 Point</h4>';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';

    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_5").src ='img/red.png';
    count1 = 4;
  }
  else if(Number==15){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='img/red.png';
    count1 =15;


  }
  else if(Number==16){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='img/red.png';
    count1 = 16;
  }
  else if(Number==17){
    document.getElementById("winer1").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='img/red.png';
    count1 = 17;
  }
  else if(Number==18){
    document.getElementById("winer2").innerHTML ='<h4>Bonus 5 Point</h4>';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='';
    document.getElementById("p2_block_21").src ='';
    document.getElementById("p2_block_22").src ='';
    document.getElementById("p2_block_23").src ='';
    document.getElementById("p2_block_24").src ='img/red.png';
    count1 = 23;
  }
  else if(Number==19){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='img/red.png';
    count1 = 19;

  }
  else if(Number==20){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='';
    document.getElementById("p2_block_21").src ='img/red.png';
    count1 = 20;
  }
  else if(Number==21){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='';
    document.getElementById("p2_block_21").src ='';
    document.getElementById("p2_block_22").src ='img/red.png';
    count1 = 21;
  }
  else if(Number==22){
    document.getElementById("winer2").innerHTML ='<h4>Reduct 7 Point</h4>';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';

    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='';
    document.getElementById("p2_block_21").src ='';
    document.getElementById("p2_block_22").src ='';
    document.getElementById("p2_block_23").src ='';
    document.getElementById("p2_block_16").src ='img/red.png';
    count1 =15;

  }
  else if(Number==23){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='';
    document.getElementById("p2_block_21").src ='';
    document.getElementById("p2_block_22").src ='';
    document.getElementById("p2_block_23").src ='';
    document.getElementById("p2_block_24").src ='img/red.png';
    count1 = 23;

  }
  else if(Number==24){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='';
    document.getElementById("p2_block_7").src ='';
    document.getElementById("p2_block_8").src ='';
    document.getElementById("p2_block_9").src ='';
    document.getElementById("p2_block_10").src ='';
    document.getElementById("p2_block_11").src ='';
    document.getElementById("p2_block_12").src ='';
    document.getElementById("p2_block_13").src ='';
    document.getElementById("p2_block_14").src ='';
    document.getElementById("p2_block_15").src ='';
    document.getElementById("p2_block_16").src ='';
    document.getElementById("p2_block_17").src ='';
    document.getElementById("p2_block_18").src ='';
    document.getElementById("p2_block_19").src ='';
    document.getElementById("p2_block_20").src ='';
    document.getElementById("p2_block_21").src ='';
    document.getElementById("p2_block_22").src ='';
    document.getElementById("p2_block_23").src ='';
    document.getElementById("p2_block_24").src ='';
    document.getElementById("p2_block_25").src ='img/red.png';
    count1 = 24;
    document.getElementById("winer1").innerHTML ='<h4>You lose the Game</h4>';
    document.getElementById("winer2").innerHTML ='<h4>Super You Win the Game </h4>';


  }


}
