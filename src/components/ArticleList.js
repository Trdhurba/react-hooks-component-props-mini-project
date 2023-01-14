import React from "react";

import Article from "./Article"
function ArticleList({posts}) {
     
     const articlepost= posts.map(post => <Article title= {post.title}date= {post.date}preview = {post.preview}key={post.id }  />)


  return (<main>
    {articlepost} 
    
    

    

   </main> )

  
  
}

export default ArticleList ;