var dashboardStats = document.querySelectorAll(".dashboard-stat");

var statColors = [
    "#2973a6",
    "#218993",
    "#95343a",
    "#8a7031",
    "#572B6A",
    "#1B8257",
];

console.log("cockl");

for (let i = 0; i < dashboardStats.length; i++) {
    dashboardStats[i].style.backgroundColor = statColors[i];
}
document.querySelector(".highcharts-background").style.fill = "#363636";

// document.addEventListener("load", () => {
    var imgs = document.querySelectorAll(".avatar");
    console.log(imgs.length);
    for (var i = 0; i < imgs.length; i++) {
        // console.log(element.src);
        // if (element.src === "https://app.shkolo.bg/img/noavatar.png") {
        imgs[i].src =
            "https://dotnet.microsoft.com/static/images/illustrations/swimlane-csharp-javascript.svg";
        // }
    }
// });

// window.addEventListener("load", () => {
// 	setTimeout(() => {
// 	alert("cock")

// 	// stuff that happens for each web page load goes here

// }, 5000)
// });
