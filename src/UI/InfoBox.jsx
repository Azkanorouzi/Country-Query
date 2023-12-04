import { motion } from 'framer-motion'
export default function InfoBox({ children, title, bgColor, textColor }) {
  return (
    <motion.div
      className={`p-5 rounded-lg flex justify-between ${bgColor} ${textColor} bg-opacity-50 `}
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
      transition={{ ease: 'linear' }}
      viewport={{ once: true }}
    >
      {title && <strong> {title}: </strong>}
      {children}
    </motion.div>
  )
}
