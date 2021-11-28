// set thông tin vào localStorage
export const authenticate = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  // get thông tin từ localStorage
  export const isAuthenticate = () => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  };
  