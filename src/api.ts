import DATA from './data.json'
import { type Root } from './interfaces/team'

const api = {
  root: {
    fetch: async (): Promise<Root> => DATA as Root
  }
}

export default api
