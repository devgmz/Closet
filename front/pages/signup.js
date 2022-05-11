import { Head } from 'next/head';
import { Link } from 'next/link';
import { useState, useEffect, useCallback } from 'react';

import useInput from '../hooks/useInput';
import AppLayout from './../components/AppLayout';

const signup = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.value);
    setTermError(false);
  }, []);

  const onsignUpSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
  });

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | Closet</title>
      </Head>
      <form onSubmit={onsignUpSubmit}>
        <div>
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            placeholder="닉네임을 적어주세요."
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호를 확인하세요."
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <div className="font-bold text-red-700">
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            value="회원가입 동의"
            checked={term}
            onChange={onChangeTerm}
          />
          {termError && (
            <div className="font-bold text-red-700">
              약관에 동의하셔야 합니다.
            </div>
          )}
        </div>
        <div>
          <Link href="/">
            <button>취소</button>
          </Link>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </AppLayout>
  );
};

export default signup;
