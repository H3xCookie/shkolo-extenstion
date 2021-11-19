var dashboardStats = document.querySelectorAll(".dashboard-stat");

var statColors = [
    "#2973a6",
    "#218993",
    "#95343a",
    "#8a7031",
    "#572B6A",
    "#1B8257",
];

for (let i = 0; i < dashboardStats.length; i++) {
    dashboardStats[i].style.backgroundColor = statColors[i];
}
document.querySelector(".highcharts-background").style.fill = "#363636"
