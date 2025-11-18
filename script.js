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

var cookieName = "demoCookie";
var existing = getCookie(cookieName);
var msg = document.getElementById("msg");
var val = document.getElementById("cookieVal");
var raw = document.getElementById("raw");

if (existing === null) {
  var now = new Date().toString();
  var value = "This note was stored in a cookie at: " + now;
  setCookie(cookieName, value, 60 * 60 * 24);
  msg.textContent =
    "No saved cookie was found for this browser. A new one has just been created below. Refresh the page to see it being read.";
  val.textContent = "(cookie has just been written; reload the page to read it)";
} else {
  msg.textContent =
    "A cookie from an earlier visit was found and read. Its contents are shown below.";
  val.textContent = existing;
}

raw.textContent = document.cookie || "(no cookies are currently set)";
