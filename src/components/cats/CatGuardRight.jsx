import { motion } from 'framer-motion'

const CatGuardRight = ({ isAlert }) => (
  <motion.svg
    viewBox="0 0 120 150"
    className="cat-guard right"
    animate={isAlert ? { x: [0, 5, -5, 5, 0] } : {}}
    transition={{ duration: 0.3 }}
  >
    {/* Cat body */}
    <ellipse cx="60" cy="110" rx="35" ry="30" fill="#6d6d6d" />
    
    {/* Cat head */}
    <circle cx="60" cy="60" r="30" fill="#7d7d7d" />
    
    {/* Ears */}
    <polygon points="35,40 45,15 55,35" fill="#7d7d7d" />
    <polygon points="65,35 75,15 85,40" fill="#7d7d7d" />
    <polygon points="40,38 47,20 52,35" fill="#ffb6c1" />
    <polygon points="68,35 73,20 80,38" fill="#ffb6c1" />
    
    {/* Serious eyes with scar */}
    <ellipse cx="48" cy="55" rx="8" ry="6" fill="#fff" />
    <ellipse cx="72" cy="55" rx="8" ry="6" fill="#fff" />
    <circle cx="46" cy="56" r="4" fill="#2d2d2d" />
    <circle cx="70" cy="56" r="4" fill="#2d2d2d" />
    
    {/* Scar over eye */}
    <line x1="65" y1="45" x2="78" y2="65" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
    
    {/* Angry eyebrows */}
    <line x1="38" y1="48" x2="55" y2="45" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
    <line x1="82" y1="48" x2="65" y2="45" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
    
    {/* Nose */}
    <polygon points="60,62 56,68 64,68" fill="#ffb6c1" />
    
    {/* Mouth - grumpy */}
    <path d="M52,74 Q60,68 68,74" stroke="#2d2d2d" strokeWidth="2" fill="none" />
    
    {/* Dark glasses */}
    <rect x="38" y="48" rx="3" width="22" height="14" fill="rgba(0,0,0,0.7)" />
    <rect x="62" y="48" rx="3" width="22" height="14" fill="rgba(0,0,0,0.7)" />
    <line x1="60" y1="55" x2="62" y2="55" stroke="#333" strokeWidth="3" />
    
    {/* Gun pointing left */}
    <motion.g
      animate={isAlert ? { rotate: 15 } : { rotate: 0 }}
      style={{ transformOrigin: '35px 90px' }}
    >
      <rect x="5" y="85" width="30" height="12" rx="2" fill="#2d2d2d" />
      <rect x="28" y="82" width="12" height="18" rx="2" fill="#3d3d3d" />
      <rect x="2" y="88" width="8" height="6" fill="#1d1d1d" />
    </motion.g>
    
    {/* Tactical vest with badge */}
    <path d="M30,95 L40,80 L80,80 L90,95" fill="#3d5c3d" />
    <circle cx="60" cy="90" r="6" fill="#ffd700" />
    <text x="60" y="93" textAnchor="middle" fontSize="6" fill="#2d2d2d">★</text>
  </motion.svg>
)

export default CatGuardRight
