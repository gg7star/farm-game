import {jsonQuery, query} from './common';

export async function apiFarmData(farm_id) {
  return await query(`/game/farm/${farm_id}/background_images/`);
}

export async function apiCreateFarmWithCropId(data) {
  return await jsonQuery('/farm_data/create/', 'POST', data);
}
