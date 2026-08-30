import { useEffect, useState } from 'react'

/* =========================================================
   GATE PAPERS
========================================================= */

const gatePapers = [
  {
    code: 'CS',
    title: 'Computer Science',
    description:
      'Prepare for GATE Computer Science with structured subjects, PYQs and practice.',
    topics: '10+ Subjects',
  },
  {
    code: 'DA',
    title: 'Data Science & AI',
    description:
      'Build strong foundations in Mathematics, Programming, Statistics, ML and AI.',
    topics: '7+ Subjects',
  },
  {
    code: 'EC',
    title: 'Electronics & Communication',
    description:
      'Master core electronics, communication systems and engineering mathematics.',
    topics: '8+ Subjects',
  },
]


/* =========================================================
   PREPARATION STEPS
========================================================= */

const preparationSteps = [
  {
    number: '01',
    title: 'Understand the Syllabus',
    description:
      'Know the subjects, topics and weightage before beginning your preparation.',
  },
  {
    number: '02',
    title: 'Build Your Fundamentals',
    description:
      'Strengthen your concepts before moving towards advanced problem solving.',
  },
  {
    number: '03',
    title: 'Practice Problems',
    description:
      'Solve topic-wise questions and develop problem-solving speed.',
  },
  {
    number: '04',
    title: 'Solve Previous Year Questions',
    description:
      'Analyze previous GATE questions to understand the examination pattern.',
  },
  {
    number: '05',
    title: 'Take Mock Tests',
    description:
      'Test your preparation under realistic examination conditions.',
  },
  {
    number: '06',
    title: 'Revise & Analyze',
    description:
      'Identify weak areas, revise concepts and continuously improve.',
  },
]


