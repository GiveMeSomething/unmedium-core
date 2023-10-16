function bypassMedium() {
  const siteUrl = window.location.href;

  const googleCacheUrl =
    "http://webcache.googleusercontent.com/search?q=cache:";

  // Only continue if the page is from Medium
  if (!siteUrl.includes("medium.com")) {
    console.log("Not medium");
    return;
  }

  // Ignore if the page is already loaded from Google cache
  if (siteUrl.includes("webcache.googleusercontent.com")) {
    console.log("Already in Google cache");
    return;
  }

  // Redirect to Google cache
  window.location.replace(googleCacheUrl + siteUrl);
}

function enhance() {
  bypassMedium();
}

enhance();
