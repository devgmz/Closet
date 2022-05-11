import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'devgmzz',
      },
      title: '첫 번째 타이틀',
      content: '첫 번째 게시글',
      Image: [],
      Comments: [],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  title: '더미 타이틀',
  content: '더미입니다',
  User: {
    id: 1,
    nickname: 'devgmzz',
  },
  Images: [],
  Comments: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postAdd: (state, action) => {
      state.mainPosts = state.unshift(dummyPost);
      state.postAdded = true;
    },
  },
});

export const { postAdd } = postSlice.actions;
export default postSlice.reducer;
