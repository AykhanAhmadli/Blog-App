import NavigationBar from "components/NavigationBar"
import Blog from "components/Blog"
import "./style.scss"

function Home() {
  return (
    <div className="Home">
      <NavigationBar></NavigationBar>
      <div className="container mx-auto">
        <div className="flex justify-between py-20">
          <div className="text-2xl">Recent Blogs</div>
          <button className="btn btn-blue">Create</button>
        </div>
        <Blog></Blog>
      </div>
    </div>
  )
}

export default Home
