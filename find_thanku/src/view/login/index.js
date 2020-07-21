import React, {useState} from "react";
import imgsrc from "./logo2.JPG";
import * as S from "./styles";

const idbox = 'Google Account를 입력하세요'
const pwbox = 'Password를 입력하세요'

const Login = () => {
  const [inputs, setInputs]=useState({
    id: '',
    pw: ''
  });

  const{id, pw} = inputs; //여기에 값이 저장됨

  const onChange = (e) => { //입력시
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => { //버튼클릭시
    setInputs({
      id: '',
      pw: ''
    })
  };

  return <S.Login>
    <div>
      <img src={imgsrc} width='150px' alt='logo'/>
    </div>
    <div>
      <input name='id' placeholder={idbox} onChange={onChange} value={id}/><br/>
      <input name='pw' placeholder={pwbox} onChange={onChange} value={pw}/><br/>
      <button onClick={onReset}>로그인</button>
      <div>
        값:
        {id} ({pw})
      </div>
    </div>
    </S.Login>;
};

export default Login;
