import React, { useCallback, useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import useInput from './../hooks/useInput';
import ImageUpload from './../components/ImageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { postAdd } from '../store/modules/post';

const textareaStyle = {
  width: '100%',
  height: '15rem',
  resize: 'none',
};

const write = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');

  const titleRef = useRef('');
  const textRef = useRef('');

  const onPostSubmit = useCallback(() => {
    if (!title) {
      titleRef.current.focus();
      return;
    }
    if (!text) {
      textRef.current.focus();
      return;
    }
    dispatch(postAdd());
  }, []);

  console.log(mainPosts);

  return (
    <AppLayout>
      <Head>
        <title>새 글 작성 | Closet</title>
      </Head>
      <article className="basis-3/5 border-2 m-4 p-4 h-96 border-gray-400">
        <div>
          <ImageUpload />
        </div>
        <form onSubmit={onPostSubmit}>
          <input
            type="text"
            className="border-2 mt-4 w-full h-9"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={onChangeTitle}
            ref={titleRef}
          />
          <textarea
            style={textareaStyle}
            className="border-2 mt-4 w-96"
            placeholder="내용을 입력하세요."
            value={text}
            onChange={onChangeText}
            ref={textRef}
          />
          <div className="flex justify-end">
            <Link href="/">
              <button className="px-4 py-2 bg-sky-200 font-bold mr-4">
                취소
              </button>
            </Link>
            <button type="submit" className="px-4 py-2 bg-sky-200 font-bold">
              등록
            </button>
          </div>
        </form>
      </article>
    </AppLayout>
  );
};

export default write;
