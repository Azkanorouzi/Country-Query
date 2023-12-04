import { motion } from 'framer-motion'
export default function Title() {
  return (
    <div className=" z-50">
      <motion.h1 className="text-2xl lg:text-7xl pt-16 main-title" initial={{ letterSpacing: '10vw' }} animate={{ letterSpacing: '2px' }} transition={{ type: "spring" }}>
        Start searching for a country{' '}
      </motion.h1>
    </div>
  )
}
