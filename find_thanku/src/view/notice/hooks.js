import { useEffect, useState } from "react";

export const useBoardNotice = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      // GET https://find-thanku.herokuapp.com/notice/
      const request = await fetch("https://find-thanku.herokuapp.com/notice", {
        method: "GET",
      });

      if (!request.ok) {
        alert("Server not Responding");
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
