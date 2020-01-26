

//const fovarit = function (titalName , durationNumber , staresarray){

    const favoritMovie = {

        tital : "The Great Gatsaby " ,
        duration : 127 ,
        stras : ["leonardo", "tobey","carei"] 
        
        
        };
        
        
        
        //}
        
        //fovarit("The Great Gatsaby ", 2.27 , ["leonardo", "tobey","carei"]);
        console.log(favoritMovie.tital +"   "+favoritMovie.duration+"     "+favoritMovie.stras.join(' , '))
        
        
        
        
        

        

const book1 = {

    tital : " The Hobbit  " ,
    auther  : "J.R.R",
    alredyRead : true 
    
    };
    
    
    const book2 = {
    
    tital : " a  " ,
    auther  : "b",
    alredyRead : false 
    
    };
    
    
    const book3 = {
    
    tital : " c  " ,
    auther  : "J.R.Rd",
    alredyRead : true 
    
    };
    
    
    const fovaritbook = [book1 , book2 ,book3]
    
    for(var i=0 ; i<fovaritbook.length ; i++){
    
    if (fovaritbook[i].alredyRead === true){
    
    console.log("You already read"+fovaritbook[i].tital+"by"+fovaritbook[i].auther);
    
    }
    else {
    
      console.log("You still need to read"+fovaritbook[i].tital+"by"+fovaritbook[i].auther);
    }
    
    }
    

    



    const source = "This ia a this";
const lowercase = source.toLowerCase();
const listOfWord = lowercase.split(" ");
const WordFrqencies ={};

for (var i=0 ; i<listOfWord.length ; i++){

  const key = listOfWord[i];{
   // in case the word was not found
   if (WordFrqencies[key]=== undefined){
     WordFrqencies[key] = 1;}
     else {

           WordFrqencies[key]++;
           
           
           }

     }

   

   }





console.log (WordFrqencies)





const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2005,
    drive : function(distince){
  
       return "Vroom ! we drove "+ distince+ "  miles";
  
  
    }
  }
  console.log(car.drive(20));





  // tv 



  const tv = {
    resoulition : '4k' ,
    size : 42 ,
    type : "LED"
 
   isTurendOn : false ,
   togglePower : function(){
    
    if(tv.isTurendOn=== true){
      tv.isTurendOn = false
    }
    else {
             isFinite = true 
 
    }
 
   },
 
   voulme : 30 , 
   
   iccreseVolume : function(){
    tv.iccreseVolume+=1 ;
 
   } ,
 
  decresVoulme : function(){
    tv.decresVoulme=-1 ;
 
   }
 
 , 
 
 currentchanne : 42 ,
 
 changeChaanelto : function(ChannelNumber){
 
 tv.currentchanne = ChannelNumber;
 
 },
 
 increseChannel : function (){
  
   tv.changeChaanelto(
 tv.currentchanne+1)
 
 
 },
 
 decresChannel: function(){
  tv.changeChaanelto(
 tv.currentchanne-1)
 
 
 } ,
 
 madeIn : "SEI"
 
 
 
 
 
 };
 
 
 console.log(tv.isTurendOn)



 // another solve by the otman :)



// X ON / OFF
// X Change Volume
// X Change Channel
// Size / Resolution
// Type: LCD / LED
// Ports
// Power
const tv = {
  resolution: '4K',
  size: 42,
  type: 'LED',
  isTurnedOn: false,
  togglePower: function() {
      tv.isTurnedOn = !tv.isTurnedOn;
  },
  volume: 9000,
  increaseVolume: function() {
      tv.volume += 1;
  },
  decreaseVolume: function() {
      tv.volume -= 1;
  },
  currentChannel: 42,
  changeChannelTo: function(channelNumber) {
      tv.currentChannel = channelNumber;
  },
  increaseChannel: function() {
      tv.changeChannelTo( tv.currentChannel + 1 );
  },
  decreaseChannel: function() {
      tv.changeChannelTo( tv.currentChannel - 1 );
  },
  madeIn: 'SEI',
};






//Modeling Run Tracker 

const user = {

  name : "AFnan Basudan" ,
  email : "afnankbasudan@gmail.com" ,
  address : "Riyadh" ,
  age : "23" , 
  
  runs : [
  {
  date : "2030-01-01 12:00:00" ,
  distance : 10 ,
  timeTaken : 1200000 ,
  } ,
  {
  date : "2011-01-01 07:00:00" ,
  distance : 40 ,
  timeTaken : 1600000 ,
  } 
  ],
  
  totaldistance : function(){
  let total = 0 ;
  for (let i= 0 ; i< user.runs.length ; i++)
  {
  total+= user.runs[i].distance;
  }
  return total ; 
  },
  longestRunDistence : function(){
  let longestRun = 0 ;
  for( let i=0 ; i<user.runs.length ; i++){
  if(user.runs[i].distance>longestRun){
    longestRun = user.runs[i].distance;
  }
  }
  return longestRun
  },
  averageSpeed : function(){
    let totaldis = user.totaldistance() ;
    let length = user.runs.length;
    let average = totaldis/length;
    return average;
  
  
  }
  };
  
  console.log (user.averageSpeed())