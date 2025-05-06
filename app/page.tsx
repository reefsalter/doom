"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, Skull } from "lucide-react"

export default function ExamCountdown() {
  const [exams, setExams] = useState([
    { subject: "Physics A: Modelling Physics", date: "2025-05-23T09:00:00" },
    { subject: "Mathematics ADV Paper 1", date: "2025-06-04T13:30:00" },
    { subject: "Physics A: Exploring Physics", date: "2025-06-09T09:00:00" },
    { subject: "Computer Science ADV Paper 1D", date: "2025-06-11T09:00:00" },
    { subject: "Mathematics ADV Paper 2", date: "2025-06-12T13:30:00" },
    { subject: "Physics A: Unified Physics", date: "2025-06-17T09:00:00" },
    { subject: "Computer Science ADV Paper 2", date: "2025-06-18T09:00:00" },
    { subject: "Mathematics ADV Paper 3", date: "2025-06-19T13:30:00" },
  ])
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Sort exams by date
  const sortedExams = [...exams].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="min-h-screen bg-black text-red-500 font-mono p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?key=t3m6i')] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-red-900/20 z-0"></div>

      {/* Flickering effect */}
      <div className="flicker-overlay absolute inset-0 bg-red-900/5 z-10 pointer-events-none"></div>

      <div className="relative z-20 max-w-4xl mx-auto">
        <header className="text-center mb-8 mt-6 border-b border-red-900 pb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertTriangle className="h-8 w-8 text-red-600 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 glitch-text">DEATH COUNTDOWN</h1>
            <AlertTriangle className="h-8 w-8 text-red-600 animate-pulse" />
          </div>
          <p className="text-xl text-red-400 uppercase tracking-widest">Summer 2025 - No Escape</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {sortedExams.map((exam, index) => {
            const examDate = new Date(exam.date)
            const diff = examDate.getTime() - currentTime.getTime()

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((diff / (1000 * 60)) % 60)
            const seconds = Math.floor((diff / 1000) % 60)

            const isPassed = diff <= 0
            const isClose = days < 7 && !isPassed

            return (
              <div
                key={index}
                className={`
                  relative border border-red-900/50 bg-black/80 p-4 rounded-md 
                  backdrop-blur-sm shadow-lg transform transition-all duration-500
                  ${isClose ? "animate-pulse-slow border-red-600" : ""}
                  ${isPassed ? "opacity-60" : ""}
                `}
              >
                {/* Crack overlay for visual effect */}
                <div className="absolute inset-0 bg-[url('/placeholder.svg?key=jau83')] opacity-10 mix-blend-overlay"></div>

                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-red-400 tracking-tight">{exam.subject}</h2>
                  {isClose && !isPassed && <Skull className="h-5 w-5 text-red-600 animate-pulse" />}
                </div>

                <div className="text-sm text-red-300/80 mb-2">
                  {examDate.toLocaleDateString("en-GB", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>

                <div
                  className={`
                  countdown-display text-2xl font-bold tracking-wider
                  ${isPassed ? "text-gray-600" : isClose ? "text-red-600" : "text-red-500"}
                `}
                >
                  {isPassed ? (
                    <span className="uppercase">Judgment Day Passed</span>
                  ) : (
                    <>
                      <span className="countdown-unit">{days.toString().padStart(2, "0")}d </span>
                      <span className="countdown-unit">{hours.toString().padStart(2, "0")}h </span>
                      <span className="countdown-unit">{minutes.toString().padStart(2, "0")}m </span>
                      <span className="countdown-unit">{seconds.toString().padStart(2, "0")}s</span>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <footer className="mt-8 text-center text-red-400/60 text-sm">
          <p className="uppercase tracking-widest">Prepare For The Inevitable</p>
        </footer>
      </div>
    </div>
  )
}
