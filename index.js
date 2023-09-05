    var randomnum1=(Math.floor(Math.random() * 6) + 1);
    var randomDiceImage = "dice" + randomnum1 + ".png" ;
    var randomImageSource = "images/"+ randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);
    setInterval

    var randomnum2=(Math.floor(Math.random() * 6) + 1) ;
    var randomDiceImage = "dice" + randomnum2 + ".png" ;
    var randomImageSource = "images/"+ randomDiceImage;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource);

    if(randomnum1>randomnum2)
        document.querySelector("h3").innerHTML="Player 1 wins !";
    else if(randomnum1==randomnum2)
        document.querySelector("h3").innerHTML="Its a tie !";
    else
        document.querySelector("h3").innerHTML="Player 2 wins !";