/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: 'What is GATE?',
    answer:
      'GATE is a national-level examination that assesses understanding of engineering, science and related subjects.',
  },
  {
    question: 'Why should I take GATE?',
    answer:
      'A GATE score can be useful for postgraduate education, research opportunities and certain recruitment opportunities.',
  },
  {
    question: 'Who can appear for GATE?',
    answer:
      'Eligibility depends on the current GATE examination rules and qualifying degree requirements.',
  },
  {
    question: 'How should I start preparing for GATE?',
    answer:
      'Start by understanding the syllabus, strengthening fundamentals and then gradually move towards problems, PYQs and mock tests.',
  },
]


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function GatePrep() {

  const [openFAQ, setOpenFAQ] = useState(null)

  /* =======================================================
     THEME STATE
  ======================================================== */

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('gate-theme')

    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false

    return false
  })


  /* =======================================================
     SAVE THEME
  ======================================================== */

  useEffect(() => {
    localStorage.setItem(
      'gate-theme',
      isDark ? 'dark' : 'light'
    )
  }, [isDark])


  /* =======================================================
     THEME CLASSES
  ======================================================== */

  const pageBg = isDark
    ? 'bg-[#020708] text-slate-100'
    : 'bg-white text-slate-900'

  const mutedText = isDark
    ? 'text-slate-400'
    : 'text-slate-600'

  const cardBg = isDark
    ? 'bg-slate-900/70 border-slate-800'
    : 'bg-white border-slate-200'

  const secondarySection = isDark
    ? 'bg-slate-950/70 border-slate-800'
    : 'bg-slate-50 border-slate-200'


  return (

    <div
      className={`
        min-h-screen
        transition-colors
        duration-500
        ${pageBg}
      `}
    >

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden">

        {/* Background Glow */}

        <div className="absolute inset-0 pointer-events-none">

          <div
            className={`
              absolute
              top-[-150px]
              left-[10%]
              w-[400px]
              h-[400px]
              rounded-full
              blur-3xl
              transition-all
              duration-500

              ${
                isDark
                  ? 'bg-cyan-500/10'
                  : 'bg-blue-500/10'
              }
            `}
          />

          <div
            className={`
              absolute
              top-[100px]
              right-[10%]
              w-[350px]
              h-[350px]
              rounded-full
              blur-3xl

              ${
                isDark
                  ? 'bg-emerald-500/10'
                  : 'bg-purple-500/10'
              }
            `}
          />

        </div>


        <div className="relative max-w-[1400px] mx-auto px-6 py-12 lg:py-20">

          {/* =================================================
              THEME SWITCHER
          ================================================== */}

          <div className="flex justify-end mb-10">

            <div
              className={`
                flex
                items-center
                gap-1
                p-1
                rounded-full
                border
                transition-all
                duration-300

                ${
                  isDark
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-slate-100 border-slate-200'
                }
              `}
            >

              {/* LIGHT */}

              <button
                type="button"
                onClick={() => setIsDark(false)}
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    !isDark
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }
                `}
              >
                ☀️
                <span>Light</span>
              </button>


              {/* DARK */}

              <button
                type="button"
                onClick={() => setIsDark(true)}
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isDark
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }
                `}
              >
                🌙
                <span>Dark</span>
              </button>

            </div>

          </div>


          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div className="max-w-4xl">

            <div
              className={`
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                text-sm
                font-medium
                mb-6

                ${
                  isDark
                    ? 'border-blue-400/20 bg-blue-500/10 text-blue-400'
                    : 'border-blue-200 bg-blue-50 text-blue-600'
                }
              `}
            >
              🎓 GATE PREPARATION
            </div>


            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">

              Prepare Smarter.

              <br />

              <span
                className={
                  isDark
                    ? 'text-cyan-400'
                    : 'text-blue-600'
                }
              >
                Crack GATE.
              </span>

            </h1>


            <p
              className={`
                mt-6
                text-lg
                md:text-xl
                max-w-2xl
                leading-relaxed
                ${mutedText}
              `}
            >
              Everything you need to understand the GATE examination,
              choose your preparation path, practice important concepts
              and build a structured preparation strategy.
            </p>


            <div className="flex flex-wrap gap-4 mt-8">

              <button
                className={`
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  duration-300

                  ${
                    isDark
                      ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }
                `}
              >
                Start Preparing →
              </button>


              <button
                onClick={() => {
                  document
                    .getElementById('syllabus')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    })
                }}
                className={`
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  border
                  transition
                  duration-300

                  ${
                    isDark
                      ? 'border-slate-700 bg-slate-900/70 text-slate-200 hover:bg-slate-800'
                      : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
                  }
                `}
              >
                Explore Syllabus
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          QUICK STATS
      ====================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 -mt-4 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <StatCard
            icon="📝"
            title="Examination"
            value="GATE"
            isDark={isDark}
          />

          <StatCard
            icon="⏱️"
            title="Duration"
            value="3 Hours"
            isDark={isDark}
          />

          <StatCard
            icon="💯"
            title="Maximum Marks"
            value="100"
            isDark={isDark}
          />

          <StatCard
            icon="🎓"
            title="Opportunities"
            value="Higher Studies"
            isDark={isDark}
          />

        </div>

      </section>



      {/* =====================================================
          WHAT IS GATE
      ====================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 py-24">

        <SectionHeading
          eyebrow="UNDERSTANDING GATE"
          title="What is GATE?"
          description="Understand the examination before beginning your preparation."
          isDark={isDark}
        />


        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          {/* MAIN DESCRIPTION */}

          <div
            className={`
              rounded-3xl
              border
              p-8
              transition-all
              duration-300

              ${cardBg}
            `}
          >

            <h3 className="text-2xl font-bold mb-4">

              Graduate Aptitude Test in Engineering

            </h3>


            <p className={`${mutedText} leading-8`}>

              GATE is a national-level examination that tests the
              understanding of engineering, technology, science and
              related subjects.

            </p>


            <p className={`${mutedText} leading-8 mt-4`}>

              Students use GATE scores for opportunities related to
              postgraduate education, research and other technical
              career pathways.

            </p>

          </div>


          {/* INFO CARDS */}

          <div className="grid sm:grid-cols-2 gap-4">

            <InfoCard
              icon="🎓"
              title="Higher Education"
              description="Explore postgraduate opportunities."
              isDark={isDark}
            />

            <InfoCard
              icon="🔬"
              title="Research"
              description="Build a pathway towards advanced research."
              isDark={isDark}
            />

            <InfoCard
              icon="💼"
              title="Career Opportunities"
              description="Explore opportunities where GATE scores are considered."
              isDark={isDark}
            />

            <InfoCard
              icon="📚"
              title="Technical Foundation"
              description="Strengthen your core engineering concepts."
              isDark={isDark}
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          WHY GATE
      ====================================================== */}

      <section
        className={`
          border-y
          transition-colors
          duration-500
          ${secondarySection}
        `}
      >

        <div className="max-w-[1400px] mx-auto px-6 py-24">

          <SectionHeading
            eyebrow="WHY GATE?"
            title="Why should you prepare for GATE?"
            description="GATE can open multiple academic and professional pathways."
            isDark={isDark}
          />


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            <BenefitCard
              icon="🎓"
              title="Postgraduate Education"
              text="Prepare for opportunities in postgraduate engineering and technology programs."
              isDark={isDark}
            />

            <BenefitCard
              icon="🔬"
              title="Research"
              text="Build a strong foundation for advanced technical and research-oriented careers."
              isDark={isDark}
            />

            <BenefitCard
              icon="🏛️"
              title="Top Institutions"
              text="Compete for postgraduate opportunities at participating institutions."
              isDark={isDark}
            />

            <BenefitCard
              icon="💻"
              title="Technical Growth"
              text="Develop deeper understanding of core engineering concepts."
              isDark={isDark}
            />

            <BenefitCard
              icon="📈"
              title="Career Growth"
              text="Use your preparation to strengthen your technical profile."
              isDark={isDark}
            />

            <BenefitCard
              icon="🧠"
              title="Problem Solving"
              text="Develop analytical thinking and examination problem-solving skills."
              isDark={isDark}
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          EXAM STRUCTURE
      ====================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 py-24">

        <SectionHeading
          eyebrow="EXAMINATION"
          title="Understand the GATE Exam"
          description="Get familiar with the basic examination structure."
          isDark={isDark}
        />


        <div className="grid md:grid-cols-3 gap-5 mt-12">

          <ExamCard
            title="General Aptitude"
            value="Included"
            description="Common aptitude section included in the examination."
            isDark={isDark}
          />

          <ExamCard
            title="Subject Questions"
            value="Core Subjects"
            description="Questions based on the selected GATE paper."
            isDark={isDark}
          />

          <ExamCard
            title="Question Types"
            value="MCQ • MSQ • NAT"
            description="Different question formats are used in the examination."
            isDark={isDark}
          />

        </div>

      </section>



      {/* =====================================================
          GATE PAPERS
      ====================================================== */}

      <section
        className={`
          transition-colors
          duration-500
          ${
            isDark
              ? 'bg-slate-950 text-white'
              : 'bg-slate-100 text-slate-900'
          }
        `}
      >

        <div className="max-w-[1400px] mx-auto px-6 py-24">

          <div className="max-w-2xl">

            <span
              className={
                isDark
                  ? 'text-cyan-400 text-sm font-semibold tracking-wider'
                  : 'text-blue-600 text-sm font-semibold tracking-wider'
              }
            >
              CHOOSE YOUR PATH
            </span>


            <h2 className="text-4xl font-bold mt-3">

              Select your GATE paper

            </h2>


            <p
              className={
                isDark
                  ? 'text-slate-400 mt-4'
                  : 'text-slate-600 mt-4'
              }
            >
              Choose a preparation path based on your academic
              background and career goals.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {gatePapers.map((paper) => (

              <div
                key={paper.code}
                className={`
                  group
                  rounded-3xl
                  border
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1

                  ${
                    isDark
                      ? 'border-slate-800 bg-slate-900 hover:border-cyan-500/60'
                      : 'border-slate-200 bg-white hover:border-blue-400 hover:shadow-lg'
                  }
                `}
              >

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold

                    ${
                      isDark
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'bg-blue-500/10 text-blue-600'
                    }
                  `}
                >
                  {paper.code}
                </div>


                <h3 className="text-xl font-bold mt-6">

                  GATE {paper.title}

                </h3>


                <p
                  className={`
                    mt-3
                    leading-7
                    ${
                      isDark
                        ? 'text-slate-400'
                        : 'text-slate-600'
                    }
                  `}
                >
                  {paper.description}
                </p>


                <div
                  className={`
                    text-sm
                    mt-5
                    ${
                      isDark
                        ? 'text-cyan-400'
                        : 'text-blue-600'
                    }
                  `}
                >
                  {paper.topics}
                </div>


                <button
                  className={`
                    mt-6
                    text-sm
                    font-semibold
                    transition

                    ${
                      isDark
                        ? 'text-white group-hover:text-cyan-400'
                        : 'text-slate-900 group-hover:text-blue-600'
                    }
                  `}
                >
                  Explore Preparation →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          PREPARATION ROADMAP
      ====================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 py-24">

        <SectionHeading
          eyebrow="PREPARATION ROADMAP"
          title="Your GATE preparation journey"
          description="Follow a structured process instead of studying randomly."
          isDark={isDark}
        />


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {preparationSteps.map((step) => (

            <div
              key={step.number}
              className={`
                rounded-2xl
                border
                p-6
                transition-all
                duration-300
                hover:-translate-y-1

                ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/60 hover:border-cyan-500/50'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
                }
              `}
            >

              <span
                className={
                  isDark
                    ? 'text-cyan-400 font-bold text-sm'
                    : 'text-blue-600 font-bold text-sm'
                }
              >
                {step.number}
              </span>


              <h3 className="text-xl font-bold mt-3">

                {step.title}

              </h3>


              <p
                className={`
                  mt-3
                  leading-7
                  ${mutedText}
                `}
              >
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================================
          SYLLABUS
      ====================================================== */}

      <section
        id="syllabus"
        className={`
          border-y
          transition-colors
          duration-500
          ${secondarySection}
        `}
      >

        <div className="max-w-[1400px] mx-auto px-6 py-24">

          <SectionHeading
            eyebrow="SYLLABUS"
            title="Explore the GATE syllabus"
            description="Break the syllabus into manageable subjects and topics."
            isDark={isDark}
          />


          <div className="mt-12 max-w-4xl">

            {[
              'Engineering Mathematics',
              'Programming & Data Structures',
              'Algorithms',
              'Computer Organization',
              'Operating Systems',
              'Database Management Systems',
              'Computer Networks',
              'Theory of Computation',
            ].map((subject) => (

              <button
                key={subject}
                className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  p-5
                  border-b
                  text-left
                  transition-all
                  duration-300

                  ${
                    isDark
                      ? 'border-slate-800 text-slate-200 hover:bg-slate-900'
                      : 'border-slate-200 text-slate-900 hover:bg-white'
                  }
                `}
              >

                <span className="font-semibold">

                  {subject}

                </span>


                <span
                  className={
                    isDark
                      ? 'text-cyan-400'
                      : 'text-blue-600'
                  }
                >
                  →
                </span>

              </button>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          RESOURCES
      ====================================================== */}

      <section className="max-w-[1400px] mx-auto px-6 py-24">

        <SectionHeading
          eyebrow="RESOURCES"
          title="Everything you need to practice"
          description="Build your preparation using structured resources."
          isDark={isDark}
        />


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          <ResourceCard
            icon="📚"
            title="Study Notes"
            isDark={isDark}
          />

          <ResourceCard
            icon="📝"
            title="Practice Problems"
            isDark={isDark}
          />

          <ResourceCard
            icon="📄"
            title="Previous Year Questions"
            isDark={isDark}
          />

          <ResourceCard
            icon="🧪"
            title="Mock Tests"
            isDark={isDark}
          />

        </div>

      </section>



      {/* =====================================================
          FAQ
      ====================================================== */}

      <section
        className={`
          border-t
          transition-colors
          duration-500
          ${secondarySection}
        `}
      >

        <div className="max-w-4xl mx-auto px-6 py-24">

          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common GATE questions."
            isDark={isDark}
          />


          <div className="mt-10">

            {faqs.map((faq, index) => {

              const isOpen = openFAQ === index

              return (

                <div
                  key={faq.question}
                  className={`
                    border-b
                    ${
                      isDark
                        ? 'border-slate-800'
                        : 'border-slate-200'
                    }
                  `}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFAQ(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="w-full flex items-center justify-between py-6 text-left"
                  >

                    <span className="font-semibold text-lg">

                      {faq.question}

                    </span>


                    <span
                      className={`
                        text-xl
                        ${
                          isDark
                            ? 'text-cyan-400'
                            : 'text-blue-600'
                        }
                      `}
                    >
                      {isOpen ? '−' : '+'}
                    </span>

                  </button>


                  {isOpen && (

                    <p
                      className={`
                        pb-6
                        leading-7
                        ${mutedText}
                      `}
                    >
                      {faq.answer}
                    </p>

                  )}

                </div>

              )

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className={`
          transition-colors
          duration-500

          ${
            isDark
              ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white'
              : 'bg-blue-600 text-white'
          }
        `}
      >

        <div className="max-w-[1000px] mx-auto px-6 py-24 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">

            Ready to start your GATE journey?

          </h2>


          <p
            className={`
              mt-5
              text-lg
              ${
                isDark
                  ? 'text-cyan-50'
                  : 'text-blue-100'
              }
            `}
          >
            Build your fundamentals. Practice consistently.
            Track your progress.
          </p>


          <button
            className={`
              mt-8
              px-7
              py-3.5
              rounded-xl
              font-bold
              transition

              ${
                isDark
                  ? 'bg-white text-slate-900 hover:bg-slate-100'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }
            `}
          >
            Start GATE Preparation →
          </button>

        </div>

      </section>

    </div>
  )
}



/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  isDark,
}) {

  return (

    <div className="max-w-3xl">

      <span
        className={`
          text-sm
          font-bold
          tracking-wider

          ${
            isDark
              ? 'text-cyan-400'
              : 'text-blue-600'
          }
        `}
      >
        {eyebrow}
      </span>


      <h2 className="text-3xl md:text-4xl font-bold mt-2">

        {title}

      </h2>


      <p
        className={`
          mt-4
          text-lg
          ${
            isDark
              ? 'text-slate-400'
              : 'text-slate-600'
          }
        `}
      >
        {description}
      </p>

    </div>

  )
}



