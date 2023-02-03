import axios from "axios";

// @todo We should not be doing this, we should be calling our api endpoints instead.
const instance = axios.create({
  baseURL: "https://dev-hsrrr7gwxk2686g2.us.auth0.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const sendCode = async (email: string) => {
  // @todo Call Api Endpoint ->Emmanuel is creating the corresponding backend endpoints for this!
  return instance.post("/passwordless/start", {
    client_id: "sbfx1NbTcrSIfXRSW4uvsr2y41Vr9qQR",
    client_secret:
      "jBuMe2vrjj8WTnXRMkY_djZl2zEx9MlT9HbkOt1Jp68OQG44cOa5-JELCI0VNAK_",
    connection: "email",
    email,
    send: "code",
  });
};

const validateCode = async (email: string, otp: string) => {
  // @todo Call Api Endpoint -> Emmanuel is creating the corresponding backend endpoints for this!
  return instance.post("/oauth/token", {
    grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
    client_id: "sbfx1NbTcrSIfXRSW4uvsr2y41Vr9qQR",
    client_secret:
      "jBuMe2vrjj8WTnXRMkY_djZl2zEx9MlT9HbkOt1Jp68OQG44cOa5-JELCI0VNAK_",
    username: email,
    realm: "email",
    otp,
  });
};

export const useAuthApi = () => {
  return {
    validateCode,
    sendCode,
  };
};
