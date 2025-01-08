
import BlogArticle from "@/app/components/BlogArticle";
import { use } from "react";
 
// export default function asyncPage(params) {
// const articleDetail = await
//   // const router = useRouter()
//   return <p>Post: {}</p>
// }

const NewsPage =   ({params}) => {
  const { id } = use(params);
  return (<>
   <BlogArticle/>
  </>)
}

export default NewsPage