import { getData } from "../database";
import { Messages } from "../utils/messages";


class Tag {
    constructor () {}
     async getTagAll() {
      const { tags } = await getData("tags");
      //console.log(tags);
      return tags;
    }
  
      
  }
  const tags = new Tag();
  
  const { getTagAll } = tags
  
  export { getTagAll}
  