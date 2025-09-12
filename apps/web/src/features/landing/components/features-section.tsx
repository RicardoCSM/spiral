"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Zap, Shield, Infinity, Brain, Sparkles } from "lucide-react";
import { useRef } from "react";

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.section
      ref={ref}
      id="features"
      className="py-12 px-4 bg-transparent"
      style={{ y, opacity }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Journey Into the Unknown
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the extraordinary features that make your spiral experience
            unforgettable. Each element is designed to guide you deeper into the
            mystery.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10">
                <CardContent className="p-8">
                  <motion.div
                    className="mb-6"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.p
            className="text-sm text-muted-foreground tracking-widest uppercase font-mono"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            The spiral awaits your discovery
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

const features = [
  {
    icon: Eye,
    title: "Perception Shift",
    description:
      "Experience reality through a completely new lens. Watch as your understanding of the world transforms with each interaction.",
  },
  {
    icon: Zap,
    title: "Instant Immersion",
    description:
      "Dive deep into the spiral within seconds. Our advanced technology ensures seamless entry into altered states of consciousness.",
  },
  {
    icon: Shield,
    title: "Safe Journey",
    description:
      "Navigate the depths of perception with complete safety. Our guided experience ensures you return enriched and enlightened.",
  },
  {
    icon: Infinity,
    title: "Endless Exploration",
    description:
      "Discover infinite layers of reality. Each journey reveals new dimensions of understanding and self-awareness.",
  },
  {
    icon: Brain,
    title: "Mind Expansion",
    description:
      "Unlock dormant potential within your consciousness. Experience enhanced creativity, intuition, and cognitive flexibility.",
  },
  {
    icon: Sparkles,
    title: "Transformative Magic",
    description:
      "Witness the impossible become possible. Reality bends to reveal the magical nature of existence itself.",
  },
];
