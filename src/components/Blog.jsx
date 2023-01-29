import React from "react"

const blog = ({ blog }) => {
  const limitBlogText = (text) => {
    if (text.length >= 200) {
      text = text.slice(0, 200) + "..."
    }
    return text
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
      <div className="">{limitBlogText(blog.blogText)}</div>
    </div>
  )
}

export default blog
