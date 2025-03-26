import { useState } from 'react';

// Tipo para definir la estructura de un proyecto
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

// Tipo para los filtros
interface Filter {
  name: string;
  value: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Separar los datos de proyectos
  const projects: Project[] = [
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

  // Definir filtros como constante
  const filters: Filter[] = [
    { name: 'Todos', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Dashboard', value: 'dashboard' },
  ];

  // Función para manejar el filtrado de proyectos
  const getFilteredProjects = (): Project[] => {
    return activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
  };

  // Función para renderizar los botones de filtro
  const renderFilterButtons = () => {
    return filters.map((filter) => (
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
    ));
  };

  // Función para renderizar las tecnologías de un proyecto
  const renderTechnologies = (technologies: string[]) => {
    return technologies.map((tech) => (
      <span 
        key={tech} 
        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
      >
        {tech}
      </span>
    ));
  };

  // Función para manejar errores de carga de imagen
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/1000x500?text=Proyecto";
    console.error("Image failed to load");
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Mis Proyectos</span>
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              Explora algunos de mis trabajos más recientes
            </p>
          </div>
        </div>
        
        {/* Botones de filtro */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {renderFilterButtons()}
        </div>
        
        {/* Cuadrícula de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {getFilteredProjects().map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-center"
                  onError={handleImageError}
                />
                {/* Overlay con enlaces */}
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
              
              {/* Detalles del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {renderTechnologies(project.technologies)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}