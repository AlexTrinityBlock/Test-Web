import React from 'react';
import {
  profile,
  highlights,
  skills,
  learning,
  certifications,
  experiences,
  education,
  projects,
  research,
  blogs,
  callToAction,
} from './data';

const ActionButton = ({ href, label, variant = 'primary' }) => {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950';
  const styles =
    variant === 'primary'
      ? 'bg-brand-500 text-white hover:bg-brand-400 focus:ring-brand-300'
      : 'bg-white/10 text-slate-100 ring-1 ring-white/20 hover:bg-white/15 focus:ring-white/40';

  return (
    <a
      className={`${base} ${styles}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
};

const Section = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="relative z-10 py-16 md:py-24">
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-lg text-slate-300">{description}</p>}
      </div>
      <div className="mt-10 grid gap-8 md:mt-14">{children}</div>
    </div>
  </section>
);

const Timeline = ({ items }) => (
  <ol className="relative border-l border-white/10 pl-8">
    {items.map((item) => (
      <li key={`${item.organization}-${item.title}`} className="mb-12 last:mb-0">
        <div className="absolute -left-[0.43rem] mt-1 h-3 w-3 rounded-full border border-brand-200 bg-brand-500/80 shadow-glow" />
        <p className="text-sm uppercase tracking-[0.2em] text-brand-200">{item.period}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-base font-medium text-brand-100">{item.organization}</p>
        <p className="mt-3 text-slate-300">{item.description}</p>
      </li>
    ))}
  </ol>
);

const TagList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="tag">
        {item}
      </span>
    ))}
  </div>
);

const SkillGroup = ({ data }) => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {data.map((group) => (
      <div key={group.category} className="card">
        <h3 className="text-lg font-semibold text-white">{group.category}</h3>
        <p className="mt-2 text-sm text-slate-300">常用工具與語言</p>
        <div className="mt-4">
          <TagList items={group.items} />
        </div>
      </div>
    ))}
  </div>
);

const LearningGroup = ({ data }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {data.map((group) => (
      <div key={group.category} className="card border-dashed">
        <h3 className="text-lg font-semibold text-white">{group.category}</h3>
        <p className="mt-2 text-sm text-slate-300">持續精進與實作</p>
        <div className="mt-4">
          <TagList items={group.items} />
        </div>
      </div>
    ))}
  </div>
);

const BlogGrid = ({ articles }) => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {articles.map((article) => (
      <article key={article.url} className="card">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
          {article.platform}
        </p>
        <h3 className="mt-3 text-lg font-semibold text-white">{article.title}</h3>
        <p className="mt-4 text-sm text-slate-300">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
        >
          閱讀文章
          <span aria-hidden="true">-&gt;</span>
        </a>
      </article>
    ))}
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 translate-y-1/3 rounded-full bg-brand-400/20 blur-3xl" />

      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-20 pt-12 md:pt-20">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-100 ring-1 ring-brand-400/40">
            {profile.role}
          </span>
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-lg text-brand-100 md:text-xl">{profile.currentOrg}</p>
          <p className="max-w-3xl text-base text-slate-300 md:text-lg">{profile.summary}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
            {highlights.map((item) => (
              <span key={item} className="tag">
                <span className="h-2 w-2 rounded-full bg-brand-300" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {callToAction.map((action) => (
              <ActionButton
                key={action.href}
                href={action.href}
                label={action.label}
                variant={action.variant}
              />
            ))}
          </div>
        </div>
      </header>

      <main>
        <Section
          id="skills"
          eyebrow="Skills"
          title="核心技術"
          description="涵蓋雲端架構設計、資安維運、容器平台與自動化部署，維持產品穩定擴充。"
        >
          <SkillGroup data={skills} />
        </Section>

        <Section
          id="learning"
          eyebrow="Learning"
          title="正在精進"
          description="持續投入進階雲端與容器化技術，確保解決方案符合最新趨勢。"
        >
          <LearningGroup data={learning} />
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="經歷與研究"
          description="結合產業資安需求與學術研究，落實各項雲端與容器治理專案。"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-start">
            <div className="card">
              <h3 className="text-xl font-semibold text-white">專業經歷</h3>
              <p className="mt-3 text-sm text-slate-300">
                聚焦資安事件應變、容器平台治理與跨雲策略顧問。
              </p>
              <div className="mt-8">
                <Timeline items={experiences} />
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-white">學歷背景</h3>
              <div className="mt-6 space-y-8">
                {education.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-200">{item.period}</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-base font-medium text-brand-100">{item.organization}</p>
                    <p className="mt-3 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="certifications"
          eyebrow="Certifications"
          title="專業證照"
          description="透過國際認證確保技術持續進化，涵蓋雲端與容器治理領域。"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.name} className="card">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
                  {cert.category} · {cert.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{cert.name}</h3>
                <p className="text-sm text-slate-300">{cert.issuer}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
                >
                  查看證書
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="代表作品"
          description="展示容器化、雲端部署與資安策略整合能力。"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
                >
                  查看專案介紹
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </article>
            ))}
            <article className="card">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">Research</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{research.title}</h3>
              <p className="mt-4 text-slate-300">{research.description}</p>
              <a
                href={research.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
              >
                閱讀論文摘要
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          </div>
        </Section>

        <Section
          id="blog"
          eyebrow="Blog"
          title="技術寫作"
          description="透過部落格與技術文章紀錄雲端實務與開發心得，分享最佳實踐。"
        >
          <BlogGrid articles={blogs} />
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/40 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {profile.name}. 專注於安全、可靠的雲端與容器化解決方案。
          </p>
          <p>Made with React + Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;