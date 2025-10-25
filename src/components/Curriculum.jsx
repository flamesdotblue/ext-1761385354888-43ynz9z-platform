import { BookOpen, Database, Server, Code, Smartphone, Monitor, Brain, Cpu, Cloud, FlaskConical, ShieldCheck } from 'lucide-react';

const areas = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular'],
    icon: Code,
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python (Django/Flask)', 'Java (Spring)', 'C#', 'Go', 'PHP', 'Rust'],
    icon: Server,
  },
  {
    title: 'Mobile',
    items: ['Android (Java/Kotlin)', 'iOS (Swift)', 'Flutter/Dart', 'React Native'],
    icon: Smartphone,
  },
  {
    title: 'Desktop',
    items: ['Electron', 'C#', 'C++', 'Java', 'Python (Qt)'],
    icon: Monitor,
  },
  {
    title: 'Game Dev',
    items: ['Unity (C#)', 'Unreal (C++)', 'Godot (GDScript)'],
    icon: GamepadIcon,
  },
  {
    title: 'AI/ML',
    items: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn'],
    icon: Brain,
  },
  {
    title: 'Embedded/IoT',
    items: ['C', 'C++', 'MicroPython', 'Arduino'],
    icon: Cpu,
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Go', 'Python'],
    icon: Cloud,
  },
  {
    title: 'Data Science',
    items: ['Python (pandas, NumPy, matplotlib)', 'R', 'SQL'],
    icon: FlaskConical,
  },
  {
    title: 'Databases',
    items: ['Postgres/MySQL', 'MongoDB', 'Query optimization', 'Indexing'],
    icon: Database,
  },
  {
    title: 'Cybersecurity',
    items: ['Python', 'C', 'Networking', 'Pentesting labs'],
    icon: ShieldCheck,
  },
  {
    title: 'Scientific/Engineering',
    items: ['MATLAB-like', 'Fortran', 'Julia', 'C++'],
    icon: BookOpen,
  },
];

function GamepadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 12h4M8 10v4" />
      <circle cx="15.5" cy="10.5" r="1" />
      <circle cx="18.5" cy="13.5" r="1" />
      <path d="M5 7h14a3 3 0 0 1 3 3v2a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-2a3 3 0 0 1 3-3z" />
    </svg>
  );
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Curriculum — Ծրագիր</h2>
            <p className="mt-2 text-sm md:text-base text-gray-700">Practice-first learning paths with beginner to professional capstones.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-rose-700 hover:text-rose-800 font-medium">
            View roadmap
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                  <area.icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-gray-900">{area.title}</h3>
              </div>
              <ul className="mt-3 space-y-1.5">
                {area.items.map((it, i) => (
                  <li key={i} className="text-sm text-gray-700">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
