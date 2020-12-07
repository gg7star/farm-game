import {query} from './common';

export async function apiWeather(farm_id) {
  return await query(`/farm_data/${farm_id}/`);
}
