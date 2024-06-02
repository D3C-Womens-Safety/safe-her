import React, { useEffect, useState } from "react";
import { Pagination } from "./individual components/pagination";
import Recent from "../Images/recent.png";
import "../Styles/blog.css";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5001/post?page=${currentPage}`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
          setTotalPages(data.totalPages);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Colors for rotation
  const colors = ['#C9DC7C','#F7B1B8','#CED2FF'];

  // Function to get color based on the index
  const getColor = (index) => {
    return colors[index % colors.length];
  };

  return (
    <div>
      <div className="header-blog">
        <div className="blog-submit">
          <h1>Your Voice</h1>
          <p>
            Welcome to Your Voice, where you can write and post your own blog entries. 
            Whether you want to tell your story, provide insights, or spark a conversation, 
            this is your platform to be heard.
          </p>
          <a href="/createpost">
            <button>Submit your story</button>
          </a>
        </div>
      </div>
      <div className="grid-posts">
        <div className="recent_container">
          <img src={Recent} alt="recent icon" className="recent"/>
          <h2> Most Recent </h2>
        </div>
        <div className="grid-layout">
          {posts.map((post, index) => (
            <div key={post._id} className="post-blog" style={{ boxShadow: `0 0px 15px ${getColor(index)}` }}>
              <h3>{post.title}</h3>
              <p className="spanPosted">Posted by: {post.name} on {post.timestamp}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};
