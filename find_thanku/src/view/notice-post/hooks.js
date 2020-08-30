import { useEffect, useState } from "react";

export const useNoticePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      const url = window.location.pathname;
      // GET https://find-thanku.herokuapp.com/notice/post/:_id
      const request = await fetch("https://find-thanku.herokuapp.com" + url, {
        method: "GET",
      });

      if (!request.ok) {
        alert("Server not responding");
        return;
      }

      const data = await request.json();

      setPosts(data);
    };

    getInitialPosts();
  }, []);

  return {
    posts,
  };
};
