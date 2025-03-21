export default function Skills() {
    const skills = [
      { name: 'HTML5', icon: 'html5', level: 90 },
      { name: 'CSS3', icon: 'css3', level: 85 },
      { name: 'JavaScript', icon: 'javascript', level: 85 },
      { name: 'React', icon: 'react', level: 80 },
      { name: 'Next.js', icon: 'nextjs', level: 75 },
      { name: 'Python', icon: 'python', level: 95 },
      { name: 'Django', icon: 'django', level: 95 },
      { name: 'Flask', icon: 'flask', level: 70 },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 85 },
      { name: 'TypeScript', icon: 'typescript', level: 70 },
      { name: 'Git', icon: 'git', level: 80 },
      { name: 'MySQL', icon: 'mysql', level: 100 },
      { name: 'NoSQL', icon: 'nosql', level: 100 },
      { name: 'AWS', icon: 'aws', level: 90 },
      { name: 'GCP', icon: 'gcp', level: 90 },
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">Mis Habilidades</span>
            </h2>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-xl text-gray-500 dark:text-gray-300">
                Tecnologías y herramientas con las que trabajo.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-md bg-indigo-500 text-white">
                    {skill.icon === 'nextjs' ? (
                      <span className="text-2xl font-bold">N</span>
                    ) : skill.icon === 'django' ? (
                      <span className="text-xl font-bold">dj</span>
                    ) : skill.icon === 'flask' ? (
                      <span className="text-xl font-bold">Fl</span>
                    ) : skill.icon === 'javascript' ? (
                      <i className="fab fa-js text-2xl"></i>
                    ) : skill.icon === 'typescript' ? (
                      <span className="text-xl font-bold">TS</span>
                    ) : skill.icon === 'tailwind' ? (
                      <span className="text-xl font-bold">TW</span>
                    ) : skill.icon === 'mysql' ? (
                      <i className="fas fa-database text-2xl"></i>
                    ) : skill.icon === 'nosql' ? (
                      <span className="text-xl font-bold">NoSQL</span>
                    ) : skill.icon === 'aws' ? (
                      <i className="fab fa-aws text-2xl"></i>
                    ) : skill.icon === 'gcp' ? (
                      <span className="text-xl font-bold">GCP</span>
                    ) : (
                      <i className={`fab fa-${skill.icon} text-2xl`}></i>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}