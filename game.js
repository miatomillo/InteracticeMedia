d3.select("#color")
    .on("click", function()
       {
      d3.select("body")
        .append("div")
        .text("click on a color")
        } )

d3.select("#yellow")
 .on("click",function()
    {
      d3.select("body")
        .append("p")
        .text("Ability to Fly!")
        } )

d3.select("#blue")
 .on("click",function()
    {
      d3.select("body")
        .append("p")
        .text("Ability to breathe underwater!")
        } )

d3.select("#red")
 .on("click",function()
    {
      d3.select("body")
        .append("p")
        .text("Super Strength!")
        } )


