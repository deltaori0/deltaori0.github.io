import { useEffect, useState } from "react";

export const useBoardFind = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      // console.log(window.location.pathname);
      const url = window.location.pathname;
      const request = await fetch("https://find-thanku.herokuapp.com" + url, {
        method: "GET",
      });
      if (!request.ok) {
        const request2 = await fetch(
          "https://find-thanku.herokuapp.com" + url + "/edit",
          {
            method: "GET",
          }
        );
        if (!request2.ok) {
          alert("서버 죽음");
          return;
        }
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
