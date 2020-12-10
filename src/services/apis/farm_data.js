import {query} from './common';

export async function apiFarmData(farm_id) {
  return await query(`/farm_data/${farm_id}/`);
}
