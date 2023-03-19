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
    host: import.meta.env.HOST,
    username: import.meta.env.USERNAME,
    password: import.meta.env.PASSWORD,
  }),
})
