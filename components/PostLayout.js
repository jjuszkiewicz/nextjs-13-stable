import React from "react";

const PostLayout = ({children}) => {
  return <div>
    <a href="/posts">powrót do artykułów</a>
    {children}
  </div>
};

export default PostLayout;