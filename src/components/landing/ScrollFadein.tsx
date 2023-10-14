"use client";

import { motion, useScroll, useInView } from "framer-motion"

/* function Component() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{ scaleX: scrollYProgress }} />
  )
} */

export const ScrollFadeIn = () => {
  return (
    <motion.div
    className="text-black text-bold"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ amount: 'all' }}
    transition={{ duration: 1 }}
  >
    Intersection Observer
  </motion.div>
    
    
    
    
    

  );
}


















/* export const ScrollFadeIn = () => {
  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideIn");
      } else {
        entry.target.classList.remove("animate-slideIn");
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach((target) => {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
};

 */