/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  isDark,
}) {

  return (

    <div
      className={`
        border
        rounded-2xl
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          isDark
            ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
            : 'bg-white border-slate-200 hover:border-blue-300'
        }
      `}
    >

      <div className="text-2xl">

        {icon}

      </div>


      <p
        className={`
          text-sm
          mt-3
          ${
            isDark
              ? 'text-slate-500'
              : 'text-slate-500'
          }
        `}
      >
        {title}
      </p>


      <p className="font-bold text-lg mt-1">

        {value}

      </p>

    </div>

  )
}



/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  description,
  isDark,
}) {

  return (

    <div
      className={`
        rounded-2xl
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          isDark
            ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50'
            : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
        }
      `}
    >

      <div className="text-2xl">

        {icon}

      </div>


      <h3 className="font-bold mt-4">

        {title}

      </h3>


      <p
        className={`
          text-sm
          mt-2
          leading-6
          ${
            isDark
              ? 'text-slate-400'
              : 'text-slate-600'
          }
        `}
      >
        {description}
      </p>

    </div>

  )
}



/* =========================================================
   BENEFIT CARD
========================================================= */

function BenefitCard({
  icon,
  title,
  text,
  isDark,
}) {

  return (

    <div
      className={`
        border
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          isDark
            ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50'
            : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
        }
      `}
    >

      <div className="text-2xl">

        {icon}

      </div>


      <h3 className="text-lg font-bold mt-4">

        {title}

      </h3>


      <p
        className={`
          mt-2
          leading-7
          ${
            isDark
              ? 'text-slate-400'
              : 'text-slate-600'
          }
        `}
      >
        {text}
      </p>

    </div>

  )
}



