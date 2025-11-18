function setCookie(name, value, maxAgeSeconds) {
  document.cookie =
    name + "=" + encodeURIComponent(value) +
    "; max-age=" + maxAgeSeconds +
    "; path=/";
}

function getCookie(name) {
  var parts = document.cookie.split(";");
  for (var i = 0; i < parts.length; i++) {
    var c = parts[i].trim();
    if (c.indexOf(name + "=") === 0) {
      return decodeURIComponent(c.substring(name.length + 1));
    }
  }
  return null;
}

var cookieName = "userTextCookie";
var existing = getCookie(cookieName);
var msg = document.getElementById("msg");
var val = document.getElementById("cookieVal");
var raw = document.getElementById("raw");

if (existing === null) {
  var entered = window.prompt("Type some text to save in a cookie:", "");
  if (entered === null || entered === "") {
    entered = "No text was entered; this is the default cookie value.";
  }
  setCookie(cookieName, entered, 60 * 60 * 24);
  msg.textContent =
    "A new cookie has been created using the text you just provided. Reload this page to see it displayed below.";
  val.textContent = "(cookie has just been stored; refresh the page to show its value)";
} else {
  msg.textContent =
    "A cookie from a previous visit was found and read. Its stored text is shown here.";
  val.textContent = existing;
}

raw.textContent = document.cookie || "(no cookies are currently set)";
