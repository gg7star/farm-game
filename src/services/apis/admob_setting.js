import { query } from "./common";

export async function apiAdmobSetting() {
  return await query(`/admob_setting/all/`, {}, false);
}
