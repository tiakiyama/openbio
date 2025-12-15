
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
                Conheça nossas Politicas
              </h2>
              

             
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policies */}
      {/* <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-8">Política de Privacidade</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">1. Coleta de Dados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Coletamos apenas os dados necessários para fornecer nossos serviços biométricos, sempre com seu consentimento explícito e em conformidade com a LGPD.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">2. Uso das Informações</h3>
                <p className="text-gray-700 leading-relaxed">
                  Suas informações são utilizadas exclusivamente para identificação e autenticação, nunca sendo compartilhadas com terceiros sem sua autorização.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">3. Segurança dos Dados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos as mais avançadas tecnologias de criptografia e segurança para proteger seus dados biométricos contra acessos não autorizados.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">4. Seus Direitos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados a qualquer momento, conforme estabelecido pela LGPD.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">5. Contato</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre nossa política de privacidade, entre em contato através do email: privacidade@grupoadvance.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <section className="pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-2">Política da Qualidade</h2>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  A Alta Direção estabeleceu, implementou, mantém e comunica uma Política da Qualidade atendendo o estabelecido no requisito 5.2 da NBR ISO 9001:2015: 
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                 A AKIYAMA, comprometida com os seus clientes, seus parceiros de negócios e seus colaboradores, tem sua Política da Qualidade (rev.4) nos seguintes princípios, visando atender às necessidades de suas partes interessadas: 
<br></br><br></br>
                </p>
                <ul className="list-disc list-outside space-y-3 text-gray-700 leading-relaxed ml-5">
                  <li>
                    Fornecer produtos e soluções multibiométricas, investindo constantemente em novas tecnologias; 
                  </li>
                  <li>
                    Gerenciar os riscos do negócio e dos processos internos, compartilhando as melhores práticas de gestão; 
                  </li>
                  <li>
                    Garantir o crescimento sustentável do negócio e a satisfação dos clientes; 
                  </li>
                  <li>
                    Fomentar o desenvolvimento dos seus colaboradores; 
                  </li>
                  <li>
                    Aprimorar continuamente os seus processos.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <b>Obs:</b> A Política da Qualidade da AKIYAMA, tem o seu controle vinculado ao Manual da Qualidade.
                </p>
              </div>

              

              <div>
                <img className="max-w-[200px] mt-10" src="/lovable-uploads/ISO-9001_col.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-2">Política de Privacidade</h2>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  O Grupo Akiyama valoriza sua privacidade e segue as leis aplicáveis para proteger seus dados pessoais. Este documento explica como coletamos, utilizamos e protegemos suas informações durante o uso do nosso site.
                </p>
              </div>


              <div>
                <p className="text-gray-700 leading-relaxed">
                  A Política se aplica a todas as empresas abaixo expressas:
                </p>
                <ul className="list-disc list-outside space-y-3 text-gray-700 leading-relaxed ml-5">
                  <li>
                    a) <b>AKIYAMA S.A. – INDÚSTRIA E COMÉRCIO DE EQUIPAMENTOS ELETRÔNICOS E SISTEMAS S.A (OpenBio)</b> – CNPJ 02.688.100/0001-88 e Filial – CNPJ 02.688.100/0004-20;
                  </li>
                  <li>
                    b) <b>NAX ADMINISTRAÇÃO DE BENS E PARTICIPAÇÕES LTDA</b> – CNPJ 17.809.418/0001-47;
                  </li>
                  <li>
                    c) <b>NATOSAFE TECNOLOGIA DA INFORMACAO S/A</b> – CNPJ 17.908.486/0001-63;
                  </li>
                  <li>
                    d) <b>NEOYAMA INDÚSTRIA E COMÉRCIO DE ELETROELETRÔNICOS LTDA</b> – CNPJ 15.806.916/0001-00;
                  </li>
                  <li>
                    e) <b>ANTHEUS-TECNOLOGIA LTDA</b> – CNPJ 01.167.328/0001-60.
                  </li>
                </ul>
              </div>

              <h2 className="text-black font-bold text-2xl mb-8">1. Coleta e Uso de Dados</h2>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Ao acessar nosso site, coletamos informações automaticamente por meio de cookies, como:
                </p>
                <ul className="list-disc list-outside space-y-3 text-gray-700 leading-relaxed ml-5">
                  <li>Endereço de IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de navegação</li>
                  <li>Dados demográficos gerais (como idioma)</li>
                </ul>
                <br></br>
                <p className="text-gray-700 leading-relaxed">
                  Esses dados são utilizados exclusivamente para:
                </p>
                <ul className="list-disc list-outside space-y-3 text-gray-700 leading-relaxed ml-5">
                  <li>Melhorar sua experiência no site.</li>
                  <li>Analisar comportamento de navegação com ferramentas como o Google Analytics.</li>
                  <li>Otimizar nosso conteúdo e design. Não usamos os dados para identificação direta e nunca compartilhamos ou vendemos suas informações a terceiros.</li>
                </ul>
            
              </div>

              <h2 className="text-black font-bold text-2xl mb-8">2. Privacidade e Segurança</h2>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Adotamos medidas técnicas e administrativas para proteger as informações coletadas contra acessos não autorizados, alterações ou divulgações indevidas. Seus dados são tratados com confidencialidade e utilizados apenas para os fins descritos nesta política.
                </p>
              </div>

              <h2 className="text-black font-bold text-2xl mb-8">3. Uso de Cookies</h2>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Cookies são arquivos armazenados em seu navegador que ajudam a personalizar sua navegação. Utilizamos cookies para:
                </p>
                <ul className="list-disc list-outside space-y-3 text-gray-700 leading-relaxed ml-5">
                  <li>Identificar preferências de navegação.</li>
                  <li>Monitorar o desempenho do site.</li>
                </ul>
                <br></br>
                <p className="text-gray-700 leading-relaxed">
                  Você pode gerenciar ou desativar os cookies em seu navegador, embora isso possa impactar algumas funcionalidades do site.
                </p>
              </div>

              <h2 className="text-black font-bold text-2xl mb-8">4. Seus Direitos</h2>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Você pode:
                </p>
                <ul className="list-disc list-outside space-y-3 text-gray-700 leading-relaxed ml-5">
                  <li>Limitar ou bloquear o uso de cookies nas configurações do navegador.</li>
                  <li>Solicitar correções ou exclusão de informações pessoais enviando um e-mail para nós.</li>
                </ul>
              </div>

              <h2 className="text-black font-bold text-2xl mb-8">5. Alterações na Política</h2>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Esta política pode ser atualizada periodicamente para refletir melhorias ou mudanças legais. A versão mais recente estará sempre disponível nesta página.
                </p>
              </div>

              <h2 className="text-black font-bold text-2xl mb-8">6. Contato</h2>
              <div>
                 <p className="text-gray-700 leading-relaxed">
                  O Encarregado do Grupo Akiyama é a Dra. Cristina Nunes Borges. Informa-se que, em casos de ausências, impedimentos ou vacâncias, a função será exercida pelo Comitê de Segurança da Informação e Privacidade de Dados (CSIP) da Akiyama.
                </p><br></br><br></br>
                <p className="text-gray-700 leading-relaxed">
                  Dúvidas ou solicitações relacionadas à privacidade? Escreva para <b>privacidade@grupoakiyama.com.br</b>.
                </p>
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
