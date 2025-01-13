

import Image from "next/image";
import "@fontsource/karla"; // Defaults to weight 400

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";
import {
    getArticleDetail,
  } from "../utils/contentful";
import SingleArticleDetails from "./SingleArticleDetails";

const ArticleDetails =  async(data) => {
    const article =  await getArticleDetail(data.id);
    
    const options = {
        renderText: (text) => {
          return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      };
    return (
        <>
       <SingleArticleDetails article={article}/>
    </>
    );
};

export default ArticleDetails;
