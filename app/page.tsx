"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const rotateB = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const projects = [
    {
      "title": "Code-Debugging AI Agent",
      "description": "An advanced AI-powered debugging agent built with Next.js, LangChain, RAG, PostgreSQL, and Docker. It assists developers in identifying and fixing code issues efficiently.",
      "image": "/images/codedebugagent.png",
      "link": "https://github.com/Gouravjoshi986/Code-Debugging-AI-Agent",
      "tags": ["Next.js", "LangChain", "Pinecone", "PostgreSQL", "Docker"]
    },
    {
      "title": "Yoom Video Conferencing App",
      "description": "A seamless video conferencing platform built using Next.js, TypeScript, and Clerk for authentication. It leverages Stream API for real-time communication.",
      "image": "/images/yoom.png",
      "link": "https://github.com/Gouravjoshi986/Video-conferencing-WebApp",
      "tags": ["Next.js", "TypeScript", "Clerk", "Stream API"]
    },
    {
      "title": "Stock Prediction Model using LSTM",
      "description": "A machine learning model designed to predict stock prices using Long Short-Term Memory (LSTM) networks. Built with Python, TensorFlow, and Google Colab.",
      "image": "/images/lstmmodel.png",
      "link": "https://github.com/Gouravjoshi986/Stock-Prediction-Model-using-LSTM",
      "tags": ["Python", "TensorFlow", "LSTM", "Google Colab", "Steam-lit"]
    },
    {
      "title": "AI Blog WebApp",
      "description": "A modern AI-powered blogging platform built with Next.js and Typescript. Allows for editing using TipTap and summary generation,content writing by ai with a given context.",
      "image": "/images/ailog.png",
      "link": "https://github.com/Gouravjoshi986/Ai-Blog-WebApp",
      "tags": ["Next.js", "Typescript", "TipTap", "OpenAI"]
    },
    {
      "title": "Multiple Disease Prediction Model",
      "description": "A healthcare web application that predicts diseases like diabetes, heart disease, and Parkinson's using machine learning. Built with Python, Streamlit, and Scikit-learn.",
      "image": "/images/diseasemodel.png",
      "link": "https://github.com/Gouravjoshi986/Multiple_Disease_Prediction_Model",
      "tags": ["Python", "Streamlit", "Scikit-learn", "SVM"]
    }
  ];

  return (
    <main ref={aboutRef} className="bg-background h-[440vh]">
      {/* Hero Section */}
      <motion.section className="sticky top-0 h-screen flex flex-col items-center justify-center" style={{scale : scaleDown,y,opacity,rotate:rotateA}}>
        <motion.div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{
        backgroundImage:`url(/images/background.png)`,
        opacity:0.7
      }}/>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Gourav Joshi</h1>
          <p className="text-2xl text-muted-foreground">Software Engineer</p>
        </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
        <ChevronDown className="animate-bounce w-8 h-8" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section className="sticky top-100 h-screen py-20 px-4 md:px-20" style={{scale:scaleUp,y,rotate:rotateB}}>
      <motion.div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{backgroundImage:`url(/images/bg-2.jpg)`,opacity:0.8}}/>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-lg font-semibold">
            <p>
              Final Year Undergrad at NIT Bhopal with interest in Computer Science and Tech. I've worked with various technologies and frameworks, always staying up-to-date with the latest industry trends.
            </p>
            <p>
              I'm a passionate Software Engineer and developer with over 3 years of experience
              building modern applications. I specialize in React, Next, Node.js, and
              many other technologies.
            </p>
            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/Gouravjoshi986">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://www.linkedin.com/in/gourav-joshi-/">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://leetcode.com/u/Gourav986/">
                  <Code className="mr-2 h-5 w-5" />
                  LeetCode
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="sticky top-200 min-h-screen py-20 px-4 md:px-20 bg-muted/30" style={{scale:scaleUp,rotate:rotateB}}>
      <motion.div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{backgroundImage:`url(/images/bg-3.jpg)`}}/>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl text-white mb-12">Projects</h2>
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="snap-center"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="min-h-screen py-20 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>gourav.joshi2003@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/Gouravjoshi986">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/gourav-joshi-/">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </main>
  );
}