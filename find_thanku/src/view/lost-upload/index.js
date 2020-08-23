import React, {Component} from "react";
import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";
// import { STATIC_URL } from "../../constant";
import {Link} from 'react-router-dom';
import axios from "axios";
const headers = { withCredentials: true };

class LostUpload extends Component {
  LostUpload = () => {
    const send_param = {
      headers,
      title: this.title.value,
      name: this.name.value,
      place: this.place.value
      // content: this.content.value
    };
      // replynum: this.replynum.value,
      // username: this.username.value
    axios
      .post("http://localhost:4000/lost_upload", send_param)
      //정상 수행
    
      //에러
      .catch(err => {
        console.log(err);
      });
    alert("작성 완료!");
  }

  render () {
    return (
      <Layout>
        <S.Upload>
          <S.UploadContainer>
            <S.TitleContainer>
              <S.Title>글 작성</S.Title>
            </S.TitleContainer>
            <S.TitleInputContainer>
              <S.TitleInput 
                type="text"
                ref={ref => (this.title = ref)}
                placeholder="제목 명" />
            </S.TitleInputContainer>
            <S.WriteInputContainer>
              <S.NameInput 
                type="text"
                ref={ref => (this.name = ref)}
                placeholder="분실물 명" />
              <S.PlaceInput
                type="text"
                ref={ref => (this.place = ref)}
                placeholder="분실 장소" />
            </S.WriteInputContainer>
            <S.TextEditorContainer>
              <TextEditor/>
            </S.TextEditorContainer>
            <Link to = '/board_lost'>
              <S.SubmitButton
                onClick={this.LostUpload}
                type="button"
                block>작성
              </S.SubmitButton>
            </Link>
            {/* <img src={STATIC_URL.PENCIL_ICON} alt="pencil" /> */}
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
};

export default LostUpload;
