import {query} from './common';

export async function apiAddressList(member_id) {
  return await query(`/address_list/all/?member_id=${member_id}`);
}
