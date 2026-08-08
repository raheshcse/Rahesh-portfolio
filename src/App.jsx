import { motion } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import GlassCard from './components/GlassCard'
import Section from './components/Section'
import {
  certifications,
  education,
  experience,
  profileHighlights,
  projectCategories,
  skills,
  stackBadges,
} from './data/portfolio'

const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']
const profileTechnologies = ['Python', 'C#', '.NET', 'React', 'FastAPI', 'SQL', 'LangGraph', 'Azure']

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

function SkillCategory({ category }) {
  return (
    <motion.div variants={fadeUp}>
      <GlassCard className="h-full p-5 sm:p-6">
        <h3 className="text-lg font-black text-white">{category.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-cyan-100 ring-1 ring-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article variants={fadeUp}>
      <GlassCard className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35">
        <div className="h-full p-6">
          <div className={`mb-5 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
          <div className="flex items-start justify-between gap-3">
            <h3 className="break-words text-xl font-bold leading-snug text-white sm:text-2xl">{project.title}</h3>
            <a
              href={project.url || 'https://github.com/raheshcse?tab=repositories'}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-100 transition group-hover:border-cyan-200/50 group-hover:text-white"
              aria-label={`Open ${project.title} repository on GitHub`}
            >
              GitHub
            </a>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-cyan-100 ring-1 ring-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}

function ProjectCategory({ category }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
        <h3 className="text-xl font-black text-white sm:text-2xl">{category.title}</h3>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="grid gap-5 md:grid-cols-2"
      >
        {category.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  )
}

function App() {
  const projectCount = projectCategories.reduce((total, category) => total + category.projects.length, 0)

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
              AI & Full-Stack Engineer
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              AI & Full-Stack Engineer building intelligent software systems across AI agents, data pipelines,
              backend APIs, modern web applications, and mobile platforms.
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
  focus: ['AI Agents', 'Full-Stack'],
  stack: ['Python', 'C#', 'React'],
  mission: 'build end-to-end intelligent systems'
}`}</code>
                </pre>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  `${projectCount} Projects`,
                  `${projectCategories.length} Categories`,
                  'Full Lifecycle Delivery',
                  'Recruiter Ready',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-sm font-semibold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <Section id="about" eyebrow="About" title="AI, full-stack, and product engineering across the full lifecycle">
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
                  AI & Full-Stack Engineer building intelligent software systems across AI agents, data pipelines,
                  backend APIs, modern web applications, and mobile platforms. I work across the full solution lifecycle —
                  from data ingestion and AI workflow orchestration to API development, dashboards, testing, deployment,
                  and responsible AI design.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  My projects include multi-agent systems, RAG knowledge platforms, machine-learning pipelines,
                  observability tools, enterprise applications, and mobile products.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['AI Engineering', 'Full-Stack', 'ML & Data', 'Responsible AI'].map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.08] px-4 py-2 text-sm font-semibold text-cyan-100"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GlassCard className="h-full p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Engineering Highlights</p>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">Built across product domains</h3>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {profileHighlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-bold text-white">Core Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profileTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-white/10"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Practical engineering across AI and product delivery">
          <div className="space-y-5">
            {experience.map((item) => (
              <GlassCard key={`${item.role}-${item.company}`} className="p-5 sm:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.focus.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="A structured stack for AI, data, and product delivery">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid gap-4 lg:grid-cols-2"
          >
            {skills.map((category) => (
              <SkillCategory key={category.title} category={category} />
            ))}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stackBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl"
              >
                {badge}
              </span>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected builds with product and technical depth">
          <div className="space-y-12">
            {projectCategories.map((category) => (
              <ProjectCategory key={category.title} category={category} />
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education & Credentials" title="Technical foundations and continuing learning">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Education</p>
              <div className="mt-5 space-y-5">
                {education.map((item) => (
                  <div key={`${item.title}-${item.school}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-black text-white">{item.title}</h3>
                        <p className="mt-1 text-sm font-semibold text-cyan-200">{item.subtitle}</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-slate-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{item.school}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Certifications</p>
              <div className="mt-5 space-y-4">
                {certifications.map((item) => (
                  <div key={`${item.name}-${item.issuer}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="text-lg font-black text-white">{item.name}</h3>
                    <p className="mt-2 text-sm text-slate-300">{item.issuer}</p>
                    <span className="mt-3 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] px-3 py-1 text-xs font-semibold text-cyan-100">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's build something useful together">
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                I am open to developer roles, internships, collaborations, and project conversations around AI agents,
                secure full-stack systems, machine learning pipelines, and polished user experiences.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
                  href="mailto:raheshsaravanan@gmail.com"
                >
                  Email Me
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/60"
                  href="https://www.linkedin.com/in/raheshsaravanan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/60"
                  href="https://github.com/raheshcse?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
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
