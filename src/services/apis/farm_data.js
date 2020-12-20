import {jsonQuery, query} from './common';

export async function apiFarmData(farm_id) {
  return await query(`/game/farm/${farm_id}/background_images/`);
}

export async function apiCreateFarmWithCropId(data) {
  return await jsonQuery('/farm_data/create/', 'POST', data);
}

export async function apiDeleteFarm(farm_id) {
  return await query(`/farm_data/${farm_id}/`);
}

export async function apiSubItems(farm_id, data) {
  return await query(`/game/farm/${farm_id}/sub_items/?name=${data}`);
}

export async function apiUseItems(farm_id, item_id) {
  console.log(20, 'use item === ', farm_id, 'item_id === ', item_id);
  return await jsonQuery(`/game/farm/${farm_id}/use_item/${item_id}`, 'POST');
}
