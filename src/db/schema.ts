import { Kysely } from "kysely"
import { PlanetScaleDialect } from "kysely-planetscale"

interface Post {
  id: number
  text: string
  username: string
  createdAt: Date
}

interface DB {
  Post: Post
}

export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    host: Deno.env.get("HOST"),
    username: Deno.env.get("USERNAME"),
    password: Deno.env.get("PASSWORD"),
  }),
})
