import { useEffect, useState } from "react";

export const useBoardNotice = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      const request = await fetch("https://find-thanku.herokuapp.com/notice", {
        method: "GET",
      });

      if (!request.ok) {
        alert("서버 죽음");
        return;
      }

      const data = await request.json();

      setPosts(data);
      console.log(data);
    };

    getInitialPosts();
  }, []);

  return {
    posts,
  };
};
