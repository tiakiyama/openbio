import React from 'react';
import { LogoFooter } from './Logo';
import { Link } from 'react-router-dom';
import { Phone, Mail, Headset, Globe, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 border-t border-gray-800 lg:py-16">
      <div className="mx-auto w-10/12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <LogoFooter className="mb-8" />
          </div>
          
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:text-lg">Soluções</h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
              <li><Link to="/solucoes/cadastramento-eleitoral" className="hover:text-white xl:text-sm 2xl:text-base">Cadastramento Eleitoral | TSE</Link></li>
              <li><Link to="/solucoes/instituicoes-financeiras" className="hover:text-white xl:text-sm 2xl:text-base">Instituições Financeiras | Banco do Brasil</Link></li>
              <li><Link to="/solucoes/controle-fronteiras" className="hover:text-white xl:text-sm 2xl:text-base">Controle de Fronteiras | Polícia Federal</Link></li>
            </ul>
          </div>
          
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:text-lg">Quem Somos</h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
              <li><Link to="/quem-somos" className="hover:text-white xl:text-sm 2xl:text-base">Nosso CEO</Link></li>
              <li><Link to="https://www.linkedin.com/company/openbioo/" target="_blank" className="hover:text-white xl:text-sm 2xl:text-base">Trabalhe conosco</Link></li>
            </ul>
          </div>
          
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:text-lg">Termos e Política</h3>
            <ul className="space-y-2 text-sm text-gray-400 lg:text-base lg:space-y-3">
              <li><Link to="/privacidade" className="hover:text-white xl:text-sm 2xl:text-base">Políticas</Link></li>
            </ul>
          </div>
        </div>

        {/* Contato e Atendimento */}
        <div className="mt-10 pt-10 border-t border-gray-800 lg:mt-12 lg:pt-12">
          <h3 className="font-bold mb-6 lg:text-lg">Fale Conosco</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            {/* Telefones */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Atendimento</p>
                  <a href="tel:+554130280222" className="text-sm text-gray-300 hover:text-white transition-colors">
                    (41) 3028-0222
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Headset size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Suporte</p>
                  <a href="tel:08006020222" className="text-sm text-gray-300 hover:text-white transition-colors">
                    0800 602 0222
                  </a>
                </div>
              </div>
            </div>

            {/* E-mails */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Comercial</p>
                  <a href="mailto:comercial@akiyama.com.br" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                    comercial@akiyama.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Suporte ao Cliente</p>
                  <a href="mailto:suporteaocliente@akiyama.com.br" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                    suporteaocliente@akiyama.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Licitações + Portal */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Licitações</p>
                  <a href="mailto:licita@akiyama.com.br" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                    licita@akiyama.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Portal de Atendimento</p>
                  
                    href="https://portal-cliente.akiyamaid.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Acessar portal
                  </a>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-[#7918f9] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Horário de Atendimento</p>
                  <p className="text-sm text-gray-300">
                    Segunda a sexta-feira,<br />das 8h às 18h
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-500 lg:text-center lg:mt-12 lg:pt-8 lg:border-t lg:border-gray-800">
          <Link to="/privacidade" className="hover:text-white">Termos e Política</Link>
          <span className="mx-4">|</span>
          Copyright © 2025
        </div>
      </div>
    </footer>
  );
};
