import React, { useEffect } from "react";
import "./BlogScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { fetchNotionPageData } from "../../utils/blogUtils/blogUtils";
import { Client } from "@notionhq/client";

type BlogScreenProps = {
};

const BlogScreen = (props: BlogScreenProps) => {
  useEffect(() => { 
      // testing api
      fetchNotionPageData("dd96595d72f24d0783e2d7d9ab6bdb6a").then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div className="blog-screen noise">
      <Navbar />
      <motion.h1
        className="blog-screen-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75 },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        blogs
      </motion.h1>
      <div>
        <p style={{color: "white"}}>{"coming soon :)"}</p>
      </div>
    </div>
  );
};

export default BlogScreen;
