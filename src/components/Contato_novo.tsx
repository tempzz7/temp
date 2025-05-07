import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    enviando: false,
    enviado: false,
    erro: false,
    mensagem: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ enviando: true, enviado: false, erro: false, mensagem: '' });
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      const response = await fetch("https://formsubmit.co/ajax/tempzinxd@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus({ 
          enviando: false, 
          enviado: true, 
          erro: false, 
          mensagem: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
        });
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setFormStatus({ 
        enviando: false, 
        enviado: false, 
        erro: true, 
        mensagem: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.' 
      });
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contato" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-dark-gray to-dark p-8 md:p-12 rounded-xl shadow-2xl shadow-primary-red/20 border border-primary-red/30 relative overflow-hidden"
        >
          {/* Elementos decorativos */}
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary-red/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-accent-red/20 to-transparent rounded-full blur-xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-red mb-6 text-center tracking-wider">
            Entre em Contato
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-accent-red rounded-full mx-auto mb-10"></div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start relative z-10">
            {/* Informações de Contato */}
            <div className="space-y-6 backdrop-blur-sm bg-dark/60 p-6 rounded-lg border border-primary-red/20">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold text-accent-red mb-4"
              >
                Vamos Conversar
              </motion.h3>
              <p className="text-medium-gray leading-relaxed">
                Estou sempre aberto a novas oportunidades e parcerias. Entre em contato
                comigo através do formulário ou pelos canais abaixo.
              </p>

              <div className="space-y-5 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="mailto:tempzinxd@gmail.com"
                  className="flex items-center text-light-gray hover:text-primary-red transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-gray border border-primary-red/30 mr-3">
                    <EnvelopeIcon className="h-5 w-5 text-primary-red group-hover:text-accent-red transition-colors" />
                  </span>
                  tempzinxd@gmail.com
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="https://linkedin.com/in/thiago-costa-queiroz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-light-gray hover:text-primary-red transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-gray border border-primary-red/30 mr-3">
                    <svg
                      className="h-5 w-5 text-primary-red group-hover:text-accent-red transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="https://github.com/tempzz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-light-gray hover:text-primary-red transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-gray border border-primary-red/30 mr-3">
                    <svg
                      className="h-5 w-5 text-primary-red group-hover:text-accent-red transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* Formulário de Contato */}
            <motion.form 
              method="POST"
              action="https://formsubmit.co/tempzinxd@gmail.com"
              onSubmit={handleSubmit} 
              className="space-y-5 backdrop-blur-sm bg-dark/60 p-6 rounded-lg border border-primary-red/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Campos ocultos para configuração do FormSubmit */}
              <input type="hidden" name="_subject" value="Novo contato do Portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://tempzz7.github.io/#contato" />
              <input type="hidden" name="_autoresponse" value="Obrigado pelo contato! Recebemos sua mensagem e responderemos em breve." />
              
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-light-gray mb-1.5"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-primary-red/50 rounded-lg text-light-gray placeholder-medium-gray/70 focus:ring-2 focus:ring-accent-red focus:border-accent-red transition-all"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-gray mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-primary-red/50 rounded-lg text-light-gray placeholder-medium-gray/70 focus:ring-2 focus:ring-accent-red focus:border-accent-red transition-all"
                  placeholder="seu.email@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-light-gray mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-primary-red/50 rounded-lg text-light-gray placeholder-medium-gray/70 focus:ring-2 focus:ring-accent-red focus:border-accent-red transition-all resize-none"
                  placeholder="Sua mensagem..."
                  required
                ></textarea>
              </div>
              
              {formStatus.enviado && (
                <div className="py-3 px-4 rounded-lg bg-green-900/40 border border-green-600/40 text-green-400">
                  {formStatus.mensagem}
                </div>
              )}
              
              {formStatus.erro && (
                <div className="py-3 px-4 rounded-lg bg-red-900/40 border border-red-600/40 text-red-400">
                  {formStatus.mensagem}
                </div>
              )}
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus.enviando}
                className={`w-full flex items-center justify-center bg-gradient-to-r from-primary-red to-accent-red text-light-gray font-semibold py-3.5 px-6 rounded-lg hover:shadow-lg hover:shadow-primary-red/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2 focus:ring-offset-dark-gray ${
                  formStatus.enviando ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus.enviando ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
