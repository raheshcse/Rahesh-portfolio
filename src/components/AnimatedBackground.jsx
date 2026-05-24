import { motion } from 'framer-motion'

function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl sm:h-96 sm:w-96"
        animate={{ x: [0, 80, 20, 0], y: [0, 40, 110, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-8rem] top-1/4 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[30rem] sm:w-[30rem]"
        animate={{ x: [0, -90, -40, 0], y: [0, 90, 10, 0], scale: [1, 0.9, 1.12, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl sm:h-[32rem] sm:w-[32rem]"
        animate={{ x: [0, 60, -70, 0], y: [0, -70, -30, 0], scale: [1, 1.08, 0.92, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_32%),linear-gradient(120deg,_rgba(8,12,24,0.78),_rgba(4,7,13,0.95))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:72px_72px] opacity-30" />
    </div>
  )
}

export default AnimatedBackground
