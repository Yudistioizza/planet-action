async function register(email, password) {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCiTnglggEu3BL74vQ3dsLtnyOj07gzLmc";
    const body = { email, password, returnSecureToken: true };
  
    const { idToken, refreshToken } = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    }).then((res) => res.json());
  
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("refreshToken", refreshToken);
  }
  