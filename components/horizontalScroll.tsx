import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./project-card";

const HorizontalScrollCarousel = () => {
  const projects = [
    {
      title: "Code-Debugging AI Agent",
      description:
        "An advanced AI-powered debugging agent built with Next.js, LangChain, RAG, PostgreSQL, and Docker. It assists developers in identifying and fixing code issues efficiently.",
      image: "/images/codedebugagent.png",
      link: "https://github.com/Gouravjoshi986/Code-Debugging-AI-Agent",
      tags: ["Next.js", "LangChain", "Pinecone", "PostgreSQL", "Docker"],
    },
    {
      title: "Yoom Video Conferencing App",
      description:
        "A seamless video conferencing platform built using Next.js, TypeScript, and Clerk for authentication. It leverages Stream API for real-time communication.",
      image: "/images/yoom.png",
      link: "https://github.com/Gouravjoshi986/Video-conferencing-WebApp",
      tags: ["Next.js", "TypeScript", "Clerk", "Stream API"],
    },
    {
      title: "Stock Prediction Model using LSTM",
      description:
        "A machine learning model designed to predict stock prices using Long Short-Term Memory (LSTM) networks. Built with Python, TensorFlow, and Google Colab.",
      image: "/images/lstmmodel.png",
      link: "https://github.com/Gouravjoshi986/Stock-Prediction-Model-using-LSTM",
      tags: ["Python", "TensorFlow", "LSTM", "Google Colab", "Steam-lit"],
    },
    {
      title: "AI Blog WebApp",
      description:
        "A modern AI-powered blogging platform built with Next.js and Typescript. Allows for editing using TipTap and summary generation, content writing by ai with a given context.",
      image: "/images/ailog.png",
      link: "https://github.com/Gouravjoshi986/Ai-Blog-WebApp",
      tags: ["Next.js", "Typescript", "TipTap", "OpenAI"],
    },
    {
      title: "Multiple Disease Prediction Model",
      description:
        "A healthcare web application that predicts diseases like diabetes, heart disease, and Parkinson's using machine learning. Built with Python, Streamlit, and Scikit-learn.",
      image: "/images/diseasemodel.png",
      link: "https://github.com/Gouravjoshi986/Multiple_Disease_Prediction_Model",
      tags: ["Python", "Streamlit", "Scikit-learn", "SVM"],
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section ref={targetRef} className="sticky top-0 carousel h-[107vh]">
      <div className="flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
