import {query} from './common';

export async function apiFarmTopMenus(farm_id) {
  console.log(4, 'apiFarmTopMenus = ', farm_id);
  return await query(`/game/farm/${farm_id}/top_menus/`);
}
