import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllStars, getAllLines, constellations } from './starData'
import './NightSky.css'

// Constellation label positions
const constellationLabels = {
  'Orion': { x: 44, y: 50 },
  'Gemini': { x: 17, y: 36 },
  'Taurus': { x: 62, y: 25 },
  'Canis Major': { x: 40, y: 86 },
  'Canis Minor': { x: 18, y: 52 },
  'Pleiades': { x: 72, y: 26 },
  'Auriga': { x: 52, y: 10 },
}

// Messages for tappable stars
const starMessages = {
  'sirius': { 
    title: '✨ Sirius',
    message: 'The brightest star in the sky, standing bold and clear...\nJust like the confidence you carry yourself with.' 
  },
  'betelgeuse': { 
    title: '🔴 Betelgeuse',
    message: 'A red supergiant with a presence that can’t be ignored...\nYou have that same rare, magnetic energy.' 
  },
  'rigel': { 
    title: '💙 Rigel',
    message: 'A star known for its incredible strength and light...\nIt reminds me of how resilient and sweet you are.' 
  },
  'pollux': { 
    title: '🌟 Pollux',
    message: 'One of the Great Twins, steady and bright...\nI’m really glad I’m getting to know your world.' 
  },
}

const NightSky = ({ onLogout }) => {
  const [phase, setPhase] = useState('dark')
  const [clickPosition, setClickPosition] = useState({ x: 50, y: 50 })
  const [showLines, setShowLines] = useState(false)
  const [showMoonMessage, setShowMoonMessage] = useState(false)
  const [selectedStar, setSelectedStar] = useState(null)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const [showSecretMessage, setShowSecretMessage] = useState(false)
  const audioRef = useRef(null)

  const stars = useMemo(() => getAllStars(), [])
  const constellationLines = useMemo(() => getAllLines(), [])

  // Play ambient music function
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch((err) => {
        console.log('Audio play failed:', err)
      })
    }
  }

  // Show scroll hint after moon message
  useEffect(() => {
    if (showMoonMessage) {
      const timer = setTimeout(() => setShowScrollHint(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [showMoonMessage])

  const handleClick = (e) => {
    if (phase === 'dark') {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setClickPosition({ x, y })
      setPhase('revealing')
      
      // Play music on user interaction (this bypasses autoplay restrictions)
      playMusic()
      
      setTimeout(() => {
        setPhase('revealed')
        setTimeout(() => setShowLines(true), 500)
        setTimeout(() => setShowMoonMessage(true), 2000)
      }, 2000)
    }
  }

  const handleStarClick = (e, starId) => {
    e.stopPropagation()
    if (starMessages[starId] && phase === 'revealed') {
      setSelectedStar(starId)
    }
  }

  const handleMoonClick = (e) => {
    e.stopPropagation()
    if (phase === 'revealed') {
      setShowSecretMessage(true)
    }
  }

  return (
    <div className="night-sky-wrapper">
      {/* Ambient Music - soft ambient guitar */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/ambient_guitar.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        className="night-sky-container"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="darkness"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Tap hint */}
        {phase === 'dark' && (
          <motion.div
            className="tap-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="tap-icon">✦</span>
            <p>Tap to reveal the stars</p>
          </motion.div>
        )}

        {/* Sky reveal */}
        <AnimatePresence>
          {(phase === 'revealing' || phase === 'revealed') && (
            <motion.div
              className="sky-reveal"
              initial={{ clipPath: `circle(0% at ${clickPosition.x}% ${clickPosition.y}%)` }}
              animate={{ clipPath: `circle(150% at ${clickPosition.x}% ${clickPosition.y}%)` }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sky-gradient" />

              {/* Constellation lines */}
              <svg className="constellation-lines">
                {constellationLines.map((line, index) => (
                  <motion.line
                    key={`line-${index}`}
                    x1={`${line.from.x}%`}
                    y1={`${line.from.y}%`}
                    x2={`${line.to.x}%`}
                    y2={`${line.to.y}%`}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={showLines ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                ))}
              </svg>

              {/* Stars */}
              <div className="stars-layer">
                {stars.map((star, index) => {
                  const isClickable = starMessages[star.id]
                  return (
                    <motion.div
                      key={star.id}
                      className={`star ${star.size >= 3.5 ? 'bright' : star.size >= 2.5 ? 'medium' : ''} ${star.isSaturn ? 'saturn' : ''} ${isClickable ? 'clickable' : ''}`}
                      style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.isSaturn ? star.size + 2 : star.size,
                        height: star.isSaturn ? star.size + 2 : star.size,
                        backgroundColor: star.color || '#fff',
                        boxShadow: star.isSaturn
                          ? `0 0 ${star.size * 4}px ${star.color}, 0 0 ${star.size * 8}px ${star.color}`
                          : star.size >= 3.5 
                          ? `0 0 ${star.size * 3}px ${star.color || '#fff'}, 0 0 ${star.size * 6}px ${star.color || '#fff'}` 
                          : star.size >= 2.5
                          ? `0 0 ${star.size * 2}px ${star.color || '#fff'}`
                          : `0 0 2px #fff`,
                        cursor: isClickable ? 'pointer' : 'default',
                      }}
                      onClick={(e) => handleStarClick(e, star.id)}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: star.brightness || 0.8, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.02), duration: 0.4, ease: 'easeOut' }}
                      whileHover={isClickable ? { scale: 1.8, boxShadow: '0 0 20px #fff, 0 0 40px #fff' } : {}}
                    />
                  )
                })}
              </div>

              {/* Constellation labels */}
              <div className="constellation-labels">
                {constellations.map((constellation, index) => {
                  const labelPos = constellationLabels[constellation.name]
                  if (!labelPos) return null
                  return (
                    <motion.span
                      key={constellation.name}
                      className="constellation-label"
                      style={{ left: `${labelPos.x}%`, top: `${labelPos.y}%` }}
                      initial={{ opacity: 0 }}
                      animate={showLines ? { opacity: 0.5 } : { opacity: 0 }}
                      transition={{ delay: 1.5 + (index * 0.1), duration: 1 }}
                    >
                      {constellation.name}
                    </motion.span>
                  )
                })}
                <motion.span
                  className="constellation-label planet-label"
                  style={{ left: '17%', top: '22%' }}
                  initial={{ opacity: 0 }}
                  animate={showLines ? { opacity: 0.6 } : { opacity: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  ♄ Saturn
                </motion.span>
              </div>

              {/* Hidden clickable moon element */}
              <motion.div
                className="hidden-moon-clickable"
                style={{
                  position: 'absolute',
                  left: '80%',
                  top: '15%',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                //   backgroundColor: 'rgba(255, 100, 100, 0.5)', 
                //   border: '2px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={phase === 'revealed' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                onClick={handleMoonClick}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: 'rgba(255, 150, 150, 0.7)',
                  boxShadow: '0 0 20px rgba(255, 100, 100, 0.8)'
                }}
                whileTap={{ scale: 0.9 }}
              />

              {/* Shooting star with her name */}
              <motion.div
                className="shooting-star-container"
                initial={{ x: '-10%', y: '15%', opacity: 0 }}
                animate={{ x: '110%', y: '40%', opacity: [0, 1, 1, 1, 0] }}
                transition={{ delay: 2.5, duration: 2, ease: 'easeOut' }}
              >
                <div className="shooting-star" />
                <motion.span 
                  className="shooting-star-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{ delay: 2.5, duration: 2 }}
                >
                  {/* ✨ */}
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Date message */}
        <AnimatePresence>
          {phase === 'revealed' && (
            <motion.div
              className="sky-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.p
                className="date-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                The night sky of
              </motion.p>
              <motion.h1
                className="date-display"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                February 19, 2004
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The romantic moon message */}
        {/* <AnimatePresence>
          {showMoonMessage && (
            <motion.div
              className="moon-message"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                The moon was absent from the sky that night...
              </motion.p>
              <motion.p
                className="moon-message-highlight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                because one was being born on Earth 🌙
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* Star message modal */}
        <AnimatePresence>
          {selectedStar && (
            <motion.div
              className="star-message-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStar(null)}
            >
              <motion.div
                className="star-message-card"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{starMessages[selectedStar].title}</h3>
                <p>{starMessages[selectedStar].message}</p>
                <button onClick={() => setSelectedStar(null)}>✨</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secret moon message overlay */}
        <AnimatePresence>
          {showSecretMessage && (
            <motion.div
              className="star-message-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowSecretMessage(false)}
            >
              <motion.div
                className="star-message-card moon-secret-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>🌙 The Hidden Moon</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
                  I wanted you to see what the sky looked like the day you were born. 
                  The Moon was hidden that night, but I like to think it was just making room for a different kind of glow to begin.
                  You’re like a sunflower, you don't need the moon when you carry your own sun with you.
                </p>
                <button onClick={() => setShowSecretMessage(false)}>✨</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll hint */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              className="scroll-hint"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* <span>Scroll down</span> */}
              <motion.div
                className="scroll-arrow"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back button */}
        {phase === 'revealed' && (
          <motion.button
            className="back-btn"
            onClick={(e) => {
              e.stopPropagation()
              if (audioRef.current) audioRef.current.pause()
              onLogout()
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
        )}
      </motion.div>

      {/* Scrollable memories section */}
      <motion.div 
        className="memories-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollHint ? 1 : 0 }}
      >
        <div className="memories-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why You're Special ✨
          </motion.h2>
          
          <div className="reasons-grid">
            {[
                { emoji: '🌻', text: 'Your sunflower energy—bright, bold, and always chasing the light' },
                { emoji: '💭', text: 'How easy it is to just sit and talk with you' },
                { emoji: '😂', text: 'Your sense of humor (even when you’re being a little "angry")' },
                { emoji: '💪', text: 'The way you know exactly who you are' },
                { emoji: '✨', text: 'How you made a "basic" place feel like the best spot in town' },
                { emoji: '🧸', text: 'That caring side you try not to hide too well' }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="reason-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <span className="reason-emoji">{reason.emoji}</span>
                <p>{reason.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="final-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>Happy Birthday, Sanika 🎂</p>
            <p className="final-subtext">The Moon stepped aside that night, knowing a brighter light was about to be born.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default NightSky
