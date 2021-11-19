window.addEventListener("load", () => {
    var imgs = document.getElementsByTagName("img");
    console.log(imgs.length);
    for (var i = 0; i < imgs.length; i++) {
        // console.log(element.src);
        // if (element.src === "https://app.shkolo.bg/img/noavatar.png") {
        imgs[i].src =
            "https://dotnet.microsoft.com/static/images/illustrations/swimlane-csharp-javascript.svg";
        // }
    }
});
