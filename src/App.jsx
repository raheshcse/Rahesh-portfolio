import { motion } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import GlassCard from './components/GlassCard'
import Section from './components/Section'
import { projectCategories, skills, stackBadges } from './data/portfolio'

const navLinks = ['About', 'Skills', 'Projects', 'Contact']
const portfolioStats = [
  { value: '8+', label: 'Projects Built' },
  { value: '3', label: 'AI Agent Systems' },
  { value: '3', label: 'Full-Stack Applications' },
  { value: '2', label: 'Mobile Applications' },
]
const profileTechnologies = ['C#', '.NET', 'React', 'SQL Server', 'Python', 'FastAPI', 'Azure', 'LangGraph']

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-slate-100">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-50 mb-14 rounded-[1.5rem] border border-white/10 bg-slate-950/60 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:rounded-full sm:px-6">
          <nav className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#home"
              className="text-center text-xs font-semibold tracking-[0.24em] text-cyan-200 sm:text-left sm:text-sm sm:tracking-[0.28em]"
            >
              RAHESH SARAVANAN
            </a>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm md:gap-6">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-full px-3 py-2 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section id="home" className="grid min-h-[78vh] items-center gap-10 pb-20 pt-4 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" animate="visible" variants={container} className="max-w-3xl">
            <motion.p variants={fadeUp} className="mb-5 text-sm font-medium uppercase tracking-[0.34em] text-cyan-300">
              AI systems. Secure products. Useful software.
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Rahesh Saravanan
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              className="mt-4 bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-emerald-200 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl"
            >
              AI & Full Stack Engineer
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Building intelligent, secure, and scalable applications using AI, full stack
              technologies, and cybersecurity principles.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/raheshcse?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-center text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/[0.12]"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <GlassCard className="p-5 sm:p-7">
              <div className="rounded-2xl border border-cyan-300/15 bg-slate-950/80 p-5 shadow-inner shadow-cyan-500/5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <pre className="overflow-hidden text-sm leading-7 text-slate-300 sm:text-base">
                  <code>{`const rahesh = {
  focus: ['AI Agents', 'Cybersecurity'],
  stack: ['React', 'C#', 'SQL Server'],
  mission: 'ship secure intelligent apps'
}`}</code>
                </pre>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['4 Featured Projects', '8 Core Technologies', 'Secure by Design', 'Recruiter Friendly'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-sm font-semibold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <Section id="about" eyebrow="About & Experience" title="AI, full-stack, and cybersecurity focus">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <motion.div variants={fadeUp}>
              <GlassCard className="h-full p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Professional Summary</p>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">AI & Full-Stack Engineer</h3>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  I build intelligent, secure, and scalable applications with a practical engineering mindset.
                  My work connects AI agents, modern frontend experiences, backend systems, databases, and
                  cybersecurity-aware design into polished software that feels reliable, useful, and ready for real users.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  I focus on clear product value, maintainable implementation, and recruiter-friendly project delivery
                  across AI systems, full-stack applications, and mobile experiences.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['AI Engineering', 'Full Stack', 'Cybersecurity', 'Product Delivery'].map((focus) => (
                    <span key={focus} className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.08] px-4 py-2 text-sm font-semibold text-cyan-100">
                      {focus}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GlassCard className="h-full p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Portfolio Highlights</p>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">Built across product domains</h3>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {portfolioStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="mt-2 text-sm font-semibold text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-bold text-white">Technology Summary</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profileTechnologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-white/10">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="A practical stack for intelligent secure apps">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.map((skill) => (
              <motion.div key={skill.title} variants={fadeUp}>
                <GlassCard className="h-full p-5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-black text-cyan-200">
                    {skill.initial}
                  </div>
                  <h3 className="text-lg font-bold text-white">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{skill.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stackBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl">
                {badge}
              </span>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected builds with product value">
          <div className="space-y-12">
            {projectCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-5 text-xl font-black text-white sm:text-2xl">{category.title}</h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={container}
                  className="grid gap-5 md:grid-cols-2"
                >
                  {category.projects.map((project) => (
                    <motion.article key={project.title} variants={fadeUp}>
                      <GlassCard className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35">
                        <a
                          href={project.url || 'https://github.com/raheshcse?tab=repositories'}
                          target="_blank"
                          rel="noreferrer"
                          className="block h-full p-6"
                          aria-label={`Open ${project.title} repository on GitHub`}
                        >
                        <div className={`mb-6 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-bold text-cyan-100 transition group-hover:border-cyan-200/50 group-hover:text-white">
                            GitHub
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        </a>
                      </GlassCard>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's build something useful">
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                I am open to developer roles, internships, collaborations, and project conversations
                around AI agents, secure full-stack systems, and polished user experiences.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5" href="mailto:raheshsaravanan@gmail.com">
                  Email Me
                </a>
                <a className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/60" href="https://www.linkedin.com/in/raheshsaravanan/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/60" href="https://github.com/raheshcse?tab=repositories" target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </div>
            </div>
          </GlassCard>
        </Section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
          Built with React, Vite, Tailwind CSS, and Framer Motion.
        </footer>
      </div>
    </main>
  )
}

export default App
