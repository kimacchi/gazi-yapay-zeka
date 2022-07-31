import styles from "./styles.module.scss";
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Hamburger from "hamburger-react";
import Insta from "../../public/instagram.svg"
import Twitter from "../../public/twitter.svg"
import Linkedin from "../../public/linkedin.svg"
import Link from "next/link"

const links = [
  { name: "Anasayfa", to: "#", id: 1 },
  { name: "Haberler", to: "#", id: 2 },
  { name: "Yönetim Sistemi", to: "#", id: 3 },
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  }
};


export default function App() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main className={styles.main}>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.9, duration: 0.3 }
            }}
            className={styles.aside}
          >
            <motion.div
              className={styles.container}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
                <div className={styles.normal_links}>
                    {links.map(({ name, to, id }) => (
                        <motion.a
                            key={id}
                            href={to}
                            whileHover={{ scale: 1.1 }}
                            variants={itemVariants}
                        >
                        {name}
                        </motion.a>
                    ))}
                </div>
                <div
                    className={styles.social_links}
                >
                    <Link href="https://www.instagram.com/gaziyapayzeka/">
                        <motion.a 
                            target={"_blank"}
                            whileHover={{ scale: 1.1 }}
                            variants={itemVariants}
                        >
                                
                            <Insta />
                        </motion.a>
                    </Link>
                    <Link href="https://www.linkedin.com/company/gazi-%C3%BCniversitesi-yapay-zeka-toplulu%C4%9Fu/?originalSubdomain=tr">
                        <motion.a 
                            target={"_blank"}
                            whileHover={{ scale: 1.1 }}
                            variants={itemVariants}
                        >
                            <Linkedin />
                        </motion.a>
                    </Link>
                    <Link href="">
                        <motion.a 
                            target={"_blank"}
                            whileHover={{ scale: 1.1 }}
                            variants={itemVariants}
                        >
                            <Twitter />
                        </motion.a>
                    </Link>
                </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className={styles.btn_container}>
        <Hamburger onToggle={cycleOpen} color="white" />
      </div>
    </main>
  );
}
