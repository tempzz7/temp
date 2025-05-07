import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const inputVariants = {
  focus: { scale: 1.02, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } }
};

const Contato = () => {  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    sending: false,
    sent: false,
    error: false,
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ sending: true, sent: false, error: false, message: '' });
    
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
          sending: false, 
          sent: true, 
          error: false, 
          message: 'Message sent successfully! We will contact you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setFormStatus({ 
        sending: false, 
        sent: false, 
        error: true, 
        message: 'An error occurred while sending your message. Please try again.' 
      });
      console.error('Error sending the form:', error);
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
    <section id="contact" className="py-28 bg-dark relative">      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-violet/30 to-transparent"></div>
        <div className="absolute -top-40 right-20 w-80 h-80 bg-primary-violet/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-accent-violet/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl md:text-5xl font-extrabold mb-4 relative">
            <span className="text-gradient">Get in</span>
            <span className="ml-2 text-light-gray">Touch</span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary-violet/80 via-accent-violet to-transparent"
            ></motion.div>
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            I'm always open to new opportunities and partnerships. Let's talk!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-xl relative overflow-hidden"
        >          {/* Main card with glassmorphism effect */}
          <div className="p-1 bg-gradient-to-br from-primary-violet/50 via-accent-violet/30 to-transparent rounded-xl">
            <div className="backdrop-blur-md bg-dark-gray/30 rounded-lg p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
                {/* Contact Information */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gradient mb-4">
                    Let's Chat
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    I'm always looking for new challenges and opportunities.
                    Get in touch to discuss your project or idea.
                  </p>

                  <div className="space-y-5 pt-2">
                    <motion.a
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:tempzinxd@gmail.com"
                      className="flex items-center text-light-gray hover:text-accent-violet transition-colors group"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark border border-primary-violet/30 mr-3 group-hover:border-primary-violet transition-colors">
                        <EnvelopeIcon className="h-5 w-5 text-primary-violet group-hover:text-accent-violet transition-colors" />
                      </span>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-medium-gray">tempzinxd@gmail.com</div>
                      </div>
                    </motion.a>
                      <motion.a
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://www.linkedin.com/in/thiago-costa-queiroz-4a1213282/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-light-gray hover:text-accent-violet transition-colors group"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark border border-primary-violet/30 mr-3 group-hover:border-primary-violet transition-colors">
                        <svg
                          className="h-5 w-5 text-primary-violet group-hover:text-accent-violet transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-medium-gray">linkedin.com/in/thiago-costa-queiroz-4a1213282</div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://github.com/tempzz7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-light-gray hover:text-accent-violet transition-colors group"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-dark border border-primary-violet/30 mr-3 group-hover:border-primary-violet transition-colors">
                        <svg
                          className="h-5 w-5 text-primary-violet group-hover:text-accent-violet transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-medium-gray">github.com/tempzz7</div>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>                {/* Contact Form */}
                <motion.form
                  method="POST"
                  action="https://formsubmit.co/tempzinxd@gmail.com"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-5 backdrop-blur-sm border border-primary-violet/20 p-6 rounded-lg bg-dark/30"
                >
                  {/* Hidden fields for FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Portfolio Contact" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://tempzz7.github.io/#contato" />
                  <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I've received your message and will respond soon." />
                  
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-1.5 transition-colors duration-300 ${focusedField === 'name' ? 'text-accent-violet' : 'text-light-gray'}`}
                    >
                      Name
                    </label>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'name' ? 'focus' : 'blur'}
                    >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-dark border border-primary-violet/30 rounded-lg text-light-gray placeholder-medium-gray/70 focus:ring-2 focus:ring-accent-violet focus:border-accent-violet transition-all"
                        placeholder="Your full name"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1.5 transition-colors duration-300 ${focusedField === 'email' ? 'text-accent-violet' : 'text-light-gray'}`}
                    >
                      Email
                    </label>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'email' ? 'focus' : 'blur'}
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-dark border border-primary-violet/30 rounded-lg text-light-gray placeholder-medium-gray/70 focus:ring-2 focus:ring-accent-violet focus:border-accent-violet transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1.5 transition-colors duration-300 ${focusedField === 'message' ? 'text-accent-violet' : 'text-light-gray'}`}
                    >
                      Message
                    </label>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'message' ? 'focus' : 'blur'}
                    >
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-dark border border-primary-violet/30 rounded-lg text-light-gray placeholder-medium-gray/70 focus:ring-2 focus:ring-accent-violet focus:border-accent-violet transition-all resize-none"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </motion.div>
                  </div>                    {formStatus.sent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-3 px-4 rounded-lg bg-green-900/40 border border-green-500/30 text-green-400"
                    >
                      {formStatus.message}
                    </motion.div>
                  )}
                  
                  {formStatus.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-3 px-4 rounded-lg bg-red-900/40 border border-red-500/30 text-red-400"
                    >
                      {formStatus.message}
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(124, 58, 237, 0.2)" }}
                    whileTap={{ scale: 0.97 }}
                    disabled={formStatus.sending}
                    className={`w-full flex items-center justify-center bg-gradient-to-r from-primary-violet to-accent-violet text-light-gray font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet focus:ring-offset-2 focus:ring-offset-dark ${
                      formStatus.sending ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus.sending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
