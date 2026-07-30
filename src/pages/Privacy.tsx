import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';

const Privacy = () => {
  return (
    
    <div className="min-h-screen bg-black text-black font-objective">
      <NavBar />

      {/* Header Section */}
      {/* <section className="pt-32 pb-16 px-5 text-white mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
            Compromisso com a Privacidade
          </h1>
          <p className="text-lg mb-8">
            Levamos a sério a segurança dos seus dados.
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-base leading-relaxed">
              Na OpenBio, aplicamos tecnologias avançadas para proteger sua privacidade com total transparência e em conformidade com as normas vigentes.
            </p>
            <p className="text-base leading-relaxed mb-8">
              Saiba como tratamos suas informações de forma responsável e segura.
            </p>

            <Button className="mb-8">Saiba mais</Button>
          </div>
        </div>
      </section> */}

      {/* Privacy Content */}
      <section className="pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-lg p-8 relative overflow-hidden h-[400px] items-end justify-start flex" style={{
            backgroundImage: '',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-white font-bold text-2xl mb-6">
                Conheça nossas Políticas
              </h2>
              

             
            </div>
          </div>
        </div>
      </section>

      {/* Política da Qualidade */}
      <section className="pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-6">Política da Qualidade do Grupo Akiyama</h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                A Política da Qualidade do Grupo Akiyama estabelece os princípios, diretrizes e compromissos que orientam suas atividades com foco no atendimento aos requisitos aplicáveis, na satisfação dos clientes e demais partes interessadas, na melhoria contínua dos processos e no fortalecimento do Sistema de Gestão da Qualidade.
              </p>

              <p className="text-gray-700 leading-relaxed">
                A política abrange todas as empresas do grupo, seus processos, produtos, serviços, colaboradores e, quando aplicável, terceiros que atuem em seu nome. Seu propósito é assegurar que as soluções oferecidas sejam desenvolvidas e disponibilizadas com qualidade, confiabilidade, inovação, eficiência e alinhamento estratégico.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Entre seus fundamentos estão o atendimento às exigências legais e regulatórias, o foco no cliente, a confiabilidade dos produtos e serviços, o investimento em inovação e tecnologia, a gestão de riscos e oportunidades, o desenvolvimento de pessoas e a busca permanente pela melhoria contínua e pelo crescimento sustentável do negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img className="max-w-[160px] sm:max-w-[200px]" src="/lovable-uploads/ISO-9001_col.jpg"></img>
                <img className="max-w-[160px] sm:max-w-[200px]" src="/lovable-uploads/selo02.jpg"></img>
              </div>

              <div className="pt-2">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.open('/lovable-uploads/PO-042-05-Politica-da-Qualidade-Grupo-Akiyama.pdf', '_blank', 'noopener,noreferrer');
                  }}
                >
                  Acessar política completa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Política Antissuborno, Anticorrupção e de Brindes e Presentes */}
      <section className="pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-6">Política Antissuborno, Anticorrupção e de Brindes e Presentes do Grupo Akiyama</h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                O Grupo Akiyama adota diretrizes para prevenir e combater práticas de suborno e corrupção em todas as suas operações, reforçando seu compromisso com a ética, a integridade, a transparência e o cumprimento da legislação aplicável.
              </p>

              <p className="text-gray-700 leading-relaxed">
                A política estabelece regras para colaboradores, empresas do grupo e parceiros de negócio, com orientações sobre conduta ética nas relações comerciais, especialmente nas interações com agentes públicos. Também define critérios para oferta e recebimento de brindes e presentes, de forma a evitar conflitos de interesse, vantagens indevidas e riscos à integridade das decisões corporativas.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Entre os principais pontos, destacam-se a proibição de qualquer forma de suborno, a exigência de transparência e registro das práticas relacionadas a brindes e presentes, a realização de treinamentos periódicos, a disponibilização de canal seguro para denúncias e a aplicação de medidas disciplinares em caso de descumprimento.
              </p>

              <div className="pt-2">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.open('/lovable-uploads/PO-036-00-Politica-Antissuborno-Anticorrupcao-e-de-Brindes-e-Presentes-do-Grupo-Akiyama.pdf', '_blank', 'noopener,noreferrer');
                  }}
                >
                  Acessar política completa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Privacidade */}
      <section className="pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-6">Política de Privacidade do Grupo Akiyama (Sites)</h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                O Grupo Akiyama está comprometido com a proteção da privacidade e com o tratamento responsável dos dados pessoais, em conformidade com a legislação aplicável. Esta política descreve como as informações coletadas durante a navegação em seus sites são utilizadas, protegidas e gerenciadas.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Durante o uso do site, podem ser coletados dados de navegação por meio de cookies e ferramentas de análise, como endereço de IP, tipo de navegador, dispositivo utilizado, páginas acessadas e preferências de idioma. Essas informações são utilizadas para melhorar a experiência do usuário, analisar o desempenho do site e aprimorar conteúdos e funcionalidades, sem finalidade de identificação direta ou comercialização de dados.
              </p>

              <p className="text-gray-700 leading-relaxed">
                A política também reforça os princípios de privacidade adotados pelo Grupo Akiyama, incluindo finalidade, necessidade, adequação, transparência, segurança, prevenção e responsabilização. Além disso, estabelece diretrizes para segurança da informação, compartilhamento com terceiros, descarte seguro de dados e gestão de incidentes envolvendo informações pessoais.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Os usuários podem gerenciar cookies em seus navegadores e exercer seus direitos relacionados à privacidade por meio dos canais disponibilizados pela empresa. O Grupo Akiyama mantém medidas técnicas e administrativas de proteção e conta com estrutura específica para governança e atendimento de questões relacionadas à privacidade de dados.
              </p>

              <div className="pt-2">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.open('/lovable-uploads/PO-028-01-Politica-de-Privacidade-do-Grupo-Akiyama-Sites.pdf', '_blank', 'noopener,noreferrer');
                  }}
                >
                  Acessar política completa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <h2 className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12" style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}>
            Transformamos tecnologia em segurança
          </h2>
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

export default Privacy;
