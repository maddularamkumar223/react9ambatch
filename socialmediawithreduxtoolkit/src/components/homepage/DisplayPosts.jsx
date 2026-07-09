import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../apiCalls/PostThunk";
import Style from "./homepage.module.css";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

const DisplayPosts = () => {
  let { posts } = useSelector((state) => state.posts);
  console.log(posts);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <>
      {posts?.map((post) => {
        return (
          <figure id={Style.post}>
            <img src={post.image} alt="" />
            <figcaption>{post.caption}</figcaption>

            <div className={Style.like}>
              <span>
                <FaHeart />
              </span>
              <span>
                <FaComment />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default DisplayPosts;
