import {query} from './common';

export async function apiFarmData(farm_id) {
  return await query(`/game/farm/${farm_id}/background_images/`);
}
