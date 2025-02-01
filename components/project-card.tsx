"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank">
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="h-full"
      >
        <Card className="w-[25vw] h-full">
          <CardContent className="p-0">
            <div className="relative h-[200px] w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}