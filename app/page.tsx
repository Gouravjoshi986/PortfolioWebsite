// pages/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import HorizontalScrollCarousel from "@/components/horizontalScroll";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scaleUp = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const rotateB = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Listen to window resize events to update mobile status.
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main ref={aboutRef} className="bg-background h-[447vh]">
      {/* Hero Section */}
      <motion.section
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={isMobile ? {} : { scale: scaleDown, y, opacity, rotate: rotateA }}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(/images/background.png)`,
            opacity: 0.7,
          }}
        />
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
      <motion.section
        className="sticky top-100 h-screen py-20 px-4 md:px-20"
        style={isMobile ? {} : { scale: scaleUp, y, rotate: rotateB }}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/images/bg-2.jpg)`, opacity: 0.8 }}
        />
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
              Final Year Undergrad at NIT Bhopal with interest in Computer Science
              and Tech. I've worked with various technologies and frameworks, always
              staying up-to-date with the latest industry trends.
            </p>
            <p>
              I'm a passionate Software Engineer and developer with over 3 years of
              experience building modern applications. I specialize in React, Next,
              Node.js, and many other technologies.
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
      <motion.section
        className="sticky top-200 min-h-screen py-20 px-4 md:px-20 bg-muted/30"
        style={isMobile ? {} : { scale: scaleUp, rotate: rotateB, height: "150vh" }}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/images/bg-3.jpg)` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl text-white mb-12">Projects</h2>
          <HorizontalScrollCarousel />
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
