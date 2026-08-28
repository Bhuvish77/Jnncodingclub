import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuth()

  /*
   * ---------------------------------------------------------
   * TEMPORARY DASHBOARD DATA
   * ---------------------------------------------------------
   * Keep these values at 0/empty until your backend is ready.
   *
   * Later, replace this object with data from:
   *
   * GET /api/dashboard
   *
   * Example:
   * const { data } = await axios.get('/api/dashboard')
   */
  const dashboardData = {
    stats: {
      solved: 0,
      attempted: 0,
      acceptanceRate: 0,
      collegeRank: null,
      totalStudents: 0,
    },

    streak: 0,

    activity: [],

    dailyGoal: {
      target: 2,
      completed: 0,
      problems: [],
    },

    currentLearning: {
      topic: 'Arrays',
      completed: 0,
      total: 0,
    },

    recentActivity: [],

    collegeStanding: [],
  }

  const firstName = useMemo(() => {
    if (!user?.name) return 'Coder'

    return user.name.trim().split(' ')[0]
  }, [user])

  const {
    stats,
    streak,
    activity,
    dailyGoal,
    currentLearning,
    recentActivity,
    collegeStanding,
  } = dashboardData

  const goalPercentage =
    dailyGoal.target > 0
      ? Math.min(
          100,
          Math.round((dailyGoal.completed / dailyGoal.target) * 100)
        )
      : 0

  const learningPercentage =
    currentLearning.total > 0
      ? Math.min(
          100,
          Math.round(
            (currentLearning.completed / currentLearning.total) * 100
          )
        )
      : 0

  /*
   * Creates 26 weeks × 7 days of activity cells.
   *
   * Until real activity data is connected, every cell is empty.
   */
  const activityCells = Array.from({ length: 182 }, (_, index) => {
    const item = activity[index]

    return {
      id: index,
      level: item?.level ?? 0,
      date: item?.date ?? null,
      solved: item?.solved ?? 0,
    }
  })

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="dashboard-header">
          <div className="dashboard-header-content">
            <p className="dashboard-greeting">
              J.N.N Coding Club
            </p>

            <h1 className="dashboard-title">
              Good morning, <span>{firstName}</span> 👋
            </h1>

            <p className="dashboard-subtitle">
              Track your coding progress and keep building your skills.
            </p>
          </div>

          <div className="dashboard-streak">
            <div className="streak-icon">
              🔥
            </div>

            <div className="streak-content">
              <strong className="streak-number">
                {streak}
              </strong>

              <span className="streak-label">
                Day Streak
              </span>
            </div>
          </div>
        </header>


        {/* =================================================
            STATS
        ================================================= */}

        <section className="dashboard-stats">

          {/* Solved */}

          <div className="stat-card">
            <span className="stat-card-label">
              Solved
            </span>

            <p className="stat-card-value">
              {stats.solved}
            </p>

            <span className="stat-card-meta">
              Problems solved
            </span>
          </div>


          {/* Attempted */}

          <div className="stat-card">
            <span className="stat-card-label">
              Attempted
            </span>

            <p className="stat-card-value">
              {stats.attempted}
            </p>

            <span className="stat-card-meta">
              Unique problems
            </span>
          </div>


          {/* Acceptance */}

          <div className="stat-card">
            <span className="stat-card-label">
              Acceptance
            </span>

            <p className="stat-card-value">
              {stats.acceptanceRate}%
            </p>

            <span className="stat-card-meta">
              Overall submissions
            </span>
          </div>


          {/* College Rank */}

          <div className="stat-card">
            <span className="stat-card-label">
              College Rank
            </span>

            <p className="stat-card-value">
              {stats.collegeRank ? `#${stats.collegeRank}` : '—'}
            </p>

            <span className="stat-card-meta">
              {stats.totalStudents
                ? `of ${stats.totalStudents} students`
                : 'No ranking data yet'}
            </span>
          </div>

        </section>


        {/* =================================================
            MAIN DASHBOARD
        ================================================= */}

        <section className="dashboard-main">

          {/* =================================================
              CODING ACTIVITY
          ================================================= */}

          <div className="dashboard-card activity-card">

            <div className="dashboard-card-header">

              <div>
                <p className="dashboard-card-label">
                  Progress
                </p>

                <h2 className="dashboard-card-title">
                  Your Coding Activity
                </h2>
              </div>

              <div className="activity-summary">
                <strong>
                  {stats.solved} solved
                </strong>

                <span>
                  Total progress
                </span>
              </div>

            </div>


            <div className="activity-heatmap-wrapper">

              <div className="activity-heatmap">

                {activityCells.map((cell) => (
                  <div
                    key={cell.id}
                    className={`activity-cell level-${cell.level}`}
                    title={
                      cell.date
                        ? `${cell.solved} problems solved on ${cell.date}`
                        : 'No activity'
                    }
                  />
                ))}

              </div>

            </div>


            <div className="activity-footer">

              <span className="activity-total">
                Start solving problems to build your activity.
              </span>

              <div className="activity-legend">

                <span>Less</span>

                <span
                  className="activity-legend-cell"
                  style={{
                    background: 'rgba(148, 163, 184, 0.07)',
                  }}
                />

                <span
                  className="activity-legend-cell"
                  style={{
                    background: 'rgba(52, 211, 153, 0.16)',
                  }}
                />

                <span
                  className="activity-legend-cell"
                  style={{
                    background: 'rgba(52, 211, 153, 0.32)',
                  }}
                />

                <span
                  className="activity-legend-cell"
                  style={{
                    background: 'rgba(52, 211, 153, 0.55)',
                  }}
                />

                <span
                  className="activity-legend-cell"
                  style={{
                    background: '#34d399',
                  }}
                />

                <span>More</span>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="dashboard-side">

            {/* =================================================
                TODAY'S GOAL
            ================================================= */}

            <div className="daily-goal">

              <div className="dashboard-card-header">

                <div>
                  <p className="dashboard-card-label">
                    Today
                  </p>

                  <h2 className="dashboard-card-title">
                    Today's Goal
                  </h2>
                </div>

              </div>


              <p className="goal-count">
                {dailyGoal.completed}
                <span> / {dailyGoal.target} problems</span>
              </p>


              <div className="goal-progress-wrapper">

                <div className="goal-progress-track">

                  <div
                    className="goal-progress-bar"
                    style={{
                      width: `${goalPercentage}%`,
                    }}
                  />

                </div>

                <div className="goal-progress-text">
                  <span>
                    Daily progress
                  </span>

                  <span>
                    {goalPercentage}%
                  </span>
                </div>

              </div>


              <div className="goal-problems">

                {dailyGoal.problems.length > 0 ? (

                  dailyGoal.problems.map((problem) => (
                    <div
                      key={problem.id}
                      className={`goal-problem ${
                        problem.completed ? 'completed' : ''
                      }`}
                    >
                      <span className="goal-problem-icon">
                        {problem.completed ? '✓' : ''}
                      </span>

                      <span>
                        {problem.title}
                      </span>
                    </div>
                  ))

                ) : (

                  <div className="dashboard-empty">
                    Your daily problems will appear here.
                  </div>

                )}

              </div>


              <button
                type="button"
                className="dashboard-action-button"
              >
                Start Coding →
              </button>

            </div>


            {/* =================================================
                CONTINUE LEARNING
            ================================================= */}

            <div className="continue-learning">

              <div className="dashboard-card-header">

                <div>
                  <p className="dashboard-card-label">
                    Learning Path
                  </p>

                  <h2 className="dashboard-card-title">
                    Continue Learning
                  </h2>
                </div>

              </div>


              <h3 className="learning-topic">
                {currentLearning.topic}
              </h3>

              <p className="learning-description">
                Continue from where you left off.
              </p>


              <div className="learning-progress-track">

                <div
                  className="learning-progress-bar"
                  style={{
                    width: `${learningPercentage}%`,
                  }}
                />

              </div>


              <div className="learning-progress-info">

                <span>
                  {currentLearning.completed} /{' '}
                  {currentLearning.total || 0} completed
                </span>

                <strong>
                  {learningPercentage}%
                </strong>

              </div>


              <button
                type="button"
                className="dashboard-action-button"
              >
                Continue Learning →
              </button>

            </div>

          </div>

        </section>


        {/* =================================================
            BOTTOM SECTION
        ================================================= */}

        <section className="dashboard-bottom">

          {/* =================================================
              RECENT ACTIVITY
          ================================================= */}

          <div className="dashboard-card recent-activity">

            <div className="dashboard-card-header">

              <div>
                <p className="dashboard-card-label">
                  Submissions
                </p>

                <h2 className="dashboard-card-title">
                  Recent Activity
                </h2>
              </div>

            </div>


            <div className="recent-list">

              {recentActivity.length > 0 ? (

                recentActivity.map((item) => (
                  <div
                    className="recent-item"
                    key={item.id}
                  >

                    <div
                      className={`recent-status ${
                        item.status === 'accepted'
                          ? 'accepted'
                          : 'failed'
                      }`}
                    >
                      {item.status === 'accepted'
                        ? '✓'
                        : '✕'}
                    </div>


                    <div className="recent-problem">

                      <strong>
                        {item.title}
                      </strong>

                      <span>
                        {item.status === 'accepted'
                          ? 'Accepted'
                          : 'Wrong Answer'}
                        {item.language
                          ? ` · ${item.language}`
                          : ''}
                      </span>

                    </div>


                    <span className="recent-time">
                      {item.timeAgo}
                    </span>

                  </div>
                ))

              ) : (

                <div className="dashboard-empty">
                  Your recent submissions will appear here.
                </div>

              )}

            </div>

          </div>


          {/* =================================================
              COLLEGE STANDING
          ================================================= */}

          <div className="dashboard-card college-standing">

            <div className="dashboard-card-header">

              <div>
                <p className="dashboard-card-label">
                  Community
                </p>

                <h2 className="dashboard-card-title">
                  College Standing
                </h2>
              </div>

            </div>


            {/* Current Rank */}

            <div className="current-rank">

              <strong className="current-rank-number">
                {stats.collegeRank
                  ? `#${stats.collegeRank}`
                  : '—'}
              </strong>

              <div className="current-rank-info">

                <strong>
                  Your current position
                </strong>

                <span>
                  {stats.totalStudents
                    ? `Among ${stats.totalStudents} students`
                    : 'Ranking will appear after you start coding'}
                </span>

              </div>

              {stats.collegeRank && (
                <span className="rank-change">
                  ↑ Improving
                </span>
              )}

            </div>


            {/* Standing */}

            <div className="standing-list">

              {collegeStanding.length > 0 ? (

                collegeStanding.map((student) => (
                  <div
                    key={student.id}
                    className={`standing-item ${
                      student.isCurrentUser
                        ? 'current-user'
                        : ''
                    }`}
                  >

                    <span className="standing-rank">
                      #{student.rank}
                    </span>

                    <div className="standing-avatar">
                      {student.name
                        ?.charAt(0)
                        ?.toUpperCase() || '?'}
                    </div>

                    <span className="standing-name">
                      {student.name}
                      {student.isCurrentUser
                        ? ' (You)'
                        : ''}
                    </span>

                    <span className="standing-solved">
                      {student.solved} solved
                    </span>

                  </div>
                ))

              ) : (

                <div className="dashboard-empty">
                  College rankings will appear here.
                </div>

              )}

            </div>

          </div>

        </section>

      </div>
    </main>
  )
}