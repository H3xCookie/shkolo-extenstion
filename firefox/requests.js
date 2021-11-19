var pattern = "https://app.shkolo.bg/img/noavatar.png";

function redirect(requestDetails) {
    console.log("Redirecting: " + requestDetails.url);
    return {
        redirectUrl:
            "https://c.tenor.com/kHcmsxlKHEAAAAAM/rock-one-eyebrow-raised-rock-staring.gif",
    };
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{ urls: [pattern], types: ["image"] },
	["blocking"]
)