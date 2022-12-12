"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function allStories(evt) {
  console.debug("allStories", evt);
  hidePageComp();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", allStories);

/** Show story submit form on clicking story "submit" */

function submitStoryClick(evt) {
  console.debug("submitStoryClick", evt);
  hidePageComp();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmitStory.on("click", submitStoryClick);

/** Show favorite stories on click on "favorites" */

function favoritesClick(evt) {
  console.debug("favoritesClick", evt);
  hidePageComp();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", favoritesClick);

/** Show My Stories on clicking "my stories" */

function myStories(evt) {
  console.debug("myStories", evt);
  hidePageComp();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "#nav-my-stories", myStories);

/** Show login/signup on click on "login" */

function loginClick(evt) {
  console.debug("loginClick", evt);
  hidePageComp();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", loginClick);

/** Hide everything but profile on click on "profile" */

function profileClick(evt) {
  console.debug("profileClick", evt);
  hidePageComp();
  $userProfile.show();
}

$navUserProfile.on("click", profileClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
