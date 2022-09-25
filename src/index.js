const submitButton = document.getElementById("submit-data");
const list = document.getElementById("showlist");

submitButton.addEventListener("click", search, false);

async function search(event) {
  list.innerHTML = "";
  event.preventDefault();
  let searchterm = document.getElementById("input-show").value;
  let url = "https://api.tvmaze.com/search/shows?q=" + searchterm;
  let promise = await fetch(url);
  let dataJSON = await promise.json();
  let stringJSON = JSON.stringify(dataJSON);
  let json = JSON.parse(stringJSON);
  let length = json.length;
  for (let i = 0; i < length; i++) {
    let imgsrc = "";
    if (json[i].show.image != null) {
      /*checking if there is an image src*/

      imgsrc = Object.values(json[i].show.image)[0];
    }
    let title = json[i].show.name;
    let summary = json[i].show.summary;
    list.innerHTML +=
      '<div class="show-data"><img src="' +
      imgsrc +
      '"> <div class="show-info"><h1>' +
      title +
      "</h1>" +
      summary +
      "</div></div>";
  }
}
