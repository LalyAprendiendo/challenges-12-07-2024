import { getTagAll } from "../models/tag";

class TagController {
    async getTagAll() {
      return await getTagAll();
    }
}
const tags = new TagController();

// users => { getAll: ()=>{}, getById: ()=>{} }

const { getTagAll: tagAll } = tags;

export { tagAll };
