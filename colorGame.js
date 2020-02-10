var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares=document.querySelectorAll(".square")
var pickedColor=pickColor()
var colorDisplay=document.querySelector("#colorDisplay")
var msgDisplay=document.querySelector("#msg")

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
            changeColors(pickedColor)
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