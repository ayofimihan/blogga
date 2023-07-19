import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../helpers/firebase";

const AddPost = () => {
  const [imageUrl, setImageUrl] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleToggleChange = (e) => {
    setIsFeatured(e.target.checked);
  };

  function createSlug(title) {
    const slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/\s+/g, "-") // Replace whitespace with dashes
      .replace(/[^a-z0-9-]/g, "") // Remove any non-alphanumeric characters except dashes
      .replace(/-+/g, "-"); // Replace consecutive dashes with a single dash

    return slug;
  }

  const handleSave = async (e) => {
    e.preventDefault();
    if (file === null) {
      return;
    }
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    setImageUrl(url);

    const postData = {
      title: title,
      image: url,
      slug: createSlug(title),
      isFeatured: isFeatured,
      content: content,
    };
    console.log(postData);
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex flex-col justify-center items-center ">
      <h1 className="text-2xl text-bold">Add New Post</h1>
      <form
        className="w-full max-w-screen-md p-6 mx-auto bg-white rounded-lg "
        onSubmit={handleSave}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
          />
        </div>

        <div className="flex items-center w-full ">
          <label
            htmlFor="dropzone-file"
            className="border rounded-lg border-grey-700 w-full"
          >
            <div className="flex ">
              <p className="bg-gray-700 p-3 border rounded-lg"> choose file</p>
              <p className="flex flex-1 p-3"> lorem </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="featured" className="flex items-center">
            <input
              id="featured"
              type="checkbox"
              checked={isFeatured}
              onChange={handleToggleChange}
              className="mr-2"
            />
            Featured
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
