export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Remote Engineering Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Optimize Async Standups for{" "}
          <span className="text-[#58a6ff]">Maximum Team Alignment</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          StandupSync ingests your Slack &amp; Discord standup messages, detects communication gaps, surfaces blockers, and tells you exactly when your team should post for peak alignment.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📡", title: "Slack & Discord Webhooks", desc: "Zero-friction ingestion from your existing standup channels." },
            { icon: "🤖", title: "AI Pattern Analysis", desc: "Detects communication gaps and blocker trends automatically." },
            { icon: "📊", title: "Team Sync Dashboard", desc: "Actionable insights and optimal posting time recommendations." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited standup ingestion",
              "Slack & Discord webhooks",
              "AI blocker & gap detection",
              "Optimal posting time engine",
              "Team sync insights dashboard",
              "Email digest reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does StandupSync connect to Slack or Discord?",
              a: "You add a webhook URL to your standup channel. Messages are securely forwarded to StandupSync for analysis — no bot permissions or OAuth required."
            },
            {
              q: "What does the AI actually analyze?",
              a: "It identifies who is blocked, how long blockers go unresolved, which team members are misaligned in timing, and patterns that reduce overall team velocity."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Subscriptions are managed via Lemon Squeezy. Cancel from your customer portal at any time with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} StandupSync. All rights reserved.
      </footer>
    </main>
  );
}
