import React from "react";


function Skills() {

    // Skills data
    const skills = [
        {
            name: "HTML & CSS",
            icon: "🌐"
        },
        {
            name: "JavaScript",
            icon: "⚡"
        },
        {
            name: "React",
            icon: "⚛️"
        },
        {
            name: "Python",
            icon: "🐍"
        },

        {
            name: "Django",
            icon: "🐍"
        },

        {
            name: "Git & GitHub",
            icon: "🔧"
        },
        {
            name: "API Integration",
            icon: "🔗"
        },

        {
            name: "Tailwind CSS",
            icon: "🎨"
        },

        {
            name: "Bootstrap CSS",
            icon: "🎨"
        },


    ];

    return (
        <section id="skills" className="bg-slate-50 py-20 px-6 md:px-12">


            {/* Section heading */}
            <div className="text-center mb-12">

                <h2 className="text-5xl md:text-4xl font-bold text-slate-900 mt-3">
                    Technical Skills
                </h2>

            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                    >

                        <div className="text-4xl mb-4">
                            {skill.icon}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            {skill.name}
                        </h3>



                    </div>
                ))}

            </div>



        </section>
    );
}

export default Skills;
