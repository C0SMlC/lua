import { motion } from 'framer-motion'

const CatGuardLeft = ({ isAlert }) => (
  <motion.svg
    viewBox="0 0 120 150"
    className="cat-guard left"
    animate={isAlert ? { x: [0, -5, 5, -5, 0] } : {}}
    transition={{ duration: 0.3 }}
  >
    {/* Cat body */}
    <ellipse cx="60" cy="110" rx="35" ry="30" fill="#4a4a4a" />
    
    {/* Cat head */}
    <circle cx="60" cy="60" r="30" fill="#5a5a5a" />
    
    {/* Ears */}
    <polygon points="35,40 45,15 55,35" fill="#5a5a5a" />
    <polygon points="65,35 75,15 85,40" fill="#5a5a5a" />
    <polygon points="40,38 47,20 52,35" fill="#ffb6c1" />
    <polygon points="68,35 73,20 80,38" fill="#ffb6c1" />
    
    {/* Serious eyes */}
    <ellipse cx="48" cy="55" rx="8" ry="6" fill="#fff" />
    <ellipse cx="72" cy="55" rx="8" ry="6" fill="#fff" />
    <circle cx="50" cy="56" r="4" fill="#2d2d2d" />
    <circle cx="74" cy="56" r="4" fill="#2d2d2d" />
    
    {/* Angry eyebrows */}
    <line x1="38" y1="45" x2="55" y2="48" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
    <line x1="82" y1="45" x2="65" y2="48" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
    
    {/* Nose */}
    <polygon points="60,62 56,68 64,68" fill="#ffb6c1" />
    
    {/* Mouth - serious */}
    <path d="M52,72 Q60,70 68,72" stroke="#2d2d2d" strokeWidth="2" fill="none" />
    
    {/* Sunglasses */}
    <ellipse cx="48" cy="55" rx="10" ry="8" fill="none" stroke="#333" strokeWidth="2" />
    <ellipse cx="72" cy="55" rx="10" ry="8" fill="none" stroke="#333" strokeWidth="2" />
    
    {/* Gun */}
    <motion.g
      animate={isAlert ? { rotate: -15 } : { rotate: 0 }}
      style={{ transformOrigin: '85px 90px' }}
    >
      <rect x="85" y="85" width="30" height="12" rx="2" fill="#2d2d2d" />
      <rect x="80" y="82" width="12" height="18" rx="2" fill="#3d3d3d" />
      <rect x="110" y="88" width="8" height="6" fill="#1d1d1d" />
    </motion.g>
    
    {/* Tactical vest */}
    <path d="M30,95 L40,80 L80,80 L90,95" fill="#3d5c3d" />
    <rect x="45" y="85" width="8" height="8" fill="#2d4c2d" />
    <rect x="57" y="85" width="8" height="8" fill="#2d4c2d" />
    <rect x="69" y="85" width="8" height="8" fill="#2d4c2d" />
  </motion.svg>
)

export default CatGuardLeft
