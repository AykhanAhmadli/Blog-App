import { useState } from "react"

const Blog = ({ blog }) => {
  const limitBlogText = (text) => {
    if (text.length >= 200) {
      text = text.slice(0, 200) + "..."
    }
    return text
  }
  const [text, setText] = useState(limitBlogText(blog.blogText))
  const [isOpen, setIsOpen] = useState(false)
  const readMore = () => {
    setText(blog.blogText)
    setIsOpen(true)
  }
  const hide = () => {
    setText(limitBlogText)
    setIsOpen(false)
  }

  return (
    <div className="bg-slate-50 p-4 rounded-lg ">
      <div className="flex space-x-5 items-center pb-4">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img src={blog.profilePhoto} alt="Peter" />
        </div>
        <div>
          <div className="font-bold text-lg pb-1">{blog.fullName}</div>
          <div className="text-slate-500 text-sm">{blog.occupation}</div>
        </div>
      </div>
      <div className="">
        {text}
        {isOpen ? (
          <span className="text-cyan-500 ml-2 cursor-pointer" onClick={hide}>
            Hide
          </span>
        ) : (
          <span
            className="text-cyan-500 ml-2 cursor-pointer"
            onClick={readMore}
          >
            Read more
          </span>
        )}
      </div>
    </div>
  )
}

export default Blog
