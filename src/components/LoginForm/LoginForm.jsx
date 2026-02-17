import { motion, AnimatePresence } from 'framer-motion'
import { CatGuardLeft, CatGuardRight, DeniedCat } from '../cats'
import './LoginForm.css'

const LoginForm = ({ name, setName, status, isAlert, onSubmit }) => {
  return (
    <motion.div
      key="login"
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CatGuardLeft isAlert={isAlert} />
      
      <motion.div 
        className="login-box"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div 
          className="lock-icon"
          animate={isAlert ? { rotate: [0, -10, 10, -10, 0] } : {}}
        >
          🔒
        </motion.div>
        
        <h1>HALT!</h1>
        <p className="subtitle">State your name, human.</p>
        
        <form onSubmit={onSubmit}>
          <motion.input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            disabled={status === 'checking'}
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.button
            type="submit"
            disabled={!name.trim() || status === 'checking'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="request-access-btn"
          >
            {status === 'checking' ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ display: 'inline-block' }}
              >
                🔍
              </motion.span>
            ) : (
              'Request Access'
            )}
          </motion.button>
        </form>
        
        <AnimatePresence>
          {status === 'denied' && (
            <motion.div
              className="denied-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DeniedCat />
              <p>ACCESS DENIED!</p>
              <span>The cats don't know you! 🚫</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <CatGuardRight isAlert={isAlert} />
    </motion.div>
  )
}

export default LoginForm
