var numSquares=6
var colors=generateRandomColors(numSquares)
var squares=document.querySelectorAll(".square")
var pickedColor=pickColor()
var colorDisplay=document.querySelector("#colorDisplay")
var msgDisplay=document.querySelector("#msg")
var h1=document.querySelector("h1")
var resetButton=document.querySelector("#reset")
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")

easyBtn.addEventListener("click",function()
{
    numSquares=3
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    colors=generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor;

    for(var i=0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i]
        }
        else
        {
            squares[i].style.display="none"
        }
    }
})

hardBtn.addEventListener("click",function()
{
    numSquares=6
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    colors=generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor;

    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor=colors[i]
        squares[i].style.display="block"
    }
})

resetButton.addEventListener("click",function()
{
    //Generate all new colors
    colors=generateRandomColors(numSquares)
    //Pick new random color from array
    pickedColor=pickColor()
    //Change color display to match picked color
    colorDisplay.textContent=pickedColor
    //Change colors of squares
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor=colors[i]
    }

    h1.style.backgroundColor="#232323"

})

colorDisplay.textContent=pickedColor

for(var i=0; i<squares.length; i++)
{
    //Add initial colors to squares
    squares[i].style.backgroundColor=colors[i]

    //Add click listeners to squares
    squares[i].addEventListener("click",function()
    {
        //Grab color of picked square
        var clickedColor=this.style.backgroundColor
        //Compare color to pickedColor
        if(clickedColor===pickedColor)
        {
            msgDisplay.textContent="Correct!"
            resetButton.textContent="Play Again?"
            changeColors(pickedColor)
            h1.style.backgroundColor=pickedColor
        }
        else
        {
            this.style.backgroundColor="#232323"
            msgDisplay.textContent="Try Again"
        }
    })
}

function changeColors(color)
{
    //Loop through all sqaures
    for(var i=0; i<squares.length; i++)
    {
        //Change color to match given color
        squares[i].style.backgroundColor=color
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length)
    return colors[random]
}

function generateRandomColors(num)
{
    //Make array
    var arr=[]
    //Add num random colors to array
    for(var i=0; i<num; i++)
    {
        //Get random color and push into array
        arr.push(randomColor())
    }
    //Return array
    return arr
}

function randomColor()
{
    //Pick a "red" from 0-255
    var r=Math.floor(Math.random()*256)
    //Pick a "green" from 0-255
    var g=Math.floor(Math.random()*256)
    //Pick a "blue" from 0-255
    var b=Math.floor(Math.random()*256)

    return "rgb("+r+", "+g+", "+b+")"
}