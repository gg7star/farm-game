import {query} from './common';

export async function apiBaseFarm() {
  return await query(`/farmer/base_farm/all/`);
}

export async function apiRecommends() {
  return await query(`/farmer/base_farm/recommends/`);
}

export async function apiFarmHouse(id) {
  return await query(`/farmer/farm_house/${id}/`);
}
