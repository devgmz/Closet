import React from 'react'
import { Avatar } from 'antd';

const PostCard = ({ data, title, content, author, like }) => {

  return (
    <div className="flex w-80 bg-zinc-50 rounded m-4 overflow-hidden flex-col shadow-xl">
      <a href="https://naver.com">
        <img className='lg:h-72 md:h-48 w-full object-cover object-center' src="https://picsum.photos/320/320" alt="image" />
      </a>

      {/* Content Container */}
      <div className="flex flex-col p-4 flex-1 truncate">
        {/* Content Title */}
        <a href="#">
          <h4 className='truncate text-base mb-1 mx-0 mt-0 font-bold'>{title}</h4>
          <div className='flex-1'>
            <p className='truncate whitespace-normal text-black leading-relaxed mb-6 mx-0 mt-0 h-16 text-sm'>{content}</p>
          </div>
        </a>
        {/* Date */}
        <div className='text-xs leading-normal'>
          <span>date</span>
        </div>
      </div>

      {/* UserInfo */}
      <div className="flex justify-between py-2.5 px-4 border-0 border-t border-gray-200 border-solid leading-normal text-xs ">
        <a href="#" className='flex items-center '>
          <Avatar>nickname </Avatar>
          <span className='ml-2'>{author}</span>
        </a>
        <div className="flex items-center">
          <span>{like}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;