import Spline from '@splinetool/react-spline';
import { Rocket, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[72vh] md:h-[78vh] overflow-hidden">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600">
                  <Rocket className="w-4 h-4" /> Open & Free Full-Stack Education
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Բաց, անվճար ֆուլ-ստեկ կրթական հարթակ՝ 0-ից պրոֆեսիոնալ
              </h1>
              <p className="mt-3 text-gray-700 text-sm md:text-base">
                Learn every major domain in software engineering through short, practice-first lessons, projects, and industry-grade assessments. Fully open licensed.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#curriculum" className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-rose-700 transition">
                  <BookOpen className="w-4 h-4" /> Սկսել / Start Learning
                </a>
                <a href="#features" className="inline-flex items-center gap-2 border border-gray-200 text-gray-900 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
                  Features
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-600">
                CC-BY content • Auto-graded quizzes & code • Verifiable certificates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
