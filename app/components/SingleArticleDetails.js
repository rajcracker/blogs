'use client';

import Image from "next/image";
import "@fontsource/karla"; // Defaults to weight 400
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";

import {
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";


import {
    getArticleDetail,
  } from "../utils/contentful";

const SingleArticleDetails =  ({article}) => {
    console.log(article.title, 'Article');
    const options = {
        renderText: (text) => {
          return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      };
    return (
        <>
         <div className="row justify-content-center blog_details">

            <div className="col-md-8 justify-content-start">

                        <div className="card mb-3 border-0 " >
                                  <div>
                                        <div className="card-body">
                                              <div className="row">
                                                <div className="col-md-12 text-center">
                                                <p className="card-text small mb-2 text-secondary">{'Published By - '}<span className="highlight-text fw-bold">{article.AutherName}</span> </p>
                                                {/* <p className="small text-secondary">{item.AutherType}</p> */}
                                                <h1 className="blog-title ">{article.title}</h1>
                                                <p className="blog-text fs-5">{article.summary}</p>
                                                </div>
                                              </div>
                                                <div className="mb-3 mt-5 mb-5 text-center">
                                                    <Image width={1200} alt="Rajendra Nagar"  height={700}  src={article.image} className="rounded img-fluid" />
                                                </div>

                                                {documentToReactComponents(article.description, options)}
                                                
												<div className="row">
													<div className="col-md-12 mt-2 mb-5">
																<FacebookShareButton url={'https://rajendranagar.co.in/blogsDetails/'+article.id}>
																	<FacebookIcon size={32} round={true} className="me-2" />
																</FacebookShareButton>

																<LinkedinShareButton url={'https://rajendranagar.co.in/blogsDetails/'+article.id}>
																	<LinkedinIcon size={32} round={true} className="me-2"/>
																</LinkedinShareButton>

																<TwitterShareButton url={'https://rajendranagar.co.in/blogsDetails/'+article.id}>
																	<TwitterIcon size={32} round={true} className="me-2" />
																</TwitterShareButton>

																<WhatsappShareButton url={'https://rajendranagar.co.in/blogsDetails/'+article.id}>
																	<WhatsappIcon size={32} round={true} />
																</WhatsappShareButton>
																
													</div>
					  					 		</div>
                                          </div>
										 
                                  </div>
                            
                        </div>
                    </div>
               
</div>

        
    </>
    );
};

export default SingleArticleDetails;
