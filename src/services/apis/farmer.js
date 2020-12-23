import {query} from './common';

export async function apiBaseFarm() {
  return await query(`/farmer/base_farm/all/`);
}

export async function apiRecommends() {
  return await query(`/farmer/base_farm/recommends/`);
}
