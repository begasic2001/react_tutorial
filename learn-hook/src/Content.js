import { useState, useEffect } from "react";
function Content() {
  //  const [title, setTitle] = useState("");
  //  const [posts, setPosts] = useState([]);
  //  useEffect(() => {
  //    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
  //      .then((data) => data.json())
  //      .then((posts) => {
  //        setPosts(posts);
  //      });
  //  }, []);
  //  return (
  //    <div style={{ padding: 32 }}>
  //      <input value={title} onChange={(e) => setTitle(e.target.value)} />
  //      <ul>
  //        {posts.map(post =>
  //          <li key={post.id}>{post.title}</li>
  //        )}
  //      </ul>
  //    </div>
  //  );
  // review avatar
  // const [avatar,setAvatar] = useState()
  // useEffect(()=>{
  //     return () =>{
  //         //cleanup
  //        avatar && URL.revokeObjectURL(avatar.preview)
  //     }
  // },[avatar])
  // const handlePreviewAvatar = (e) =>{
  //     const file = e.target.files[0]
  //     file.preview = URL.createObjectURL(file)
  //     setAvatar(file)
  // }
  // return (
  //   <div>
  //     <input type="file" onChange={handlePreviewAvatar} />
  //     {avatar && <img src={avatar.preview} width="80%" />}
  //   </div>
  // );
  ///////////////////////////useLayoutEffect///////////////////////
  ///// gọi cleanup nếu dependence thay đổi , sau đó gọi callback , cập nhật UI
  //////////////////////////useRef///////////////////////////////
  //Khi chúng ta dùng useRef để lưu giá trị, thì khi phải render lại một function component, giá trị đã lưu sẽ không bị thay đổi, mà vẫn giữ được giá trị đã lưu trước đó
  /////////////// useCallBack ////////////
  // giúp tránh gọi lại 1 hàm nhiều lần không cần thiết (thường sử dụng với React.memo)
  /////////////// useMemo ///////////////
  // giúp tránh lặp lại 1 logic trong 1 hàm không cần thiết
  /////////////// useReducer(reducer,initState) ///////////////
  // 1 lựa chọn khác của useState
  // initState -> Action -> reducer(state,Action) -> dispatch
  //////////////////////////////// useContext /////////////////////////////
  
}

export default Content;
