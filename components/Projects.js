import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Tienda online completa con carrito de compras, pagos y panel de administración.',
      image: '/images/projects/ecommerce.jpg',
      category: 'web',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Panel de control con visualización de datos y estadísticas en tiempo real.',
      image: '/images/projects/dashboard.webp',
      category: 'dashboard',
      technologies: ['React', 'Chart.js', 'Material UI', 'Firebase'],
      demoLink: 'https://dashboard-react-sable.vercel.app/',
      codeLink: 'https://github.com/kevinmirama/Dashboard-React'
    },
    {
      id: 3,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para organizar tareas con funcionalidades de arrastrar y soltar.',
      image: '/images/projects/apptareas.webp',
      category: 'app',
      technologies: ['React', 'Redux', 'Styled Components', 'React DnD'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      title: 'Sitio Web Corporativo',
      description: 'Sitio web moderno y responsivo para una empresa de tecnología.',
      image: '/images/projects/web.jpg',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://web-empresarial-five.vercel.app/',
      codeLink: 'https://github.com/kevinmirama/Web-Empresarial'
    },
  ];

  const filters = [
    { name: 'Todos', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'App', value: 'app' },
    { name: 'Dashboard', value: 'dashboard' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Mis Proyectos</span>
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              Explora algunos de mis trabajos más recientes.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium mb-2 ${
                activeFilter === filter.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-center"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.target.src = "https://via.placeholder.com/1000x500?text=Proyecto";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300"
                    >
                      Código
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}