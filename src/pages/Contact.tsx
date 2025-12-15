
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Logo } from '@/components/Logo';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyType: 'private',
    nome: '',
    sobrenome: '',
    empresa: '',
    email: '',
    telefone: '',
    estado: '',
    mensagem: '',
    contactPreference: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold mb-8 lg:text-6xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Fale conosco
          </motion.h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <AnimatedCard>
            <div className="bg-black rounded-lg p-8 relative overflow-hidden border border-gray-800">
              {/* Background image */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'url(/lovable-uploads/5ec49cea-c136-42d6-9491-002adccbeaab.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>

              {/* Purple gradient overlay */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600 to-transparent opacity-60"></div>

              <form onSubmit={handleSubmit} className="relative z-10">
                {/* Company Type */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Label className="text-white text-lg font-medium mb-4 block">Tipo de Empresa</Label>
                  <div className="flex gap-6">
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="companyType"
                        value="private"
                        checked={formData.companyType === 'private'}
                        onChange={handleInputChange}
                        className="mr-2 w-4 h-4 text-[#7918f9]"
                      />
                      Setor Privado
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="companyType"
                        value="public"
                        checked={formData.companyType === 'public'}
                        onChange={handleInputChange}
                        className="mr-2 w-4 h-4 text-[#7918f9]"
                      />
                      Setor Público/Governo
                    </label>
                  </div>
                </motion.div>

                {/* Personal Data */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Label className="text-white text-lg font-medium mb-4 block">Dados</Label>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="nome" className="text-white text-sm mb-2 block">Nome</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="bg-white border-none text-black"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="sobrenome" className="text-white text-sm mb-2 block">Sobrenome</Label>
                      <Input
                        id="sobrenome"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleInputChange}
                        className="bg-white border-none text-black"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="empresa" className="text-white text-sm mb-2 block">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="bg-white border-none text-black"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="email" className="text-white text-sm mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border-none text-black"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="telefone" className="text-white text-sm mb-2 block">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="bg-white border-none text-black"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="estado" className="text-white text-sm mb-2 block">Estado</Label>
                      <Input
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleInputChange}
                        className="bg-white border-none text-black"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="mensagem" className="text-white text-sm mb-2 block">Descreva a solução que precisa</Label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 rounded-md border-none resize-none text-black"
                      required
                    />
                  </div>
                </motion.div>

                {/* Contact Preference */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Label className="text-white text-lg font-medium mb-4 block">Preferência de contato</Label>
                  <div className="flex gap-6">
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 w-4 h-4 text-[#7918f9]"
                      />
                      Email
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="whatsapp"
                        checked={formData.contactPreference === 'whatsapp'}
                        onChange={handleInputChange}
                        className="mr-2 w-4 h-4 text-[#7918f9]"
                      />
                      WhatsApp
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 w-4 h-4 text-[#7918f9]"
                      />
                      Ligação
                    </label>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <AnimatedButton type="submit" className="w-auto">
                    Enviar
                  </AnimatedButton>
                </motion.div>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <motion.h2
            className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12"
            style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transformamos tecnologia em segurança
          </motion.h2>
          <div
            className="text-white text-lg lg:text-2xl mb-6"
            style={{ textShadow: '0px 1px 8px rgba(0,0,0,0.8)' }}
          >
            Entre em contato com nossa equipe pelo telefone:<br />
            <a href="tel:+554130280222" className="text-[#7918f9] font-bold text-3xl mt-2 inline-block">
              (41) 3028-0222
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
