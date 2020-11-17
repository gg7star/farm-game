import { jsonQuery, query, getLocalToken, generatePagenationParameters } from "./common";

export const getMemberInfoFromLocal = () => {
  const token = getLocalToken();
  const userInfo = token ? token.member : null;
  return userInfo;
};

export async function apiActionMasters(searchParams) {
  return await query(`/action_master/all`, { searchParams });
}

export async function apiActionMasterById(id) {
  return await query(`/action_master/${id}/`);
}

export async function apiUpdateActionMaster(id, data) {
  return await jsonQuery(`/action_master/${id}/`, 'PUT', data);
}
