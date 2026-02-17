import { motion } from 'framer-motion'

/**
 * Moon component for Feb 19, 2004
 * Phase: Waning Gibbous (~3 days past full moon)
 * 82% illuminated - ALMOST FULL!
 * LEFT side illuminated, only thin shadow on RIGHT edge
 */
const Moon = ({ x = 80, y = 40, size = 45 }) => {
  return (
    <motion.div
      className="moon"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        zIndex: 3,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{ filter: 'drop-shadow(0 0 25px rgba(255, 255, 220, 0.7))' }}
      >
        {/* Moon base (full circle) - bright! */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="#fffde8"
        />
        
        {/* Moon texture/craters (subtle) */}
        <circle cx="30" cy="35" r="8" fill="rgba(200, 195, 180, 0.25)" />
        <circle cx="55" cy="45" r="12" fill="rgba(200, 195, 180, 0.15)" />
        <circle cx="40" cy="65" r="10" fill="rgba(200, 195, 180, 0.2)" />
        <circle cx="65" cy="30" r="6" fill="rgba(200, 195, 180, 0.15)" />
        <circle cx="50" cy="75" r="7" fill="rgba(200, 195, 180, 0.15)" />
        <circle cx="25" cy="55" r="5" fill="rgba(200, 195, 180, 0.1)" />
        
        {/* 
          Waning Gibbous 82% lit = only 18% dark
          THIN crescent shadow on RIGHT edge only
          Using a very thin elliptical arc that barely curves in
        */}
        <path
          d={`
            M 50,2
            A 48,48 0 0,1 50,98
            A 40,48 0 0,0 50,2
          `}
          fill="rgba(10, 15, 30, 0.93)"
        />
        
        {/* Bright glow - almost full moon is very bright */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(255, 255, 220, 0.4)"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  )
}

export default Moon