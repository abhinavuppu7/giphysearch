document.querySelector(".js-go").addEventListener("click", function () {
	var box = document.querySelector("input").value;
	console.log(box);
	FindGiphy(box);
});
document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
	var box = document.querySelector("input").value;
	console.log(box);
	if (e.which === 13) FindGiphy(box);
});
function FindGiphy(data) {
	var url =
		"http://api.giphy.com/v1/gifs/search?q=" + data + "&api_key=dc6zaTOxFJmzC";

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open("GET", url);
	GiphyAJAXCall.send();
	GiphyAJAXCall.addEventListener("load", function (e) {
		var data = e.target.response;
		pushToDOM(data);
	});
}

function pushToDOM(input) {
	var response = JSON.parse(input);
	for (var i = 0; i < response.data.length; i++) {
		var imageURL = response.data[i].images.fixed_height.url;

		var container = document.querySelector(".js-container");
		container.innerHTML +=
			'<img src="' + imageURL + '" class="container-image">';
	}
}
