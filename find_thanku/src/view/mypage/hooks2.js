import { useEffect, useState } from "react";

export const useMyPage2 = (googleId) => {
  const [posts2, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      const boardkind = "find";
      const request = await fetch(
        "http://localhost:4000/mypage/" + boardkind + "/" + googleId,
        {
          method: "GET",
        }
      );
      console.log("http://localhost:4000/mypage/" + boardkind + "/" + googleId);
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
    posts2,
  };
};
