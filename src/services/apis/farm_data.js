import {jsonQuery, query} from './common';

export async function apiFarmData(farm_id) {
  return await query(`/game/farm/${farm_id}/background_images/`);
}

export async function apiCreateFarmWithCropId(data) {
  console.log(8, data);
  return await jsonQuery('/game/farm/create/', 'POST', data);
}

export async function apiDeleteFarm(farm_id) {
  return await query(`/farm_data/${farm_id}/`);
}

export async function apiFarmTopMenus(farm_id) {
  console.log(4, 'apiFarmTopMenus = ', farm_id);
  return await query(`/game/farm/${farm_id}/top_menus/`);
}

export async function apiSubItems(farm_id, data) {
  return await query(`/game/farm/${farm_id}/sub_items/?name=${data}`);
}

export async function apiUseItems(farm_id, item_id) {
  return await jsonQuery(`/game/farm/${farm_id}/use_item/${item_id}`, 'POST');
}

export async function apiMyFarms(member_id) {
  return await query(`/game/member/${member_id}/myfarms/`);
}
