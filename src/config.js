const YOUNGSOO_BASE_URL = 'http://10.58.7.31:8000';
const HYUNSOO_BASE_URL = 'http://10.58.0.51:8000';

export const SIGN_UP_API = `${YOUNGSOO_BASE_URL}/users/signup`;
export const KAKAO_SIGN_IN_API = `${YOUNGSOO_BASE_URL}/users/kakaologin`;
export const SIGN_IN_API = `${YOUNGSOO_BASE_URL}/users/login`;
export const CART_API = `${YOUNGSOO_BASE_URL}/orders/cart`;
export const CART_CHECK_API = `${YOUNGSOO_BASE_URL}/orders/cart/check`;
export const CART_EMPTY_API = `${YOUNGSOO_BASE_URL}/orders/cart/flush`;
export const SURVEY_RESULT_DETAIL_API = `${HYUNSOO_BASE_URL}/survey/result?survey-id=`;

export const REVIEW_API = '/data/reviewData.json';
export const RECOMMEND_API = `${HYUNSOO_BASE_URL}/users/login`;
