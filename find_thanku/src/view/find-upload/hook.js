import { useEffect, useState } from "react";

export const useBoardFind = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hi");
    const getInitialPosts = async () => {
      // console.log(window.location.pathname);
      const url = window.location.pathname;
      const newurl = url.slice(0, -5);
      const request = await fetch(
        "https://find-thanku.herokuapp.com" + newurl,
        {
          method: "GET",
        }
      );
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
