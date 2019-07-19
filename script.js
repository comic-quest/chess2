var xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.responseXML);
}
xhr.open("GET", "page1");
xhr.responseType = "document";
xhr.send();

