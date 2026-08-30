export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-78px)] flex items-center">

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              J.N.N's Student Technology Community
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

              BUILD.
              <br />

              <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                LEARN.
              </span>

              <br />

              CREATE.
              <br />

              LEAD.

            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              ARC is where curious students come together to
              learn technology, build real projects, solve
              challenging problems, and grow together.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#explore"
                className="
                  rounded-xl
                  bg-emerald-500
                  px-7
                  py-3.5
                  text-center
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  transition
                  hover:-translate-y-1
                  hover:bg-emerald-400
                "
              >
                Explore ARC →
              </a>

              <a
                href="/register"
                className="
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900/50
                  px-7
                  py-3.5
                  text-center
                  font-semibold
                  text-slate-200
                  backdrop-blur
                  transition
                  hover:-translate-y-1
                  hover:border-emerald-400/40
                  hover:text-emerald-300
                "
              >
                Join the Community
              </a>

            </div>

          </div>


          {/* RIGHT — ARC ECOSYSTEM */}
          <div className="relative mx-auto h-[430px] w-full max-w-lg">

            {/* Center */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-32
                w-32
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-emerald-400/30
                bg-slate-950/80
                text-4xl
                font-black
                tracking-[0.2em]
                text-emerald-400
                shadow-[0_0_80px_rgba(52,211,153,0.18)]
                backdrop-blur-xl
              "
            >
              ARC
            </div>

            {/* Orbit */}
            <div className="absolute inset-12 rounded-full border border-dashed border-slate-700/70" />

            {/* LEARN */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-center backdrop-blur-xl">
              <div className="text-2xl">🧠</div>
              <div className="mt-1 text-sm font-semibold text-white">
                LEARN
              </div>
            </div>

            {/* BUILD */}
            <div className="absolute bottom-6 left-0 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-center backdrop-blur-xl">
              <div className="text-2xl">🚀</div>
              <div className="mt-1 text-sm font-semibold text-white">
                BUILD
              </div>
            </div>

            {/* CONNECT */}
            <div className="absolute bottom-6 right-0 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-center backdrop-blur-xl">
              <div className="text-2xl">🤝</div>
              <div className="mt-1 text-sm font-semibold text-white">
                CONNECT
              </div>
            </div>

            {/* COMPETE */}
            <div className="absolute left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 translate-x-[150px] rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-center backdrop-blur-xl">
              <div className="text-2xl">🏆</div>
              <div className="mt-1 text-sm font-semibold text-white">
                COMPETE
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* EXPLORE */}
      <section
        id="explore"
        className="relative mx-auto max-w-7xl px-6 py-24"
      >

        <div className="mb-14 max-w-2xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Explore ARC
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need
            <span className="text-slate-500">
              {" "}to grow.
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Learn new skills, build projects, prepare for your
            career and connect with students across J.N.N.
          </p>

        </div>


        {/* Feature Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: "🧠",
              title: "DSA & Problem Solving",
              text: "Practice concepts, solve problems and become a stronger problem solver.",
            },
            {
              icon: "🗺️",
              title: "Career Tracks",
              text: "Follow structured learning paths for the technology career you want.",
            },
            {
              icon: "🚀",
              title: "Student Projects",
              text: "Build, showcase and discover projects created by the ARC community.",
            },
            {
              icon: "💬",
              title: "Community",
              text: "Share achievements, ask questions, discuss ideas and learn together.",
            },
            {
              icon: "🎯",
              title: "Interview Preparation",
              text: "Prepare yourself for technical interviews and future opportunities.",
            },
            {
              icon: "🏆",
              title: "Leaderboard",
              text: "Compete, contribute and earn recognition within the ARC community.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-950/50
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-400/30
                hover:bg-slate-900/70
              "
            >
              <div className="text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-400">
                {item.text}
              </p>

              <div className="mt-6 text-sm font-semibold text-emerald-400 opacity-0 transition group-hover:opacity-100">
                Explore →
              </div>
            </div>
          ))}

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">

        <div className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-cyan-500/10 p-10 text-center sm:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Your journey starts here
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to build something?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
            Join ARC and turn your curiosity into skills,
            projects and opportunities.
          </p>

          <a
            href="/register"
            className="
              mt-8
              inline-flex
              rounded-xl
              bg-emerald-500
              px-8
              py-3.5
              font-semibold
              text-white
              shadow-lg
              shadow-emerald-500/20
              transition
              hover:-translate-y-1
              hover:bg-emerald-400
            "
          >
            Join ARC →
          </a>

        </div>

      </section>

    </main>
  )
}