import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Bolha {
  id: number;
  top: string;
  left: string;
  size: string;
  cor: string;
  animationDuration: string;
  animationDelay: string;
  rotation: string;
  scale: number;
  blur: string;
  opacity: number;
}

const BolhasOtimizadas: React.FC = () => {
  const [bolhas, setBolhas] = useState<Bolha[]>([]);
  const [estouradas, setEstouradas] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  // Tons de roxo acalmantes com gradientes suaves
  const cores = [
    'linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(109, 40, 217, 0.25))', // Roxo médio para roxo escuro
    'linear-gradient(135deg, rgba(167, 139, 250, 0.25), rgba(139, 92, 246, 0.25))', // Lilás para violeta
    'linear-gradient(135deg, rgba(192, 132, 252, 0.25), rgba(168, 85, 247, 0.25))', // Lavanda para púrpura
    'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(124, 58, 237, 0.25))', // Violeta para roxo
    'linear-gradient(135deg, rgba(216, 180, 254, 0.25), rgba(192, 132, 252, 0.25))', // Lilás claro para lavanda
    'linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(109, 40, 217, 0.25))', // Roxo para roxo escuro
    'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(147, 51, 234, 0.25))', // Púrpura para roxo médio
    'linear-gradient(135deg, rgba(109, 40, 217, 0.25), rgba(91, 33, 182, 0.25))', // Roxo escuro para indigo
  ];

  // Criar uma nova bolha em posição segura com efeitos visuais acalmantes
  const criarBolha = () => {
    if (!containerRef.current) return null;
    
    const container = containerRef.current;
    const viewportWidth = container.clientWidth;
    const viewportHeight = container.clientHeight;
    
    // Definir tamanho da bolha - tamanhos mais consistentes para efeito acalmante
    const size = Math.floor(Math.random() * 40) + 40; // 40-80px - tamanhos mais consistentes
    
    // Garantir que a bolha esteja COMPLETAMENTE dentro da tela com margem extra de segurança
    // Margem de segurança de 3x o tamanho da bolha para evitar qualquer corte nas bordas
    const margin = size * 3;
    
    // Calcular área segura com margem extra
    const safeAreaWidth = viewportWidth - margin * 2;
    const safeAreaHeight = viewportHeight - margin * 2;
    
    // Verificar se temos espaço suficiente para criar a bolha
    if (safeAreaWidth <= 0 || safeAreaHeight <= 0) {
      // Se não houver espaço suficiente, criar uma bolha menor
      return {
        id: idCounter.current++,
        size: '30px',
        top: '50%',
        left: '50%',
        cor: cores[0],
        rotation: '0deg',
        scale: 1,
        blur: '0px',
        opacity: 0.3,
        animationDuration: '10s',
        animationDelay: '0s',
      };
    }
    
    // Posição dentro da área segura + margem de segurança
    const left = `${margin + (Math.random() * safeAreaWidth)}px`;
    const top = `${margin + (Math.random() * safeAreaHeight)}px`;
    
    // Efeitos visuais acalmantes
    const rotation = Math.floor(Math.random() * 180); // Rotação mais suave
    const scale = 0.95 + Math.random() * 0.1; // Escala mais consistente (0.95-1.05)
    const blur = Math.floor(Math.random() * 2); // Desfoque mínimo (0-1px)
    const opacity = 0.3 + Math.random() * 0.2; // Opacidade mais baixa e suave (0.3-0.5)
    
    // Selecionar cor com rotação personalizada
    const corBase = cores[Math.floor(Math.random() * cores.length)];
    const cor = corBase.replace('135deg', `${rotation}deg`);
    
    return {
      id: idCounter.current++,
      size: `${size}px`,
      top,
      left,
      cor,
      rotation: `${rotation}deg`,
      scale,
      blur: `${blur}px`,
      opacity,
      animationDuration: `${Math.random() * 10 + 15}s`, // 15-25s para movimento muito mais lento e relaxante
      animationDelay: `${Math.random() * 5}s`,
    };
  };

  // Detectar tamanho da tela para responsividade
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Função para verificar se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar inicialmente
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Limpar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Criar bolhas iniciais - quantidade adaptada ao tamanho da tela
  useEffect(() => {
    // Esperar um momento para garantir que o container esteja renderizado
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const novasBolhas: Bolha[] = [];
        // Reduzir a quantidade de bolhas em dispositivos móveis para melhorar o desempenho
        const quantidadeBolhas = isMobile ? 6 : 15;
        
        for (let i = 0; i < quantidadeBolhas; i++) {
          const novaBolha = criarBolha();
          if (novaBolha) {
            novasBolhas.push(novaBolha);
          }
        }
        setBolhas(novasBolhas);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Tocar som de estouro de bolha simples e agradável
  const tocarSomEstouro = useCallback(() => {
    try {
      // Criar contexto de áudio
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Criar um oscilador para o som de bolha
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'sine'; // Onda senoidal para som suave
      
      // Configuração de frequência para som de bolha
      oscillator.frequency.setValueAtTime(620, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(220, audioContext.currentTime + 0.1);
      
      // Controle de volume
      const gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(0.02, audioContext.currentTime); // 2% de volume
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);
      
      // Conectar e tocar
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
      // Silenciar erros de áudio
    }
  }, []);

  // Estourar uma bolha
  const estourarBolha = useCallback((id: number) => {
    // Tocar som de estouro
    tocarSomEstouro();
    
    // Adicionar bolha à lista de estouradas
    setEstouradas(prev => [...prev, id]);
    
    // Remover a bolha após a animação de estouro
    setTimeout(() => {
      setBolhas(prev => {
        // Remover a bolha estourada
        const novasBolhas = prev.filter(bolha => bolha.id !== id);
        
        // Adicionar uma nova bolha para substituir
        const novaBolha = criarBolha();
        if (novaBolha) {
          return [...novasBolhas, novaBolha];
        }
        return novasBolhas;
      });
      
      setEstouradas(prev => prev.filter(bolhaId => bolhaId !== id));
    }, 500);
  }, [tocarSomEstouro, criarBolha]);

  return (
    <div className="bolhas-container" ref={containerRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {bolhas.map((bolha) => {
        const estourada = estouradas.includes(bolha.id);
        
        return (
          <motion.div
            key={bolha.id}
            className={`bolha ${estourada ? 'estourada' : ''}`}
            style={{
              width: bolha.size,
              height: bolha.size,
              top: bolha.top,
              left: bolha.left,
              background: bolha.cor,
              boxShadow: `0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 15px rgba(147, 51, 234, 0.3)`,
              borderRadius: '50%', // Garante que seja perfeitamente redonda
              position: 'absolute',
              cursor: 'pointer',
              zIndex: 10,
              backdropFilter: `blur(${bolha.blur})`,
              opacity: bolha.opacity,
              transform: `rotate(${bolha.rotation})`,
              border: '1px solid rgba(147, 51, 234, 0.3)',
              pointerEvents: estourada ? 'none' : 'auto'
            }}
            animate={{
              scale: estourada ? [1, 1.5, 0] : [1, 1.02, 0.98, 1], // Pulsação muito suave
              opacity: estourada ? [1, 0] : [bolha.opacity, bolha.opacity * 0.9, bolha.opacity], // Pulsação de opacidade suave
              rotate: estourada ? [0, 45] : [0, 2, -2, 0], // Rotação mínima
              boxShadow: estourada ? [
                `0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 15px rgba(147, 51, 234, 0.3)`,
                `0 0 30px rgba(147, 51, 234, 0.4), inset 0 0 20px rgba(147, 51, 234, 0.5)`,
                `0 0 5px rgba(147, 51, 234, 0), inset 0 0 5px rgba(147, 51, 234, 0)`
              ] : [
                `0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 15px rgba(147, 51, 234, 0.3)`,
                `0 0 15px rgba(147, 51, 234, 0.15), inset 0 0 10px rgba(147, 51, 234, 0.25)`,
                `0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 15px rgba(147, 51, 234, 0.3)`
              ],
              y: estourada ? [0, -10] : [0, -5, 5, 0], // Movimento vertical suave
            }}
            transition={{
              duration: estourada ? 0.5 : Number(bolha.animationDuration.replace('s', '')),
              repeat: estourada ? 0 : Infinity,
              delay: estourada ? 0 : Number(bolha.animationDelay.replace('s', '')),
              ease: 'easeInOut', // Movimento mais suave
            }}
            onClick={() => !estourada && estourarBolha(bolha.id)}
            whileHover={{
              scale: 1.03,
              boxShadow: `0 0 25px rgba(147, 51, 234, 0.4), inset 0 0 20px rgba(147, 51, 234, 0.5)`,
              border: '1px solid rgba(147, 51, 234, 0.5)'
            }}
          />
        );
      })}
      
      <style dangerouslySetInnerHTML={{ __html: `
        .bolha {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
        }
        
        .bolha:hover {
          transform: scale(1.05);
        }
      `}} />
    </div>
  );
};

export default BolhasOtimizadas;
