import { motion } from 'framer-motion'
import { WelcomeCat } from '../cats'
import './WelcomeScreen.css'

const WelcomeScreen = ({ onLogout }) => {
  return (
    <motion.div
      key="welcome"
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <WelcomeCat />
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome, Lua! 👑
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        The cat guards bow to you
      </motion.p>
      
      <motion.button
        className="logout-btn"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
      >
        Logout
      </motion.button>
    </motion.div>
  )
}

export default WelcomeScreen
