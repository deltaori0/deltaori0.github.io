import { useEffect, useState } from "react";

export const useMyPage = (googleId) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      const boardkind = "lost";
      const request = await fetch(
        "https://find-thanku.herokuapp.com/mypage/" +
          boardkind +
          "/" +
          googleId,
        {
          method: "GET",
        }
      );
      console.log(
        "https://find-thanku.herokuapp.com/mypage/" + boardkind + "/" + googleId
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
