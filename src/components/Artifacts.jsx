import { useState } from 'react';
import { FileText, Github, Download } from 'lucide-react';

const artifacts = [
  {
    key: 'brief-roadmap',
    title: 'One‑page Product Brief & 6‑month Roadmap',
    hy: 'Ապրանքի կարճ նկարագիր և 6‑ամսյա ճանապարհային քարտեզ',
    content: `Vision: Open, free, practice‑first full‑stack education platform with auto‑grading, code playgrounds, mentorship, and verifiable certificates.\n\nMVP Milestones (6 months):\nM1 (Weeks 1–4): Branding, IA, initial curriculum skeleton (Frontend JS path), auth (email + OAuth), profiles, progress tracking.\nM2 (Weeks 5–8): Code playground (JS/Python), auto‑grader service (Node/Python), basic quizzes, first 20 lessons.\nM3 (Weeks 9–12): Projects repo integration (GitHub), certificates (PDF + hash), community (discussions), moderation.\nM4 (Weeks 13–16): Mentorship flow + office hours, accessibility audit WCAG AA, localization (HY/EN), SEO & analytics.\nM5 (Weeks 17–20): Add Backend (Node) path, DevOps basics, CI for content (MDX), CDN/caching.\nM6 (Weeks 21–24): Beta scaling (K8s), job board, cohort analytics, referral program.`,
  },
  {
    key: 'sitemap',
    title: 'Full Sitemap',
    hy: 'Լրիվ կայք քարտեզ',
    content: `Home, Courses, Paths, Course Detail, Lesson, Playground, Projects, Community, Mentors, Mentor Apply, Schedule, Profile, Settings, Certificates, Admin, CMS, API Docs, Legal (ToS, Privacy, License), Careers, About, FAQ, Search, Job Board.`,
  },
  {
    key: 'example-lesson',
    title: 'Example Lesson: JavaScript Fundamentals',
    hy: 'Օրինակ դաս՝ JavaScript հիմունքներ',
    content: `Objectives: variables, types, expressions. Prereq: basic computer literacy. Theory: JS is dynamically typed; use let/const; primitives vs objects. Examples: const x=5; let y='hi'; console.log(typeof x). Exercises: (1) declare variables; (2) write a function add(a,b); (3) array map to double numbers. Mini‑project: CLI that sums argv numbers. Quiz: 5 auto‑graded MCQs. Rubric (5‑point): correctness, readability, tests passing, edge cases, documentation.`,
  },
  {
    key: 'tech-arch',
    title: 'Technical Architecture & Deployment',
    hy: 'Տեխնիկական ճարտարապետություն և տեղակայում',
    content: `Frontend: Next.js/React or SvelteKit, i18n, MDX content. Backend: Node (Nest/Fastify) or FastAPI; services: auth, content, grading, execution sandbox. Data: Postgres, Redis queues, S3 for assets. Infra: Docker, K8s, autoscaling, CDN. Security: sandboxing, rate limiting, CSRF/XSS protections.`,
  },
];

function ArtifactCard({ title, hy, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-xl bg-white overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-neutral-50">
        <div>
          <div className="font-semibold text-neutral-900">{hy} / {title}</div>
          <div className="text-sm text-neutral-600">Click to {open ? 'collapse' : 'expand'}</div>
        </div>
        <FileText className={`transition-transform ${open ? 'rotate-90' : ''}`} size={18} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-neutral-800 whitespace-pre-line leading-relaxed">
          {content}
          <div className="mt-4 flex gap-3">
            <a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="#">
              <Download size={16} />
              <span>Download Markdown</span>
            </a>
            <a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="#">
              <Github size={16} />
              <span>Open in GitHub</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Artifacts() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Արտեֆակտներ / Product Spec Artifacts</h2>
        <p className="mt-2 text-neutral-700 max-w-3xl">Explore the MVP brief, sitemap, sample lesson, and technical architecture. Full repository templates and MD files can be exported from here.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {artifacts.map(a => (
          <ArtifactCard key={a.key} title={a.title} hy={a.hy} content={a.content} />
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-neutral-200 p-5 bg-neutral-50">
        <h3 className="font-semibold text-neutral-900">Բովանդակության կառուցվածք / Lesson Structure</h3>
        <ul className="mt-2 text-sm text-neutral-800 list-disc pl-5 space-y-1">
          <li>Learning objectives, prerequisites</li>
          <li>Concise theory + code examples</li>
          <li>3 practical exercises + 1 mini‑project</li>
          <li>Auto‑graded quiz + rubric</li>
          <li>Recommended reading/videos</li>
        </ul>
      </div>
    </div>
  );
}
