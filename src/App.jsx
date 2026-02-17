import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LoginForm, NightSky } from './components'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('idle') // idle, checking, denied, granted
  const [isAlert, setIsAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('checking')
    setIsAlert(true)
    
    setTimeout(() => {
      if (name.toLowerCase().trim() === 'lua') {
        setStatus('granted')
      } else {
        setStatus('denied')
        setTimeout(() => {
          setStatus('idle')
          setIsAlert(false)
        }, 2000)
      }
    }, 1000)
  }

  const handleLogout = () => {
    setStatus('idle')
    setName('')
    setIsAlert(false)
  }

  return (
    <div className="app">
      <div className="stars" />
      
      <AnimatePresence mode="wait">
        {status === 'granted' ? (
          <NightSky onLogout={handleLogout} />
        ) : (
          <LoginForm
            name={name}
            setName={setName}
            status={status}
            isAlert={isAlert}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
      
      {status !== 'granted' && (
        <p className="hint">psst... the password might be a name 🐱</p>
      )}
    </div>
  )
}

export default App
