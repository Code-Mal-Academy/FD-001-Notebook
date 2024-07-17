import blog from "./server/db/schema/blog";

console.log(await blog.delete({ id: 1 }))