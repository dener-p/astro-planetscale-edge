import type { APIRoute } from "astro"
import { db } from "../db/schema"

export const get: APIRoute = async () => {
  const data = await db.selectFrom("Post").selectAll().execute()
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  })
}
