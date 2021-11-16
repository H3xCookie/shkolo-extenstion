//DARK-THEME

//body
//document.body.style.color = "#FFFFFF"

//Черен фон--------------------------------------
// document.querySelector(".page-content").style.backgroundColor = "#363636"
var dashboardStats = document.querySelectorAll(".dashboard-stat")

//Затъмнени dashboard-stat-ове------------------------------
var statColors = ["#2973a6", "#218993", "#95343a", "#8a7031" , "#572B6A", "#1B8257"]

for(let i = 0; i < dashboardStats.length; i++){
    dashboardStats[i].style.backgroundColor = statColors[i]
}
//Черни portlet-и
// var portlets = document.querySelectorAll(".portlet")
// var statsRanks = document.querySelectorAll(".stats-rank")
document.querySelector(".highcharts-background").style.fill = "#363636"

// portlets[0].style.backgroundColor = "#363636"
// portlets[1].style.backgroundColor = "#363636"



//#4276a4


