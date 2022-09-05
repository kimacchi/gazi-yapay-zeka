import styles from "./styles.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/actions";
import { useRouter } from 'next/router';
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Hamburger from "hamburger-react";
import Insta from "../../public/instagram.svg"
import Logout from "../../public/logout.svg"
import Twitter from "../../public/twitter.svg"
import Linkedin from "../../public/linkedin.svg"
import Link from "next/link"


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
  const currentUser = useSelector((state)=>state.currentUser);
  const dispatch = useDispatch();
  const { setCurrentUser } = bindActionCreators(actionCreators, dispatch);

  const [open, cycleOpen] = useCycle(false, true);

  const router = useRouter();



  const links = [
    { name: "Anasayfa", to: "/", id: 1 },
    { name: "Haberler", to: "/haberler", id: 2 },
    { name: "Yönetim Sistemi", to: `${currentUser.userId ? "/events" : "/login"}`, id: 3 },
  ];
  
  const adminLinks = [
    { name: "Anasayfa", to: "/", id: 1 },
    { name: "Haberler", to: "/haberler", id: 2 },
    { name: "Yönetim Sistemi", to: "/login", id: 3 },
    { name: "Admin", to: "/admin", id: 4 },
    { name: "Yeni Haber", to: "/new-post", id: 5 },
  
  ]

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
                    
                    {
                      currentUser.userType === "admin" ?
                      <div> 
                        {adminLinks.map(({ name, to, id }) => (
                          <motion.p
                              key={id}
                              onClick={() => router.push(to)}
                              whileHover={{ scale: 1.1 }}
                              variants={itemVariants}
                          >
                          {name}
                          </motion.p>
                        ))}
                      </div>
                      :
                      <div>
                        {links.map(({ name, to, id }) => (
                          <motion.p
                              key={id}
                              onClick={() => router.push(to)}
                              whileHover={{ scale: 1.1 }}
                              variants={itemVariants}
                          >
                          {name}
                          </motion.p>
                        ))}
                      </div>
                    }
                </div>
                <div className={styles.wrapper_2}>
                  <motion.div
                    whileHover={{scale:1.1}}
                    className={styles.logout}
                    onClick={() => {
                      setCurrentUser({});
                      router.push("/");
                    }}
                  >
                    <Logout />
                  </motion.div>
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
