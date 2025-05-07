import React, { useEffect } from 'react';
import Cabecalho from './components/Cabecalho.tsx';
import Hero from './components/Hero.tsx';
import Projetos from './components/Projetos.tsx';
import Contato from './components/Contato.tsx';
import AnimatedSection from './components/AnimatedSection.tsx';

/**
 * Componente principal da aplicação.
 * Estrutura a página com cabeçalho fixo e conteúdo centralizado.
 */
const App = () => {
  // Efeito para fundo paralaxe suave
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.body.style.backgroundPositionY = `${scrollY * 0.05}px`;
    };

    // Adiciona o event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-light-gray flex flex-col">
      {/* Cabeçalho fixo no topo */}
      <Cabecalho />
      
      {/* Conteúdo principal centralizado e responsivo */}
      <main className="flex-1 flex flex-col items-center pt-24 px-4">
        <div className="w-full max-w-5xl space-y-16 md:space-y-24">
          <Hero />
          
          <AnimatedSection delay={0.2}>
            <Projetos />
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <Contato />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default App;
