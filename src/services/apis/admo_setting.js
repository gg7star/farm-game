import { query } from "./common";

export async function apiAdmobSetting() {
  return await query(`/member/all/`, {}, false);
}
