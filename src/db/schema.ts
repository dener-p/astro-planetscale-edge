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
    host: "aws.connect.psdb.cloud",
    username: "vic1kr89ayfoy2pzwzdz",
    password: "pscale_pw_LptvI3zyUFfWMWkCik6ciqYZAhSMDpX4GKHQASnknN8",
  }),
})
