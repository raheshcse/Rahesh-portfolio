import { motion } from 'framer-motion'

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  )
}

export default Section
