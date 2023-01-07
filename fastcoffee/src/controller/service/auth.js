import { loginToken } from "../data/user";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const login = async (email, password, rememberMe) => {
  const error = {
    message: "Invalid userid or password",
    statusCode: 401,
    statusText: "Unauthorized",
  };

  try {
    await loginToken(email, password, rememberMe).then((res) => {
      if (res.status === 401)
        throw error
      else if (res.data.token)
        cookies.set('token', res.data.token, { path: '/', sameSite: 'none' });
      else
        throw error
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  cookies.remove('token');
};
