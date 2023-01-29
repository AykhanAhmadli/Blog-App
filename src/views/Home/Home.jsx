import NavigationBar from "components/NavigationBar"
import Blog from "components/Blog"
import "./style.scss"

function Home() {
  let blog = {
    fullName: "Peter Griffin",
    occupation: "Software Engineer intern",
    profilePhoto:
      "https://i.dailymail.co.uk/1s/2021/10/04/00/48720441-10055587-image-m-34_1633302210416.jpg",
    blogText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, fugiat officiis velit totam fugit modi incidunt sit natus voluptates quos deserunt labore ex veniam ad a tenetur cupiditate perferendis illo?",
  }
  const blogs = [blog, blog, blog]
  return (
    <div className="Home">
      <NavigationBar />
      <div className="container mx-auto">
        <div className="flex justify-between py-20">
          <div className="text-2xl">Recent Blogs</div>
          <button className="btn btn-blue">Create</button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {blogs.map((blog, i) => (
            <Blog blog={blog} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
