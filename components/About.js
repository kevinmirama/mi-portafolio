export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Sobre Mí</span>
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              Conoce un poco más sobre mi trayectoria y pasión por el desarrollo web.
            </p>
          </div>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: '330px', height: '300px' }}>
              <img
                className="object-cover w-full h-full"
                src="/images/foto.jpg"
                alt="Mi foto profesional"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.target.src = "https://via.placeholder.com/600x800?text=Imagen+no+encontrada";
                }}
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Historia
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
              Soy un desarrollador fullstack con experiencia tanto en el frontend como en el backend. Con conocimientos en React, Next.js y Tailwind CSS para el frontend, me especializo en construir aplicaciones web modernas y responsivas.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
              En el backend, tengo experiencia manejando bases de datos relacionales y NoSQL, así como implementando soluciones en la nube utilizando GCP y AWS. Mi enfoque se centra en la experiencia del usuario, la accesibilidad y el rendimiento.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300 mb-8">
              Cuando no estoy codificando, disfruto jugar Futbol y videojuegos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                download="Kevin_Mirama_CV.pdf"
              >
                Descargar CV
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-mirama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                LinkedIn
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}