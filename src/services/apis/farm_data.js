import {jsonQuery, query} from './common';

export async function apiFarmData(farm_id) {
  return await query(`/game/farm/${farm_id}/background_images/`);
}

export async function apiCreateFarmWithCropId(data) {
  console.log(8, data);
  return await jsonQuery('/game/farm/create/', 'POST', data);
}

export async function apiDeleteFarm(farm_id) {
  console.log(13, farm_id);
  return await query(`/game/farm/${farm_id}/sub_items/?name=${'topCloseIcon'}`);
}

export async function apiFarmTopMenus(farm_id) {
  console.log(4, 'apiFarmTopMenus = ', farm_id);
  return await query(`/game/farm/${farm_id}/top_menus/`);
}

export async function apiSubItems(farm_id, data) {
  return await query(`/game/farm/${farm_id}/sub_items/?name=${data}`);
}

export async function apiUseItems(farm_id, item_id, data) {
  return await jsonQuery(`/game/farm/${farm_id}/use_item/${item_id}/`, 'POST', data);
}

export async function apiMyFarms(member_id) {
  return await query(`/game/member/${member_id}/myfarms/`);
}

export async function apiWaitDelivery2(member_id) {
  return await query(`/game/member/${member_id}/wait_delivery2/`);
}

export async function apiGrowth(member_id, perPage, pageNum) {
  return await query(
    `/game/member/${member_id}/growth_list/?per_page=${perPage}&page_no=${pageNum}`,
  );
}

export async function apiFarmStatus(farm_id) {
  return await query(`/game/farm/${farm_id}/status`);
}

export async function apiSubItemsByAction(farm_id, actionType) {
  return await query(
    `/game/farm/${farm_id}/sub_items_by_action_type/?action_type=${actionType}`,
  );
}
