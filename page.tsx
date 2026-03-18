import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection, TrustBar, StatsRow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About RemodelAI Houston | AI-Powered Home Remodeling Platform',
  description: 'Learn about RemodelAI — Houston\'s first AI-powered residential remodeling platform. Our mission, our team, and why we built a better way to remodel homes in Houston, TX.',
  alternates: { canonical: 'https://remodelai.com/about' },
}

const team = [
  { name: 'Marcus Chen', role: 'Co-Founder & CEO', bio: 'Former construction PM who managed $180M in Houston commercial projects. Built RemodelAI after watching his own kitchen remodel spiral into a 14-month nightmare.' },
  { name: 'Priya Nair', role: 'Co-Founder & CTO', bio: 'AI/ML engineer with 10+ years at enterprise tech companies. Built the proprietary estimating engine that powers RemodelAI\'s instant, Houston-accurate quotes.' },
  { name: 'James Bordeaux', role: 'Head of Contractor Relations', bio: '25-year Houston construction veteran who built our vetted contractor network from the ground up. He knows every licensed crew in the city.' },
  { name: 'Sofia Reyes', role: 'Head of Project Operations', bio: 'PMP-certified project manager who designed RemodelAI\'s managed project delivery system. Obsessed with milestone accountability and client communication.' },
]

const values = [
  { icon: '🎯', title: 'Accuracy First', desc: 'We built our AI to give Houston homeowners estimates they can actually rely on. If our estimate is more than 10% off, we want to know why — and we fix it.' },
  { icon: '🤝', title: 'Homeowner Advocacy', desc: 'We work for you, not the contractor. Our incentive structure is built so our success is tied to your project being completed on time, on budget, and to your satisfaction.' },
  { icon: '🔍', title: 'Radical Transparency', desc: 'No hidden fees. No surprise invoices. Every cost is visible and explained. We believe informed homeowners make better decisions — so we give you all the information.' },
  { icon: '🏙️', title: 'Houston-Specific', desc: 'We\'re not a national platform trying to cover 50 cities. We are a Houston company, with Houston data, Houston crews, and deep knowledge of what makes this market unique.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-green-500/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-tag mb-4 block justify-center">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
            Built by Houstonians<br />for <span className="text-gradient">Houston Homeowners</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto">
            RemodelAI was born from a simple frustration: Houston has world-class homes, world-class homeowners, and a remodeling industry stuck in 1985. We built the platform we wish had existed when we were homeowners.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Origin story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4 block">Why We Built This</span>
              <h2 className="font-display text-4xl text-white mb-6">The Problem We Set Out to Solve</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>In 2020, RemodelAI co-founder Marcus Chen started what should have been a straightforward kitchen remodel on his Heights home. What followed was 14 months of contractor no-shows, an estimate that ballooned by 60%, three different project managers, and a kitchen that was offline for six months.</p>
                <p>"I was a commercial construction project manager. I'd overseen $180 million in projects. And I still couldn't get my kitchen done right." That experience convinced Marcus that the residential remodeling industry had a fundamental infrastructure problem — not just bad luck.</p>
                <p>He partnered with Priya Nair, an AI engineer who had been working on cost estimation models, and together they built the platform that would become RemodelAI: an AI estimating engine calibrated to Houston's specific labor and material markets, a vetted contractor network, and a project management layer that finally put homeowners in control.</p>
                <p>Since launching in Houston in 2021, RemodelAI has completed over 500 managed remodeling projects across Greater Houston — with a 4.9-star average rating and a track record of on-time, on-budget delivery that the traditional contractor market can't match.</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Projects Completed', value: '500+', sub: 'Across Greater Houston' },
                { label: 'Average Rating', value: '4.9 ★', sub: 'From 312 verified reviews' },
                { label: 'On-Time Completion', value: '94%', sub: 'Within 1 week of scheduled date' },
                { label: 'Budget Accuracy', value: '±8%', sub: 'Avg. AI estimate vs. final cost' },
              ].map(s => (
                <div key={s.label} className="card flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-2xl text-green-400">{s.value}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{s.label}</p>
                    <p className="text-sm text-slate-500">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag mb-3 block">Our Model</span>
            <h2 className="section-title mb-4">We're Not a Contractor. We're Your Advocate.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">RemodelAI doesn't perform construction work. We manage it — on your behalf, with your interests first.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🤖', title: 'The AI Layer', desc: 'Our proprietary estimating AI is trained on completed Houston projects and live market data. It generates estimates that are accurate enough to serve as the basis for real project contracts — not ballpark guesses.' },
              { icon: '🔗', title: 'The Network Layer', desc: 'We\'ve spent 3 years building and vetting a network of Houston\'s best contractor crews. Background checks, license verification, insurance review, reference interviews, and ongoing performance monitoring.' },
              { icon: '📋', title: 'The Management Layer', desc: 'Your RemodelAI project manager handles every interaction with contractors, suppliers, permit offices, and inspectors. You make decisions; we execute.' },
            ].map(item => (
              <div key={item.title} className="card text-center p-8">
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-semibold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="card p-6 bg-green-950/20 border-green-500/20">
            <p className="text-center text-slate-300 text-sm">
              <span className="text-green-400 font-semibold">Important:</span> RemodelAI is a project management and technology platform. We do not perform construction labor. Our contractor crews are independently licensed and insured Texas contractors who are matched to your project through our platform and held accountable by our management process.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">What We Believe</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="card">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">The Team</h2>
            <p className="section-subtitle max-w-xl mx-auto">Houston locals who've lived the problem and built the solution.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl text-green-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-green-400 mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Houston commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-6">100% Focused on Houston</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            We're not trying to be the remodeling platform for every city in America. We're trying to be the definitive remodeling platform for Houston — understanding this city's neighborhoods, its housing stock, its climate, its contractors, and its homeowners better than anyone else. That focus is why our estimates are more accurate, our crews are better vetted, and our projects are better managed than any generalist alternative.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '/locations/houston', '/locations/the-heights', '/locations/river-oaks',
              '/locations/katy', '/locations/sugar-land', '/locations/cypress', '/locations/memorial'
            ].map((href, i) => {
              const names = ['Houston', 'The Heights', 'River Oaks', 'Katy', 'Sugar Land', 'Cypress', 'Memorial']
              return (
                <Link key={href} href={href} className="badge-green px-4 py-2 text-sm hover:bg-green-500/25 transition-colors">
                  📍 {names[i]}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience a Better Way to Remodel?"
        subtitle="Join 500+ Houston homeowners who've gotten an AI-powered estimate, met a vetted crew, and enjoyed a fully managed remodel."
        primaryLabel="Get My Free Estimate"
        secondaryLabel="See How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  )
}
