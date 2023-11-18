"use client";

// import { motion, useScroll, useInView } from "framer-motion"

// export const ScrollFadeIn = () => {
//   return (
//     <motion.div
//     className=""
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ amount: 'all' }}
//     transition={{ duration: 1 }}
//   >
    
//   </motion.div>
//   );
// }


// import { motion } from "framer-motion";
// export const ScrollFadeIn = () =>  {
//   return (
//     <motion.div
//       style={{
//         width: 100,
//         height:100,
//         backgroundColor: "red"
//       }}
//       animate={{ x: 100 }} 
//     />
//   );
// }


import { motion, useAnimation, useInView} from "framer-motion";

export const ScrollFadeIn = () =>  {
  return(
    <motion.div
      animate = {{x: 500}} //←コレ
    >
      右にスライドイン
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