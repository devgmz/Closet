import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

import { Avatar } from 'antd';
import useInput from '../hooks/useInput';

Modal.setAppElement('#modal-root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 2000ms ease-in-out',
  },
};

const LoginModal = ({ isLogin, setIsLogIn }) => {
  const [modalShow, setModalShow] = useState(false);
  const [loginEmail, onChangeEmail] = useInput('');
  const [loginPassword, onChangePassword] = useInput('');
  const [loggedIn, setLoggedIn] = useState(false);

  const openModal = useCallback(() => {
    setModalShow(true);
  });

  const closeModal = useCallback(() => {
    setModalShow(false);
    setIsLogIn(true);
    setLoggedIn(true);
  });

  useEffect(() => {
    if (modalShow) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalShow]);

  return (
    <div>
      {isLogin ? (
        <Avatar style={{ backgroundColor: '#ff4500' }}>GH</Avatar>
      ) : (
        <button onClick={openModal}>LOGIN</button>
      )}
      <Modal
        isOpen={modalShow}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="LoginModal"
      >
        <div>
          <h1 className="font-bold mb-4 text-lg">이메일로 로그인</h1>
        </div>
        <form>
          <div>
            <label>이메일</label>
            <br />
            <input
              type="text"
              name="user-email"
              value={loginEmail}
              onChange={onChangeEmail}
              placeholder="이메일을 입력하세요."
              className="border w-full mb-4 mt-0.5 h-7"
              required
            />
          </div>
          <div>
            <label>비밀번호</label>
            <br />
            <input
              type="password"
              name="user-password"
              value={loginPassword}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력하세요."
              className="border w-full mb-4 mt-0.5 h-7"
              required
            />
          </div>
          <button
            onClick={closeModal}
            type="submit"
            className="w-80 bg-emerald-300 hover:bg-emerald-500 h-8 font-bold text-lg"
          >
            로그인
          </button>

          <div>
            <h1 className="mt-10 font-bold text-lg text-center">소셜 로그인</h1>
            <div className="flex justify-around mt-10">
              <h2>깃허브</h2>
              <h2>구글</h2>
              <h2>카카오톡</h2>
            </div>
            <div className="flex justify-end mt-10">
              <Link href="/signup">회원가입</Link>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

const props = {};

export default LoginModal;
