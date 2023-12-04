import { motion } from 'framer-motion'
export default function CountryButton({ onClick, style, children }) {
  return (
    <motion.button onClick={onClick} className={`btn bg-cyan-500 dark:bg-red-950 ${style} opacity-0`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
      {children}
    </motion.button>
  )
}
