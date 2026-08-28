/*export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About Coding Club J.N.N</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700">
          {/* TODO: Add the club's story here }
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Why We Started</h2>
        <p className="text-gray-700">
          {/* TODO: Add the reason for the club's emergence }
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Code of Conduct</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {/* TODO: Add code of conduct points }
        </ul>
      </section>
    </div>
  )
}*/
import { Link } from "react-router-dom"
export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></span>
          JNNIE Student Coding Community
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          More Than Just a{" "}
          <span className="text-cyan-300 drop-shadow-[0_0_25px_rgba(103,232,249,0.35)]">
            Coding Club.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          A student-driven community where curiosity becomes knowledge,
          knowledge becomes projects, and projects become opportunities.
        </p>

      </section>


      {/* =========================
          WHO WE ARE
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built by Students.
              <br />
              Driven by <span className="text-cyan-300">Curiosity.</span>
            </h2>
          </div>

          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              JNNIE Coding Club is a student-driven technical community
              created for students who want to explore, build, compete,
              and continuously improve their technical skills.
            </p>

            <p>
              From Data Structures and Algorithms to development,
              projects, GATE preparation, interviews, and emerging
              technologies, the club provides a space where students
              can learn together and help each other grow.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          WHY WE STARTED
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="rounded-3xl border border-white/10 bg-slate-950/40 backdrop-blur-xl p-8 md:p-12">

          <div className="max-w-3xl">

            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Why We Started
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Because learning alone
              <span className="text-cyan-300"> shouldn't be the default.</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Technology moves fast. New frameworks, tools, concepts,
              competitions, and opportunities appear constantly.
              We believe students shouldn't have to navigate all of this
              alone.
            </p>

            <p className="text-slate-400 mt-5 leading-relaxed">
              JNNIE Coding Club was created to bring students together,
              encourage peer learning, make technical preparation more
              structured, and create an environment where everyone can
              contribute something valuable.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          WHAT WE BELIEVE
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Our Philosophy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Learn. Build. Solve. <span className="text-cyan-300">Grow.</span>
          </h2>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            {
              icon: "💡",
              title: "Learn",
              text: "Explore concepts, technologies, and ideas beyond the classroom."
            },
            {
              icon: "🧠",
              title: "Solve",
              text: "Strengthen logical thinking and problem-solving through practice."
            },
            {
              icon: "🛠️",
              title: "Build",
              text: "Turn ideas into real-world projects and meaningful solutions."
            },
            {
              icon: "🚀",
              title: "Grow",
              text: "Prepare for internships, placements, hackathons, and bigger opportunities."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-slate-950/30 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(103,232,249,0.08)]"
            >

              <div className="text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          WHAT YOU CAN DO
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="mb-12">

          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Explore
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to
            <span className="text-cyan-300"> level up.</span>
          </h2>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {[
            ["🧩", "DSA Preparation", "Practice problem solving and build strong fundamentals."],
            ["🎯", "GATE Preparation", "Prepare systematically across different technical domains."],
            ["💻", "Student Projects", "Showcase projects, discover ideas, and collaborate with peers."],
            ["💼", "Interview Preparation", "Build confidence for technical interviews and placements."],
            ["🗺️", "Career Roadmaps", "Follow structured paths for different technology careers."],
            ["🏆", "Leaderboard", "Celebrate consistency, achievements, and competitive progress."]
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-slate-950/25 p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-900/50"
            >

              <div className="flex items-start gap-4">

                <div className="text-3xl">
                  {icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {text}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          HOW WE WORK
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-14">

          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Our Approach
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            From curiosity to <span className="text-cyan-300">impact.</span>
          </h2>

        </div>


        <div className="grid md:grid-cols-5 gap-5">

          {[
            ["01", "Learn"],
            ["02", "Practice"],
            ["03", "Build"],
            ["04", "Compete"],
            ["05", "Share"]
          ].map(([number, title]) => (
            <div
              key={number}
              className="text-center p-6 rounded-2xl border border-white/10 bg-slate-950/30"
            >

              <div className="text-sm text-cyan-300 mb-4 font-mono">
                {number}
              </div>

              <h3 className="font-semibold text-lg">
                {title}
              </h3>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          CODE OF CONDUCT
      ========================== */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="text-center mb-10">

          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Community Standards
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Code of <span className="text-cyan-300">Conduct</span>
          </h2>

          <p className="text-slate-400 mt-4">
            A strong community starts with respect.
          </p>

        </div>


        <div className="space-y-4">

          {[
            "Respect everyone regardless of their experience level.",
            "Encourage questions, discussions, and constructive feedback.",
            "Share knowledge instead of gatekeeping it.",
            "Give credit when using someone else's work or ideas.",
            "Keep discussions professional, inclusive, and constructive.",
            "Use the platform to learn, build, collaborate, and help others."
          ].map((rule, index) => (
            <div
              key={index}
              className="flex gap-4 items-start rounded-xl border border-white/10 bg-slate-950/30 p-5"
            >

              <span className="text-cyan-300 font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-slate-300">
                {rule}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">

        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 backdrop-blur-xl p-10 md:p-16">

          <p className="text-cyan-300 font-medium mb-4">
            YOUR NEXT STEP STARTS HERE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build
            <span className="text-cyan-300"> something great?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 mb-8 leading-relaxed">
            Learn with others, build meaningful projects, solve challenging
            problems, and become a stronger engineer one step at a time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="/roadmap"
              className="px-7 py-3 rounded-xl bg-cyan-300 text-slate-950 font-semibold hover:bg-cyan-200 transition-colors"
            >
              Explore Roadmaps
            </a>

            <Link
            to="/register"
             className="px-7 py-3 rounded-xl border border-white/15 text-slate-200 hover:border-cyan-300/40 hover:text-cyan-300 transition-colors"
            >
  Join the Community
</Link>

          </div>

        </div>

      </section>

    </div>
  )
}


