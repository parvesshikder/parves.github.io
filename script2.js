var count1=0;

function diceRollP2(){
  var Number = Math.floor(Math.random() *6)+1;
  document.getElementById("dice_num1").innerHTML =Number;

  Number=Number+count1;

  if(Number==1){
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='red.png';
    count1 = 1;
  }
  else if(Number==2){
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='red.png';
    count1 = 2;
  }
  else if(Number==3){
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='red.png';
    count1 = 3;
  }
  else if(Number==4){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='red.png';
    count1 = 4;
  }
  else if(Number==5){
    document.getElementById("winer2").innerHTML ='';
    document.getElementById("p2_block_1").src ='';
    document.getElementById("p2_block_2").src ='';
    document.getElementById("p2_block_3").src ='';
    document.getElementById("p2_block_4").src ='';
    document.getElementById("p2_block_5").src ='';
    document.getElementById("p2_block_6").src ='red.png';
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
    document.getElementById("p2_block_7").src ='red.png';
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
    document.getElementById("p2_block_15").src ='red.png';
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
    document.getElementById("p2_block_9").src ='red.png';
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
    document.getElementById("p2_block_10").src ='red.png';
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
    document.getElementById("p2_block_11").src ='red.png';
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
    document.getElementById("p2_block_12").src ='red.png';
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
    document.getElementById("p2_block_13").src ='red.png';
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
    document.getElementById("p2_block_14").src ='red.png';
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
    document.getElementById("p2_block_5").src ='red.png';
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
    document.getElementById("p2_block_16").src ='red.png';
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
    document.getElementById("p2_block_17").src ='red.png';
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
    document.getElementById("p2_block_18").src ='red.png';
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
    document.getElementById("p2_block_24").src ='red.png';
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
    document.getElementById("p2_block_20").src ='red.png';
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
    document.getElementById("p2_block_21").src ='red.png';
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
    document.getElementById("p2_block_22").src ='red.png';
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
    document.getElementById("p2_block_16").src ='red.png';
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
    document.getElementById("p2_block_24").src ='red.png';
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
    document.getElementById("p2_block_25").src ='red.png';
    count1 = 24;
    document.getElementById("winer2").innerHTML ='<h4>Player 1 Won the Game</h4>';

  }


}
