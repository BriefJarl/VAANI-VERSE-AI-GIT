function WhoVaaniHelps() {
  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Who Vaani Helps
          </h2>

          <p className="text-gray-400">
            Designed to organize productivity for students and professionals
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* COLLEGE STUDENTS */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">

            <h3 className="text-xl font-semibold mb-4">
              College Students
            </h3>

            <p className="text-gray-400">
              Manage assignments, study schedules, project deadlines and daily
              learning goals simply by speaking tasks.
            </p>

          </div>

          {/* SCHOOL STUDENTS */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">

            <h3 className="text-xl font-semibold mb-4">
              School Students & Exam Aspirants
            </h3>

            <p className="text-gray-400">
              Organize homework, revision plans, and competitive exam
              preparation using AI-generated productivity plans.
            </p>

          </div>

          {/* WORKING PROFESSIONALS */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">

            <h3 className="text-xl font-semibold mb-4">
              Working Professionals
            </h3>

            <p className="text-gray-400">
              Capture tasks during meetings, track work goals, and stay
              organized without manually typing notes.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhoVaaniHelps;