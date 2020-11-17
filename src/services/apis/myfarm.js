import { jsonQuery, query } from "./common";

export async function apiMyFarm(member_id) {
  return await query(`/farm_data/all/?member_id=${member_id}`);
}
