import SignUp from "/src/pages/SignUp";
import NoPage from "/src/pages/NoPage";
import Landing from "/src/pages/Landing";
import Blog from "/src/pages/Blog";
import Post from "src/pages/Post.jsx";

export default function App() {
  return (
    <>
      <Post
          header="The Ultimate Guide to React Component Styling"
          username="Jane Doe"
          likes={124}
          comments={32}
          bannerImage="https://via.placeholder.com/800x400" // Replace with actual image URL
          tags={['React', 'CSS', 'JavaScript', 'Frontend']}
      />
    </>
  )
}
  