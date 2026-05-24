function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-[1.75rem] border border-white/10 bg-white/[0.07] shadow-2xl shadow-slate-950/40 backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard
