var imgs = document.getElementsByTagName("img");
	console.log(imgs.length);
	for (var i = 0; i < imgs.length; i++) {
		console.log(imgs[i].src);
		if (imgs[i].src === "https://app.shkolo.bg/img/noavatar.png") {
			imgs[i].src =
			"https://c.tenor.com/kHcmsxlKHEAAAAAM/rock-one-eyebrow-raised-rock-staring.gif";
		}
	}