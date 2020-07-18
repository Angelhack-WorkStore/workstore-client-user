const OAUTH2_REDIRECT_URL = 'http://localhost:3001/oauth2/redirect';
const KAKAO_HREF = `http://localhost:8081/oauth2/authorize/kakao?redirect_uri=${OAUTH2_REDIRECT_URL}`
const GOOGLE_HREF = `http://localhost:8081/oauth2/authorize/google?redirect_uri=${OAUTH2_REDIRECT_URL}`
const ACCESS_TOKEN = 'accessToken';
const API_BASE_URL = "http://localhost:8081/api";
export {
  OAUTH2_REDIRECT_URL,
  KAKAO_HREF,
  GOOGLE_HREF,
  ACCESS_TOKEN,
  API_BASE_URL
}