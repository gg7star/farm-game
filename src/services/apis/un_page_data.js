import { jsonQuery, query } from "./common";

export async function apiFarmNameByCropId(id) {
  return await query(`/un_page_data/crop/${id}/`);
}