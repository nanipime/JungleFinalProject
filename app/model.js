// just trying out
//var userInfo = {};

var recipeObj = [];
//var setNewRecipe = [];

export function changePage(pageID, callback) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    if (pageID == `account`) {
      if (callback) {
        callback();
      }
    }
    if (pageID == `recipe`) {
      if (callback) {
        callback();
      }
    }
  }).fail((error) => {
    if (error.status == "404") {
    }
    console.log("error", error.status);
  });
}

export function setNewRecipe(index) {
  recipeObj.push(index);
  //$("#cartCount").html(recipeObj.length.toString());
}

// trying the login
// export function setUserInfo(userObject) {
//   userInfo = userObject;
//   console.log(userInfo);
// }
