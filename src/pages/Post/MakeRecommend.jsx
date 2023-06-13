import React from "react";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import uploadPhoto from "../../assets/images/camera-sm.svg";
const RecommendInfo = styled.input`
  display: block;
  width: 322px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 1px 0 0 #677880;
  height: 48px;
  border-radius: 4px 4px 0 0;
  padding: 0 px;
  font-size: 16px;
  margin: 0 auto 36px auto;
  outline: none;
  background: transparent;
`;
const RecommendImgWrapper = styled.div`
  width: 100%;
  height: 236px;
  margin-bottom: 10px;
`;
const RatingWrapper = styled.div`
  margin-bottom: 30px;
`;
const RatingP = styled.p`
  margin-bottom: 10px;
`;
const ResultRating = styled.p`
  /* float: right; */
`;
const RecommendWrapper = styled.div`
  padding: 30px 36px;
`;
const RecommendImgInput = styled.input`
  display: none;
`;
const RecommendImg = styled.img`
  width: 195px;
  height: 145px;
  object-fit: contain;
  margin: 0 10px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
`;
const EmptyBox = styled.div`
  background: #c4c4c4;
  margin-top: 5px;
  width: 100%;
  height: 204px;
`;
const RecommendIconWrapper = styled.label`
  /* display: inline-block;
  width: 195px;
  height: 145px;
  flex-shrink: 0; */
  cursor: pointer;
`;
const RecommendImgIcon = styled.img`
  /* width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; */
`;
export default function MakeRecommend() {
  const [rating, setRating] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const fileInputRef = useRef(null);
  // useRef를 사용하여 파일 입력(input) 요소에 대한 참조 생성

  const handleUploadImg = () => {
    const file = fileInputRef.current.files[0];
    const fileUrl = URL.createObjectURL(file); // 파일 객체에 대한 URL 생성
    console.log(fileUrl); // 파일 URL 출력

    const reader = new FileReader();

    reader.onload = e => {
      setImgUrl(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleRating = rate => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <RecommendWrapper>
      <form>
        <RecommendImgWrapper>
          <RecommendIconWrapper>
            <RecommendImgInput
              type="file"
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleUploadImg}
              ref={fileInputRef}
            />
            <RecommendImgIcon
              src={uploadPhoto}
              alt="사진을 올리는 버튼 이미지"
            />
          </RecommendIconWrapper>
          {imgUrl ? (
            <div>
              <RecommendImg src={imgUrl} alt="업로드된 이미지" />
            </div>
          ) : (
            <EmptyBox></EmptyBox>
          )}
        </RecommendImgWrapper>
        <label htmlFor="restaurantName">음식점</label>
        <RecommendInfo id="restaurantName" type="text" />
        <RatingWrapper>
          <RatingP>평점</RatingP>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            /* Available Props */
          />
          <ResultRating>{rating} / 5</ResultRating>
        </RatingWrapper>
        <label htmlFor="address">주소</label>
        <RecommendInfo id="address" type="text" />
      </form>
    </RecommendWrapper>
  );
}

//지도 API 연결 (추후)
