import React from 'react'
import './Tailwind.css'
import image1 from './assets/employee1.png'

const Tailwind = () => {
  let links = ['Email', 'Instagram', 'GitHub', 'LinkedIn']

  let skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'Django',
    'MySQL'
  ]

  let box = (title, arr) => (
    <section className="bg-white p-6 rounded-xl shadow border">
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <ul className="list-disc ml-5 text-gray-600 space-y-1">
        {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  )

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">

      <div className="max-w-3xl w-full mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow text-center">

          <img
            src={image1}
            alt="Nitesh"
            className="w-28 h-32 mx-auto rounded-lg object-cover"
          />

          <h1 className="text-3xl font-bold mt-4">
            Hi, I'm Nitesh Goswami
          </h1>

          <p className="text-gray-600 mt-2">
            <span className="text-blue-600 font-semibold">
              Python Full Stack Developer
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {links.map((item, i) => (
              <button
                key={i}
                className="bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200"
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {box("🔭 Currently Working On", [
          'Web Applications',
          'Full Stack Development',
          'Personal Projects'
        ])}

        {box("🌱 Currently Learning", [
          'HTML CSS JavaScript',
          'Python Django',
          'MySQL'
        ])}

        {/* Skills */}
        <section className="bg-white p-6 rounded-xl shadow border">

          <h2 className="text-xl font-bold mb-3">
            💻 Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((item, i) => (
              <span
                key={i}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

        </section>

        {box("🤝 Collaboration", [
          'Open Source',
          'Web Projects',
          'Hackathons'
        ])}

        {/* Download Button */}
        <div className="flex justify-center">
          <button className="bg-[#2575fc] text-white py-3 px-6 rounded-lg shadow-[0_5px_0_#1a5edb] active:translate-y-[5px] active:shadow-none transition-all">
            Download CV
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 py-4">
          Created by Nitesh © 2026
        </div>

      </div>

    </div>
  )
}

export default Tailwind