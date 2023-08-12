export const getCurrentUser = async () => {
  return await (
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/me`, {
      method: "GET",
      credentials: "include",
    })
  ).json();
};

export const login = async (username: string, password: string) => {
  return await (
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    })
  ).json();
};

export const signup = async (
  name: string,
  username: string,
  email: string,
  password: string
) => {
  return await (
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({ username, password, email, name }),
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    })
  ).json();
};

export const signout = async () => {
  await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  }).then(() => {
    window.location.replace("/");
  });
};
