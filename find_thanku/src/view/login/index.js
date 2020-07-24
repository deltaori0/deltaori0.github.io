import React, {useState} from "react";
import imgsrc from "./logo2.JPG";
import * as S from "./styles";
import './login.scss';

//로그인 페이지
const idbox = 'Google 계정'
const pwbox = 'Password'

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

  return(
    <div>
    <S.Login>
      <div>
        <img src={imgsrc} width='200px' alt='logo'/>
      </div>
      <div><br/>
       
        <input class='input_box' name='id' placeholder={idbox} onChange={onChange} value={id}/><br/>
        <input class='input_box' type='password' name='pw' placeholder={pwbox} onChange={onChange} value={pw}/><br/><br/>
      
        <button class='login_button' onClick={onReset}>로그인</button>
        
        <div>
          id / pw: 
          {id} / {pw}
        </div>
      </div>
    </S.Login>
    </div>
 )};

export default Login;
