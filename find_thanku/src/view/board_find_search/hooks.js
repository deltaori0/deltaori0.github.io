import { useEffect, useState } from "react";

export const useBoardSearch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      const url = window.location.pathname;
      const request = await fetch("https://find-thanku.herokuapp.com" + url, {
        method: "GET",
      });

      if (!request.ok) {
        alert("서버 죽음");
        return;
      }

      const data = await request.json();

      setPosts(data.slice(0, 10));
      console.log(data.slice(0, 10));
    };

    getInitialPosts();
  }, []);

  return {
    posts,
  };
};
