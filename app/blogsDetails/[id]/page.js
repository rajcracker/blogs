
import ArticleDetails from "@/app/components/ArticleDetails";
import { use } from "react";


 
// export default function asyncPage(params) {
// const articleDetail = await
//   // const router = useRouter()
//   return <p>Post: {}</p>
// }

const Article =   ({params}) => {
  const { id } = use(params);
  console.log(id);
  return (<>
   <ArticleDetails id={id}/>
  </>)
}

export default Article