import { jsonQuery, query } from "./common";

export async function apiMembers(searchParams) {
  return await query(`/member/all/`, {searchParams});
}

export async function apiMemberById(id) {
  return await query(`/member/${id}/`);
}

export async function apiUpdateMember(id, data) {
  return await jsonQuery(`/member/${id}/`, 'PUT', data);
}

export async function apiMemberStatuses() {
  return await jsonQuery(`/enums/all/?enum_id=member.status`);
}

export async function apiMemberOptions(param) {
  return await jsonQuery(`/enums/all/?enum_id=${param}`);
}

export async function apiMemberPointLogsById(id) {
  return await jsonQuery(`/member_point_log/all?member_id=${id}`);
}

export async function apiMemberFarmDataById(id) {
  return await jsonQuery(`/farm_data/all?member_id=${id}`);
}

export async function apiMemberItemPurchaseById(id) {
  return await jsonQuery(`/member/${id}/item_purchases/`);
}

export async function apiMemberItemUseById(id) {
  return await jsonQuery(`/member/${id}/farms_in_use/`);
}

export async function apiMemberItemPossessionById(id) {
  return await jsonQuery(`/member/${id}/owner_items/`);
}

export async function apiMemberCreate(data) {
  const res = await jsonQuery(`/member/create/`, 'POST', data, false);
  return res;
}
