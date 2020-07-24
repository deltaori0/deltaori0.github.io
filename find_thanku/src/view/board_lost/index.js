import React, {useState} from "react";
import * as S from "./styles";

//분실물 게시판

const Board = () => {
  const [inputs, setInputs]=useState({
    title: ''
  });

  const{title} = inputs; //여기에 값이 저장됨

  const onChange = (e) => { //입력시
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => { //버튼클릭시
    setInputs({
      title: ''
    })
  };

  return <S.Board>
    <b>분실물 게시판</b><br/>
    <input class='' name='title' placeholder='제목 검색' onChange={onChange} value={title}/>
    <button class='' onClick={onReset}>검색</button><br/>
    title: {title}
  </S.Board>;
};

export default Board;
