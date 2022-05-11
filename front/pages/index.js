import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';

const Home = () => {
  const { mainPosts } = useSelector((state) => state.post);
  // const [postData, setPostData] = useState( [] );

  // const getData = async () => {
  //   const res = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
  //     .then( ( res ) => res.json() );
  //   console.log( res );
  //   const initData = res.slice( 0, 20 ).map( ( item ) => {
  //     return {
  //       userId: item.userId,
  //       postId: item.id,
  //       title: item.title,
  //       content: item.body,
  //       author: 'nickname',
  //       like: 0,
  //       date: new Date().toLocaleString(),
  //     }
  //   } )
  //   setPostData( initData );
  // }

  // useEffect( () => {
  //   getData();
  // }, [] );

  return (
    <>
      <AppLayout>
        {/* {postData.map( ( data ) => <PostCard {...data} key={data.postId}/>)} */}
        {mainPosts.map((post) => (<PostCard post={post} key={post.id} />))}
      </AppLayout>
    </>
  );
};

export default Home;
