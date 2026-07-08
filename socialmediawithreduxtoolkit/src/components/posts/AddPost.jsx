import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../apiCalls/AuthThunk";
import { addPost } from "../../apiCalls/PostThunk";

const AddPost = () => {
  let [postDetails, setPostDetails] = useState({
    image: "",
    caption: "",
  });

  let { image, caption } = postDetails;
  let dispatch = useDispatch();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  let handleImage = (e) => {
    let imageData = e.target.files[0];
    console.log(imageData);

    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      let imageValue = e.target.result;
      setPostDetails({ ...postDetails, image: imageValue });
    };
    fileReader.readAsDataURL(imageData);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (image === "" || caption === "") {
      alert("Fill All The Fields");
    } else {
      let details = {
        ...postDetails,
        userId: localStorage.getItem("id"),
      };
      console.log(details);
      dispatch(addPost(details));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Post</h1>
      <aside>
        <label htmlFor="image">Add Image</label>
        <input type="file" name="image" onChange={handleImage} />
      </aside>
      <aside>
        <label htmlFor="caption">Caption</label>
        <input
          type="text"
          name="caption"
          value={caption}
          onChange={handleChange}
          placeholder="Enter The Caption"
        />
      </aside>
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default AddPost;
