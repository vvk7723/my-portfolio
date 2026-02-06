import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star, CheckCircle } from 'lucide-react';
import projectsData from '@/lib/data/projects.json';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [projects, setProjects] = useState(projectsData.projects);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData.projects[0] | null>(null);
  const [showStoreModal, setShowStoreModal] = useState(false);

  React.useEffect(() => {
    const fetchProjectData = async () => {
      const updatedProjects = await Promise.all(
        projectsData.projects.map(async (project) => {
          if (project.app_id) {
            try {
              const response = await fetch(`/api/app-data?appId=${project.app_id}`);
              if (response.ok) {
                const data = await response.json();
                return {
                  ...project,
                  // Merge scraped data (prioritize scraped data if desired)
                  description: data.summary || data.description || project.description,
                  image: data.icon || data.headerImage || project.image,
                  title: data.title || project.title,
                  // Add extra fields if needed
                  rating: data.score,
                  downloads: data.installs,
                };
              }
            } catch (error) {
              console.error(`Failed to fetch data for ${project.app_id}`, error);
            }
          }
          return project;
        })
      );
      setProjects(updatedProjects);
    };

    fetchProjectData();
  }, []);

  const handleViewDetails = (project: typeof projectsData.projects[0]) => {
    if (project.app_store_url && project.play_store_url) {
      setSelectedProject(project);
      setShowStoreModal(true);
    } else if (project.play_store_url) {
      window.open(project.play_store_url, '_blank');
    } else if (project.app_store_url) {
      window.open(project.app_store_url, '_blank');
    } else {
      // Default behavior if no store links (maybe notify user or do nothing)
      console.warn('No store links available');
    }
  };

  const allTechnologies = Array.from(
    new Set(projectsData.projects.flatMap(p => p.technologies))
  );

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.technologies.includes(filter));

  const statusColors: Record<string, string> = {
    'Production': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    'Live': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    'In Progress': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Showcase of my work in enterprise applications and web platforms
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
            >
              All Projects
            </button>
            {allTechnologies.slice(0, 5).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <ImageWithFallback
                  src={project.image.startsWith('http') ? project.image : `https://source.unsplash.com/featured/?${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex gap-2">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
                      <CheckCircle size={12} />
                      {project.status}
                    </span>
                  </div>
                  {/* Rating Badge if available */}
                  {(project as any).rating && (
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Star size={10} className="text-yellow-400" fill="currentColor" />
                      {(project as any).rating.toFixed(1)}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Role */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-500">Role:</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">
                    {project.role}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 text-xs rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(project)}
                  className="w-full mt-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  View Details
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Store Selection Modal */}
      {showStoreModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full p-6 relative"
          >
            <button
              onClick={() => setShowStoreModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">Download {selectedProject.title}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm">Choose your platform to continue</p>

            <div className="flex flex-col gap-3">
              {selectedProject.play_store_url && (
                <a
                  href={selectedProject.play_store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  {/* Google Play Icon (simplified) */}
                  <div className="w-6 h-6 relative">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,13.11L21.31,12.53C21.68,12.32 21.68,11.69 21.31,11.48L17.65,9.36L15.38,11.64L20.3,13.11M14.54,11.15L6.05,2.66L16.81,8.88L14.54,11.15Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase font-semibold text-gray-500">GET IT ON</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Google Play</div>
                  </div>
                </a>
              )}

              {selectedProject.app_store_url && (
                <a
                  href={selectedProject.app_store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  {/* App Store Icon (simplified) */}
                  <div className="w-6 h-6 text-blue-500">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase font-semibold text-gray-500">Download on the</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">App Store</div>
                  </div>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
