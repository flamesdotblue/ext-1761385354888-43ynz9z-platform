import { Code, Users, Shield, Globe, Server, Award } from 'lucide-react';

const features = [
  {
    icon: Code,
    titleHy: 'Code Playground և ավտոգնահատում',
    titleEn: 'Code Playground & Auto-grader',
    desc:
      'Sandbox-ացված միջավայր՝ բազմալեզու կոդի կատարումով, unit test-երով և արդյունքների անմիջական հետադարձ կապով։',
  },
  {
    icon: Award,
    titleHy: 'Սերտիֆիկատներ (verifiable)',
    titleEn: 'Verifiable Certificates',
    desc:
      'Ավարտի դեպքում ավտոմատ PDF սերտիֆիկատ՝ հեշով (ID) և GitHub/GitLab project proof հղումով։',
  },
  {
    icon: Users,
    titleHy: 'Համայնք և մենթորություն',
    titleEn: 'Community & Mentorship',
    desc:
      'Քննարկումներ, study groups, մենթորի դիմում, office hours ժամանակացույց և Discord/Matrix ինտեգրում։',
  },
  {
    icon: Shield,
    titleHy: 'Անվտանգություն և գաղտնիություն',
    titleEn: 'Security & Privacy',
    desc:
      'GDPR-համապատասխան տվյալների վարում, CSRF/XSS պաշտպանություն, rate limiting և sandboxing։',
  },
  {
    icon: Server,
    titleHy: 'Սկալաբել ենթակառուցվածք',
    titleEn: 'Scalable Infra',
    desc:
      'Docker/Kubernetes, autoscaling, CDN և cache-ավորում՝ կայուն արտադրական միջավայրի համար։',
  },
  {
    icon: Globe,
    titleHy: 'Մատչելիություն և թարգմանություն',
    titleEn: 'Accessibility & Localization',
    desc:
      'WCAG 2.1 AA, ենթագրեր, մեծ տեքստի ռեժիմ, UI հայերեն/անգլերեն և մեկ քայլով նոր լեզուներ։',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16 bg-gradient-to-b from-white to-rose-50/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Core pillars — Հիմնական սկզբունքներ</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Practice-first, open content, real-world projects, and an inclusive global community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, titleHy, titleEn, desc }, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{titleHy}</h3>
                  <p className="text-xs text-gray-600">{titleEn}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
