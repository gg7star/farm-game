import {query} from './common';

export async function apiAddressList(member_id) {
  return await query(`/member/${member_id}/invoices/`);
}
