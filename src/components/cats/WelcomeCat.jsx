import { motion } from 'framer-motion'

const WelcomeCat = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="welcome-cat"
    initial={{ scale: 0, y: 50 }}
    animate={{ scale: 1, y: 0 }}
  >
    {/* Happy cat face */}
    <circle cx="50" cy="50" r="40" fill="#4ade80" />
    <circle cx="50" cy="55" r="30" fill="#ffd93d" />
    
    {/* Ears */}
    <polygon points="25,35 35,10 45,30" fill="#ffd93d" />
    <polygon points="55,30 65,10 75,35" fill="#ffd93d" />
    
    {/* Happy eyes */}
    <path d="M32,48 Q40,42 48,48" stroke="#2d2d2d" strokeWidth="3" fill="none" />
    <path d="M52,48 Q60,42 68,48" stroke="#2d2d2d" strokeWidth="3" fill="none" />
    
    {/* Blush */}
    <circle cx="30" cy="58" r="5" fill="#ffb6c1" opacity="0.6" />
    <circle cx="70" cy="58" r="5" fill="#ffb6c1" opacity="0.6" />
    
    {/* Smile */}
    <path d="M38,65 Q50,78 62,65" stroke="#2d2d2d" strokeWidth="3" fill="none" />
    
    {/* Crown */}
    <polygon points="35,15 40,5 50,12 60,5 65,15 50,20" fill="#ffd700" />
  </motion.svg>
)

export default WelcomeCat
