import React, { useState } from 'react'


const ImageUpload = () => {
  return (
    <div>
      <div>
        <strong>업로드된 이미지</strong>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <form>
        <input type="file" accept="img/*" />
        <label htmlFor="image">파일 선택하기</label>
      </form>
    </div>
  );
}

export default ImageUpload