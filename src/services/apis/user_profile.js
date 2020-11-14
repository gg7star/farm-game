import { jsonQuery, query, getLocalToken, generatePagenationParameters } from "./common";

export const getMemberInfoFromLocal = () => {
  const token = getLocalToken();
  const userInfo = token ? token.member : null;
  return userInfo;
};

export async function apiProfile(searchParams) {
  return await query(`/member/all`, {searchParams});
}

export async function apiProfileById(id) {
  return await query(`/member/${id}/`);
}

export async function apiUpdateCropMaster(id, data) {
  return await jsonQuery(`/crop_master/${id}/`, 'PUT', data);
}
