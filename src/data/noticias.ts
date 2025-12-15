// src/data/noticias.ts
export type Noticia = {
  slug: string;
  titulo: string;
  subtitulo: string;
  resumo: string;          // usado no card/lista
  data: string;            // "YYYY-MM-DD"
  capa: string;            // imagem de capa (card/hero)
  autor?: string;
  fonteTitulo?: string;
  fonteUrl?: string;

  // ====== CONTEÚDO INTERNO ======
  conteudoHtml: string;    // corpo do post (HTML)
};

export const noticias: Noticia[] = [

  {
    slug: "parabens-curitiba",
    titulo: "Curitiba: Reconhecimento nacional e o papel da novação no futuro",
    subtitulo: "Curitiba: Reconhecimento nacional e o papel da novação no futuro",
    resumo:
      "É com grande entusiasmo que celebramos a recente conquista de Curitiba, que recebeu o Selo Diamante em Ecossistema de Inovação no Connected Smart Cities 2025",
    data: "2025-10-03",
    capa: "/lovable-uploads/jardim_botanico_foto_rdziura-0424.jpg",
    autor: "",
    conteudoHtml: `
      <p>É com grande entusiasmo que celebramos a recente conquista de Curitiba, que recebeu o Selo Diamante em Ecossistema de Inovação no Connected Smart Cities 2025, realizado em São Paulo. Este reconhecimento destaca a cidade como líder em práticas de governança tecnológica, inovação e colaboração entre poder público, iniciativa privada, universidades e sociedade civil.</p>
      <p>O Vale do Pinhão, ecossistema de inovação de Curitiba, é um exemplo de como a colaboração entre diferentes setores pode impulsionar o desenvolvimento sustentável e a transformação digital. A cidade, que já é reconhecida como a mais inteligente do Brasil, continua a investir em soluções inovadoras que melhoram a qualidade de vida de seus cidadãos.</p>
      <p>Na OpenBio, compartilhamos dessa visão e compromisso com a inovação. Como parte do Grupo Akiyama, somos pioneiros em soluções de identificação biométrica, oferecendo tecnologias avançadas que contribuem para a transformação digital em diversos setores. Nosso trabalho está alinhado com os princípios que tornam Curitiba uma referência em inovação: colaboração, transparência e busca constante por soluções inteligentes</p>
      <p>Parabenizamos Curitiba por essa conquista significativa e reafirmamos nosso compromisso em contribuir para o desenvolvimento de soluções inovadoras que promovam a segurança, eficiência e qualidade de vida. Estamos juntos nessa jornada de transformação digital.</p>
    `,
  },

  {
    slug: "id4africa",
    titulo: "Empresas de biometria e identificação digital têm forte presença na ID4Africa 2022",
    subtitulo: "Empresas de biometria e identificação digital têm forte presença na ID4Africa 2022",
    resumo:
      "Enquanto os negócios durante a Reunião Geral Aumentada do ID4Africa 2022 eram conduzidos em plenárias e salas de workshop",
    data: "2025-06-10",
    capa: "/lovable-uploads/02.webp",
    autor: "Ayang Macdonald",
    conteudoHtml: `
      <p>Enquanto os negócios durante a Reunião Geral Aumentada do ID4Africa 2022 eram conduzidos em plenárias e salas de workshop, a área de exposição também estava movimentada com empresas fornecedoras de soluções de identidade digital e biometria, exibindo e demonstrando seus produtos. Havia uma mistura de empresas multinacionais, regionais e locais.</p>

<p>Instaladas em estandes durante os dois dias de evento, com representantes presentes para receber os visitantes, muitas dessas empresas — oferecendo diferentes soluções em identidade digital e biometria — estiveram em Marrakesh para apresentar novas integrações, produtos e serviços, enquanto outras exibiram soluções já existentes em busca de parcerias e novas oportunidades de mercado.</p>

<p>Seguindo os temas gerais do evento internacional, a maioria dos estandes se dedicou a soluções para registro biométrico e emissão de documentos de identidade — como no caso de BioRugged, Idemia e Veridos — ou a soluções específicas para aplicações como eleições, controle de fronteiras ou registro de nascimento, incluindo Thales, Travizory, Laxton, iDakto e Prooftag. Novos produtos também foram lançados com tecnologias biométricas da Integrated Biometrics, Jenetric e Credence.</p>

<p>Diferentes scanners da Integrated Biometrics em nova solução portátil da Akiyama<br>
A solução de captura biométrica Vero Match, da Akiyama, com o scanner de impressões digitais Five-O da Integrated Biometrics, foi lançada no ID4Africa 2022 como expansão da solução portátil desenvolvida inicialmente para a polícia brasileira em 2018 com scanners Kojak.</p>

<p>A nova solução inclui um smartphone, o scanner da IB e o Sistema Automatizado de Identificação Biométrica (ABIS) da Idemia, para processamento rápido de dados biométricos em ambientes congestionados, como controles de imigração e barreiras policiais.</p>

<p>“Sua configuração e tamanho exclusivos, junto com a robustez, baixo consumo de energia e usabilidade do Five-O, fazem do VERO MATCH um dos produtos mais flexíveis do mercado”, disse David Gerulski, EVP da Integrated Biometrics. “Estamos satisfeitos em fazer parte dessa solução diferenciada.”</p>

<p>BioRugged apresenta dispositivo de registro Marque 5.1<br>
Expositor constante nos eventos ID4Africa, a fornecedora de soluções móveis de biometria BioRugged apresentou seus produtos em dois estandes. As soluções incluíam terminais e dispositivos de registro biométrico; soluções de KYC e registro; biometria de íris, comportamental e de voz, além de soluções completas para documentos de identidade, censos e carteiras de motorista.</p>

<p>Um novo dispositivo chamado Marque 5.1 foi destaque. Trata-se de um sistema de registro de visitantes em desktop, com scanner de impressões digitais duplo, pad de assinatura e câmera NFC/MIFARE para capturar imagens de alta resolução de rostos e documentos. O dispositivo 5-em-1 pode ser conectado a qualquer computador com Windows 10 ou terminal Android compatível para registro móvel. Também foram exibidos os kits Marque-Bio 10 e Mark 3.</p>

<p>A BioRugged anunciou em maio que seu sistema de câmera facial atingiu conformidade MOSIP.</p>

<p>Thales apresenta suíte para eleições<br>
Entre as soluções expostas pela Thales estava sua suíte biométrica completa para eleições, que pode ser utilizada por governos desde o registro de eleitores até a identificação, gestão e verificação de votos. Um representante afirmou que a solução está sendo oferecida a países africanos que terão eleições em breve.</p>

<p>Outros produtos apresentados incluíram a Thales ID Wallet e sua linha de scanners biométricos, como o Thales Cogent Multifinger Scanner CS500f, Cogent Iris Scanner CIS-202 e Cogent Fingerprint Scanner CSD101i, além de produtos integrados ao ecossistema MOSIP.</p>

<p>Produtos de registro biométrico da Idemia<br>
O estande da Idemia apresentou diversos produtos de registro usados para criar credenciais de identidade, incluindo o IDstudio, para fotos de alta qualidade, e o Universal Portal System, ponto de acesso único a serviços digitais governamentais.</p>

<p>Ismail Chraibi, diretor-geral da Idemia Marrocos e do Magrebe, demonstrou o funcionamento do IDway, solução para gestão de identidade populacional. Foram exibidos também exemplos de documentos físicos e digitais produzidos pela empresa para diferentes países, como carteiras de identidade, passaportes, carteiras de motorista e o Mobile ID.</p>

<p>Laxton exibe dispositivos biométricos<br>
A Laxton apresentou dispositivos portáteis, tablets, desktops, kits biométricos e quiosques. Kais Ben Amor, gerente de desenvolvimento para a África árabe e francesa, destacou a satisfação em retornar ao evento após três anos, afirmando que o estande recebeu muitos visitantes.</p>

<p>Travizory demonstra solução de fronteira sem atrito<br>
A Travizory demonstrou sua plataforma de gestão de visitantes usada nas Seychelles. Segundo Ygor Lutz, cofundador e diretor de receitas, a solução pode verificar certificados de saúde, validar viajantes, emitir IDs seguras, permitir passagens sem contato ou papel, mapear visitantes durante a estadia e coletar inteligência acionável em tempo real.</p>

<p>Veridos apresenta solução biométrica VeriDNA<br>
A Veridos apresentou seu sistema biométrico de identificação baseado em DNA, lançado no World Police Summit 2022. O VeriDNA gera um ID de DNA de forma simples e rápida, podendo ser usado para identificação de cidadãos, investigações forenses e manutenção da ordem pública.</p>

<p>Produtos de IAM da iDakto<br>
A iDakto exibiu soluções de Identidade e Acesso para identidades digitais soberanas, com foco em segurança, privacidade e autenticação. Apresentou também a solução iDCluster, para criação de plataformas de identidade digital seguras e fáceis de usar.</p>

<p>Jenetric expande linha Livetouch<br>
A Jenetric lançou o Livetouch Duo, scanner compacto de impressões digitais duplas FAP 45, com tecnologia TFT para imagens forenses, criptografia integrada e resistência a água e poeira (IP65).</p>

<p>Credence ID lança terminal multimodal de baixo custo<br>
A Credence apresentou o Credence-3, com leitor FAP 30 certificado pelo FBI, leitor NFC, câmera de 13 MP, tela de 5,5” e bateria para até 12h de uso. Voltado para segurança pública e aplicação da lei, o dispositivo é robusto e compatível com diversos softwares e algoritmos.</p>

<p>Prooftag apresenta solução de segurança documental<br>
A francesa Prooftag mostrou suas soluções de rastreabilidade e segurança, incluindo o iCivil, voltado para registro civil e estatísticas vitais. O sistema, usado em Burkina Faso e Chade, emprega códigos de bolha antifraude e SMS criptografados para registrar nascimentos mesmo em áreas sem internet.</p>

    `,
  },

   {
    slug: "leitor-biométrico-de-documentos",
    titulo: "Leitor biométrico de documentos de identidade da Xperix é escolhido pela Akiyama para controle de fronteiras no Brasil",
    subtitulo: "Leitor biométrico de documentos de identidade da Xperix é escolhido pela Akiyama para controle de fronteiras no Brasil",
    resumo:
      "A fornecedora de soluções biométricas Xperix Inc., sediada na Coreia do Sul, anunciou a integração bem-sucedida de seu leitor de documentos RealPass-N,",
    data: "2024-04-10",
    capa: "/lovable-uploads/04.webp",
    conteudoHtml: `
      <p>A fornecedora de soluções biométricas Xperix Inc., sediada na Coreia do Sul, anunciou a integração bem-sucedida de seu leitor de documentos RealPass-N, algoritmo de Reconhecimento Óptico de Caracteres (OCR) e desempenho de Infraestrutura de Chave Pública (PKI) aos sistemas de controle de fronteiras da Akiyama no Brasil.</p>
      <p>Segundo comunicado da empresa, a forte parceria entre as duas companhias possibilitou a implementação, que tem como objetivo modernizar os processos de controle de fronteiras e migração, sendo considerada pela Xperix “um avanço significativo para a segurança e eficiência das fronteiras do Brasil”.</p>
      <p>Entre os recursos do sistema aprimorado estão a capacidade de usar diversos modos de controle de acesso (BAC, PACE, EAC) e métodos de autenticação (passivo, ativo, chip e terminal). O sistema oferece detecção automática de documentos e início de digitalização, além de suporte para luz visível, infravermelha e ultravioleta de onda longa. Em termos de conformidade, atende aos padrões Tipo A e B da ISO 14443 e segue as especificações do ICAO Doc 9303.</p>
      <p>John Lee, diretor-geral da Xperix, afirma que a empresa já observou o impacto significativo da implementação do leitor biométrico de passaportes RealPass-N no sistema de controle de fronteiras do Brasil. Segundo ele, a solução “aumentou consideravelmente a satisfação dos usuários” e reforçou o compromisso da Xperix em expandir sua parceria com a Akiyama no Brasil e em outros mercados.</p>
      <p>O Grupo Akiyama, por sua vez, enfatiza que, embora a implementação das novas medidas biométricas de controle de fronteiras tenha sido “realmente desafiadora e complexa”, também é de extrema importância para o país. “A modernização dos postos de controle de fronteira da Polícia Federal em todo o território brasileiro foi realizada utilizando a avançada tecnologia de digitalização de documentos da Xperix, especificamente o RealPass-N”, afirma Artur Lisboa, gerente de projetos do Grupo Akiyama. “Estamos confiantes de que essa iniciativa trará melhorias significativas em agilidade e segurança para o controle de tráfego nas fronteiras do Brasil.”</p>
      <p>A implementação segue o recente rebranding da Xperix, que veio acompanhado do compromisso de diversificar seu portfólio no segmento de biometria e identidade digital. A empresa, sediada em Seul, mudou seu nome de Suprema ID para Xperix em junho de 2023, refletindo seu direcionamento para o registro biométrico voltado a IDs nacionais, aplicação da lei e controle de acesso.</p>
      <p>Xperix biometric ID document reader chosen by Akiyama for Brazil border control | Biometric Update</p>
    `,
  },

   {
    slug: "tse-amplia-bio",
    titulo: "TSE adquire Kits para implementar biometria em todo o país",
    subtitulo: "Por meio de contrato assinado com a empresa Akiyama Indústria e Comércio de Equipamentos Eletrônicos e Sistemas Ltda., vencedora de licitação, o TSE adquiriu  mais 2.550 Kits Biométricos.",
    resumo:
      "Por meio de contrato assinado com a empresa Akiyama Indústria e Comércio de Equipamentos Eletrônicos e Sistemas Ltda.",
    data: "2022-08-01",
    capa: "/lovable-uploads/01.webp",
    autor: "imprensa@tse.jus.br",
    fonteTitulo: "",
    fonteUrl: "",
    conteudoHtml: `
      <p>Diante da necessidade de intensificar o projeto de identificação biométrica do eleitorado, que em 2012 alcançará cerca de 10 milhões de brasileiros, o Tribunal Superior Eleitoral (TSE) adquiriu mais 2.550 Kits Biométricos, conjunto de equipamentos utilizados para coleta das impressões digitais e atualização dos dados cadastrais dos votantes junto à Justiça Eleitoral. A aquisição dos kits ocorre por meio de contrato assinado entre o Tribunal e a empresa Akiyama Indústria e Comércio de Equipamentos Eletrônicos e Sistemas Ltda., vencedora de licitação iniciada em 2010 e concluída no final do ano passado para esta finalidade.</p>
      <p>Os Kits destinam-se à realização do cadastramento ordinário dos eleitores de todo o país, ou seja, aqueles que procurarem o cartório eleitoral para tirar o título pela primeira vez já terão seus dados biométricos coletados, tornando-se aptos a serem identificados pelas impressões digitais nos pleitos realizados pela Justiça Eleitoral. A medida, que é fruto de acordo entre o TSE e os 27 tribunais regionais eleitorais (TREs), reduzirá o custo do projeto de identificação biométrica e evitará a formação de filas e transtornos aos eleitores no momento da coleta das digitais, dotando cada cartório eleitoral com um Kit Bio.<p>
      <p>O Contrato nº 131/2011, assinado no dia 28 de dezembro último, teve por objeto a aquisição de 2.476 kits Biométricos e a prestação de serviço de integração e configuração dos equipamentos, com garantia técnica de, no mínimo, 12 meses. No entanto, a aquisição de outros 74 kits foi incluída em um termo aditivo ao contrato, assinado no dia 31 do mesmo mês, totalizando a compra de 2.550 Kits Bio.<p>
      <p>
      <b>2010 e 2011</b><br>
      Em 2010, o TSE lançou edital dando início à licitação para a compra dos equipamentos. Todavia, devido a impugnações de empresas concorrentes, o processo licitatório foi interrompido por diversas vezes, sendo que os requisitos apontados pelo TSE no referido edital foram objeto de análise e aprovação pelo Tribunal de Contas da União (TCU) em mais de uma oportunidade.
      <p>
      <p>O TSE adotou medidas para agilizar a conclusão do procedimento no ano de 2010. Entretanto, as interrupções ocasionadas pelas impugnações das empresas levaram o Tribunal a devolver R$ 30 milhões do orçamento disponível para aquele ano ao Ministério do Planejamento.<p>
      <p>Depois de analisar todos os questionamentos, e resondê-los com base em pareceres do Instituto Nacional de Identificação, a Corte Eleitoral deu prosseguimento, já em 2011, à licitação com a republicação do edital. A licitação foi realizada na modalidade de ata de registro de preços. A empresa Akiyama foi a escolhida por ter preenchido todas as especificações e condições constantes do Edital nº 121/2011.<p>
      <p>O custo total empreendido pelo TSE para a aquisição dos novos Kits será de R$ 27.915.780,00, valor menor que o estimado inicialmente, que era de R$ 29,5 milhões, tendo a empresa vencedora apresentado o menor preço.<p>
      <p>
      <b>Kit Bio</b><br>
      O chamado Kit Bio é composto de: leitor óptico de impressões digitais; dispositivo de capturas de imagens digitais (foto); flash externo; maleta de transporte e cenário (miniestúdio fotográfico com assento). Com a aquisição de novos equipamentos, a Justiça Eleitoral contará com 4.925 kits ao todo.
      <p>
      <p>Por meio do Kit Bio, a equipe treinada da Justiça Eleitoral realiza a coleta das impressões digitais, além de fazer a fotografia dos eleitores de maneira rápida e fácil, sem grandes dificuldades de manuseio. O scanner de altíssima resolução, por sua vez, permite uma leitura de qualidade das impressões digitais, e um programa de computador faz o controle de qualidade automaticamente.<p>
      <p>Mais informações sobre a Biometria na Justiça Eleitoral podem ser obtidas no site <a href="https://www.justicaeleitoral.jus.br/biometria/" target="_blank">https://www.justicaeleitoral.jus.br/biometria/.</a><p>
      <p>Veja o acórdão do TCU</p>
  
      <p>LC/LF<br><a href="https://www.tse.jus.br/comunicacao/noticias/2012/Janeiro/tse-adquire-kits-para-implementar-biometria-em-todo-o-pais" target="_blank">https://www.tse.jus.br/comunicacao/noticias/2012/Janeiro/tse-adquire-kits-para-implementar-biometria-em-todo-o-pais</a></p>
    `,
  },

  {
    slug: "parceira-da-integrated-biometrics",
    titulo: "Parceira da Integrated Biometrics, Akiyama vence contrato com a Polícia Federal do Brasil",
    resumo:
      "A Polícia Federal do Brasil adquiriu 1.500 scanners de impressão digital fabricados pela Integrated Biometrics após uma licitação recente.",
    data: "2021-07-02",
    capa: "/lovable-uploads/03.webp",
    conteudoHtml: `
      <p>A Polícia Federal do Brasil adquiriu 1.500 scanners de impressão digital fabricados pela Integrated Biometrics após uma licitação recente. O pedido dos dispositivos será atendido pela Akiyama, distribuidora exclusiva do hardware da Integrated Biometrics no Brasil.</p>
      <p>Os dispositivos adquiridos são do modelo Kojak, com leitura de quatro dedos, e serão utilizados para o registro de passaportes biométricos, informou um porta-voz da Akiyama ao Biometric Update.</p>
      <p>A Polícia Federal do Brasil é responsável por imigração, segurança de fronteiras e aeroportos, além do combate a crimes de competência federal. Os scanners serão distribuídos para as capitais estaduais, para uso em agendamentos de emissão de passaportes biométricos, e operados junto com câmeras e mesas de assinatura eletrônica.</p>
      <p>A Akiyama é a distribuidora exclusiva dos produtos Integrated Biometrics e possui ampla atuação em todo o país desde que venceu, em 2015, a licitação para fornecer um sistema de eleições gerais baseado em 20.000 kits biométricos de votação.</p>
      <p>Integrated Biometrics partner Akiyama wins Brazil Federal Police contract | Biometric Update</p>
    `,
  },

  
 

  
  
  
 
 
];

export const getBySlug = (slug: string) => noticias.find(n => n.slug === slug);

export const getPrevNext = (slug: string) => {
  const i = noticias.findIndex(n => n.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? noticias[i - 1] : undefined,
    next: i < noticias.length - 1 ? noticias[i + 1] : undefined,
  };
};