/* =========================================================
   EXAM CARD
========================================================= */

function ExamCard({
  title,
  value,
  description,
  isDark,
}) {

  return (

    <div
      className={`
        border
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          isDark
            ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50'
            : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
        }
      `}
    >

      <p
        className={`
          text-sm
          ${
            isDark
              ? 'text-slate-500'
              : 'text-slate-500'
          }
        `}
      >
        {title}
      </p>


      <h3 className="text-2xl font-bold mt-2">

        {value}

      </h3>


      <p
        className={`
          mt-3
          ${
            isDark
              ? 'text-slate-400'
              : 'text-slate-600'
          }
        `}
      >
        {description}
      </p>

    </div>

  )
}



/* =========================================================
   RESOURCE CARD
========================================================= */

function ResourceCard({
  icon,
  title,
  isDark,
}) {

  return (

    <button
      type="button"
      className={`
        text-left
        border
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          isDark
            ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50'
            : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
        }
      `}
    >

      <div className="text-3xl">

        {icon}

      </div>


      <h3 className="font-bold mt-5">

        {title}

      </h3>


      <span
        className={`
          text-sm
          font-medium
          mt-3
          inline-block

          ${
            isDark
              ? 'text-cyan-400'
              : 'text-blue-600'
          }
        `}
      >
        Explore →
      </span>

    </button>

  )
}