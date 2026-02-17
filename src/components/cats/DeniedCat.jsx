import { motion } from 'framer-motion'

const DeniedCat = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="denied-cat"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    exit={{ scale: 0, rotate: 180 }}
  >
    {/* Angry cat face */}
    <circle cx="50" cy="50" r="40" fill="#ff6b6b" />
    <circle cx="50" cy="55" r="30" fill="#5a5a5a" />
    
    {/* Ears */}
    <polygon points="25,35 35,10 45,30" fill="#5a5a5a" />
    <polygon points="55,30 65,10 75,35" fill="#5a5a5a" />
    
    {/* X eyes */}
    <text x="38" y="55" fontSize="16" fill="#fff" fontWeight="bold">✖</text>
    <text x="55" y="55" fontSize="16" fill="#fff" fontWeight="bold">✖</text>
    
    {/* Hissing mouth */}
    <path d="M35,68 Q50,80 65,68" stroke="#fff" strokeWidth="3" fill="none" />
    <text x="50" y="75" textAnchor="middle" fontSize="8" fill="#fff">HISSS!</text>
  </motion.svg>
)

export default DeniedCat
