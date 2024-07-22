
import { getTags } from "../database";


class Tag {
    constructor () {}
     async getTagAll() {
      const { tags } = await getTags("tags");
      //console.log(tags);
      return tags;
    }
  
      
  }
  const tags = new Tag();
  
  const { getTagAll } = tags
  
  export { getTagAll}
  