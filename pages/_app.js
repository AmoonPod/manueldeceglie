import { motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
