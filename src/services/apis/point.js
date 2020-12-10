import {query} from './common';

export async function apiPoint(member_id) {
  return await query(`/game/member/${member_id}/point_data/`);
}

export async function apiPointHistory(member_id) {
  return await query(`/game/member/${member_id}/point_histories/`);
}
