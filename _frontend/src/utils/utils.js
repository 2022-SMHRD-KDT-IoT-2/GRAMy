export function cls(...classnames) {
  return classnames.join(" ");
}

export const identifyUserName = (userCookie, socialUser) => {
  if (userCookie === undefined || userCookie.user_name === "") {
    return socialUser.name;
  } else {
    return userCookie.user_name;
  }
};

export const identifyUserId = (userCookie, socialUser) => {
  if (userCookie === undefined || userCookie.user_id === "") {
    return socialUser.email;
  } else {
    return userCookie.user_id;
  }
};
