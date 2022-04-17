import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";

export default function Home() {

  const [postData, setPostData] = useState( [] );
  
  const getData = async () => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
      .then( ( res ) => res.json() );
    console.log( res );
    const initData = res.slice( 0, 20 ).map( ( item ) => {
      return {
        userId: item.userId,
        postId: item.id,
        title: item.title,
        content: item.body,
        author: 'nickname',
        like: 0,
      }
    } )
    setPostData( initData );
  }

  useEffect( () => {
    getData();
  }, [] );

  return (
    <>
      <AppLayout>
        {postData.map( ( data ) => <PostCard {...data} />)}
      </AppLayout>
    </>
  )
}
