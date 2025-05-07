import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Repositorio {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const Projetos = () => {  const [repositories, setRepositories] = useState<Repositorio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/tempzz7/repos');
        setRepositories(response.data as Repositorio[]);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);
  return (
    <section id="portfolio" className="py-24 bg-dark relative">
      {/* Background elements */}      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary-violet/30 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary-violet/30 to-transparent"></div>
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary-violet/5 rounded-full blur-[100px]"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-accent-violet/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >          <h2 className="inline-block text-4xl md:text-5xl font-extrabold mb-6 relative">
            <span className="text-gradient">Open Source</span>
            <span className="ml-2 text-light-gray">Projects</span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary-violet/80 via-accent-violet to-transparent"
            ></motion.div>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Explore my open source projects. Each repository represents a piece of my development universe.
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex flex-col justify-center items-center min-h-[300px] space-y-4">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-violet border-t-transparent"></div>
            <p className="text-accent-violet animate-pulse">Loading repositories...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {/* Highlighted projects at the top */}
              {[
                {
                  name: 'Studio Muda Controle de Estoque',
                  description: 'Inventory and stock management system for Studio Muda, with product tracking, reporting, and user-friendly interface.',
                  language: 'React, Spring Boot, Thymeleaf',
                  html_url: 'https://github.com/tempzz7/studiomudaofc',
                  stargazers_count: 0,
                  forks_count: 0,
                  logo: require('./LOGO VERDE PNG.png')
                },
                {
                  name: 'Coffice',
                  description: 'A modern workspace and coffee shop management app, including reservations, menu, and customer analytics.',
                  language: 'CSS (39.5%), JavaScript (37.6%), HTML (14.1%), Python (6.2%), PowerShell (1.4%), Gherkin (0.7%), Shell (0.5%)',
                  html_url: 'https://github.com/coffice-g7/coffice',
                  stargazers_count: 0,
                  forks_count: 0,
                  logo: require('./muda 10 (1).png')
                }
              ].map((proj, index) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-dark-gray via-dark to-dark-gray border border-primary-violet/20 rounded-xl overflow-hidden relative flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-dark-gray/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        {proj.logo && (
                          <span>
                            <img src={proj.logo} alt={proj.name + ' logo'} className="w-10 h-10 object-contain" />
                            <img src={proj.logo} alt={proj.name + ' logo'} className="w-10 h-10 object-contain" />
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-bold text-primary-violet group-hover:text-accent-violet transition-colors">
                          {proj.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-medium-gray mb-5 flex-1 text-sm leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex items-center gap-x-5 gap-y-2 text-xs text-medium-gray mb-6 flex-wrap">
                      {proj.language && (
                        <span className="flex items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-accent-violet mr-1.5"></span>
                          {proj.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-accent-violet" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                        {proj.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-medium-gray" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.58 2 2 5.58 2 10c0 2.21 1.79 4 4 4h1v2.28c0 .53.21 1.04.59 1.41.38.38.89.59 1.41.59.53 0 1.04-.21 1.41-.59.38-.37.59-.88.59-1.41V14h1c2.21 0 4-1.79 4-4 0-4.42-3.58-8-8-8zm0 14c-.55 0-1-.45-1-1v-2H7c-1.1 0-2-.9-2-2 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1z"/></svg>
                        {proj.forks_count}
                      </span>
                    </div>
                    <motion.a
                      href={proj.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center w-full bg-dark border border-primary-violet/70 text-primary-violet font-medium py-2.5 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-violet hover:to-accent-violet hover:text-light-gray hover:border-transparent"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      View Project
                    </motion.a>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 bg-gradient-to-br from-primary-violet/20 to-accent-violet/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repositories.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-dark-gray via-dark to-dark-gray border border-primary-violet/20 rounded-xl overflow-hidden relative flex flex-col h-full"
                >
                  {/* Glass backdrop effect */}
                  <div className="absolute inset-0 bg-dark-gray/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-primary-violet group-hover:text-accent-violet transition-colors">
                        {repo.name}
                      </h3>
                      <div className="p-1.5 opacity-30 group-hover:opacity-70 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-primary-violet" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M12 20l9-5-9-5-9 5 9 5z"/>
                          <path d="M12 12V4m0 0L3 9m9-5l9 5"/>
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-medium-gray mb-5 flex-1 text-sm leading-relaxed">
                      {repo.description && repo.description.trim().length > 0
                        ? repo.description
                        : <span className="italic text-medium-gray/70">No description provided on GitHub</span>}
                    </p>
                    
                    <div className="flex items-center gap-x-5 gap-y-2 text-xs text-medium-gray mb-6 flex-wrap">
                      {repo.language && (
                        <span className="flex items-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-accent-violet mr-1.5"></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-accent-violet" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-medium-gray" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.58 2 2 5.58 2 10c0 2.21 1.79 4 4 4h1v2.28c0 .53.21 1.04.59 1.41.38.38.89.59 1.41.59.53 0 1.04-.21 1.41-.59.38-.37.59-.88.59-1.41V14h1c2.21 0 4-1.79 4-4 0-4.42-3.58-8-8-8zm0 14c-.55 0-1-.45-1-1v-2H7c-1.1 0-2-.9-2-2 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.1-.9 2-2 2h-2v2c0 .55-.45-1-1-1z"/></svg>
                        {repo.forks_count}
                      </span>
                    </div>
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center w-full bg-dark border border-primary-violet/70 text-primary-violet font-medium py-2.5 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-violet hover:to-accent-violet hover:text-light-gray hover:border-transparent"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      View Project
                    </motion.a>
                  </div>
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 bg-gradient-to-br from-primary-violet/20 to-accent-violet/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projetos;