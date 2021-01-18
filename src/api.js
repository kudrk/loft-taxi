export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json());
};

export const serverGetCard = async (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`
  ).then(res => res.json());
};

export const serverReg = async (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/register?token=${token}`
  ).then(res => res.json());
};