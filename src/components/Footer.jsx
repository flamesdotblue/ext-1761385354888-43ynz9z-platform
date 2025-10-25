import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-gray-900">Open Full-Stack Academy</h4>
          <p className="text-sm text-gray-600 mt-2">Free, open-licensed, practice-first software engineering education.</p>
        </div>
        <div className="text-sm">
          <h5 className="font-medium text-gray-900">Resources</h5>
          <ul className="mt-2 space-y-1.5">
            <li><a href="#features" className="text-gray-700 hover:text-rose-700">Features</a></li>
            <li><a href="#curriculum" className="text-gray-700 hover:text-rose-700">Curriculum</a></li>
            <li><a href="#" className="text-gray-700 hover:text-rose-700">Contributor Guide</a></li>
            <li><a href="#" className="text-gray-700 hover:text-rose-700">Community</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <h5 className="font-medium text-gray-900">Contact</h5>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2 text-gray-700"><Mail className="w-4 h-4" /> hello@openfs.academy</li>
            <li>
              <a className="inline-flex items-center gap-2 text-gray-700 hover:text-rose-700" href="https://github.com/" target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-4 text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Open Full-Stack Academy — CC-BY 4.0</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-rose-700">Terms</a>
            <a href="#" className="hover:text-rose-700">Privacy</a>
            <a href="#" className="hover:text-rose-700">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
