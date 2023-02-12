import NavigationBar from "components/NavigationBar"
import Blog from "components/Blog"
import "./style.scss"
import { useState } from "react"
import ReactModal from "react-modal"

function Home() {
  const [isCreateModelOpen, setisCreateModelOpen] = useState(false)
  const [blogText, setblogText] = useState("")
  const [blogTitle, setBlogTitle] = useState("")
  let blog = {
    fullName: "Peter Griffin",
    occupation: "Software Engineer intern",
    profilePhoto:
      "https://i.dailymail.co.uk/1s/2021/10/04/00/48720441-10055587-image-m-34_1633302210416.jpg",
    blogText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, fugiat officiis velit totam fugit modi incidunt sit natus voluptates quos deserunt labore ex veniam ad a tenetur cupiditate perferendis illo?",
  }
  const [blogs, setBlogs] = useState([blog, blog, blog])
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60vw",
      backgroundColor: "white",
    },
  }

  const openModal = () => {
    setisCreateModelOpen(true)
  }
  const closeModal = () => {
    setisCreateModelOpen(false)
  }
  const createBlog = () => {
    const newBlog = {
      fullName: "Peter Griffin",
      occupation: "Software Engineer intern",
      profilePhoto:
        "https://i.dailymail.co.uk/1s/2021/10/04/00/48720441-10055587-image-m-34_1633302210416.jpg",
      blogText,
      blogTitle,
    }
    blogs.push(newBlog)
    setBlogs(blogs)
    closeModal()
  }
  return (
    <>
      <ReactModal isOpen={isCreateModelOpen} style={customStyles}>
        <div>
          {/* TOP */}
          <div className="flex justify-between">
            <div className="text-2xl mb-4">Create Blog</div>
            <div className="cursor-pointer text-lg" onClick={closeModal}>
              X
            </div>
          </div>
          {/* TOP END */}
          <div className="grid gap-5 ">
            <input
              className="input"
              type="text"
              placeholder="Blog Title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
            <textarea
              className="input"
              name=""
              id=""
              cols="20"
              rows="10"
              value={blogText}
              onChange={(e) => setblogText(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-blue ml-auto block mt-4"
            onClick={createBlog}
          >
            Save
          </button>
        </div>
      </ReactModal>
      <div className="Home">
        <NavigationBar />
        <div className="container mx-auto">
          <div className="flex justify-between py-20">
            <div className="text-2xl">Recent Blogs</div>
            <button className="btn btn-blue" onClick={openModal}>
              Create
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {blogs.map((blog, i) => (
              <Blog blog={blog} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
