// Conteúdo do site. Para incluir um trabalho novo: coloque a imagem em
// src/assets/portfolio/ e adicione uma linha em `portfolio` com o mesmo nome de arquivo.

export const agency = {
  name: 'O Que Eu Postaria?',
  descriptor: 'Agência de Comunicação e Marketing',
  short: 'OQEP',
  founded: '08.02.2021',
  city: 'Porto Alegre/RS',
  instagram: 'https://www.instagram.com/oqueeupostaria.mkt/',
  instagramHandle: '@oqueeupostaria.mkt',
};

const waText = encodeURIComponent(
  'Olá! Vim pelo site e quero conversar sobre os serviços da O Que Eu Postaria?',
);
const wa = (n: string) => `https://wa.me/${n}?text=${waText}`;

export type Contact = {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
  email: string;
};

export const contacts: Contact[] = [
  {
    name: 'Henrique Souza',
    role: 'Comercial',
    phone: '+55 51 98227-0443',
    whatsapp: wa('5551982270443'),
    email: 'henrique.souza@oqueeupostariamkt.com.br',
  },
  {
    name: 'Pietra Martins',
    role: 'Head de marketing e Comercial',
    phone: '+55 51 99618-8447',
    whatsapp: wa('5551996188447'),
    email: 'pietra.martins@oqueeupostariamkt.com.br',
  },
  {
    name: 'Andréia Ramires',
    role: 'Jornalista e CEO',
    phone: '+55 51 98136-5746',
    whatsapp: wa('5551981365746'),
    email: 'andreia.ramires@oqueeupostariamkt.com.br',
  },
  {
    name: 'Adriano Moraes',
    role: 'Suporte e Financeiro',
    phone: '+55 51 99324-0679',
    whatsapp: wa('5551993240679'),
    email: 'adriano.moraes@oqueeupostariamkt.com.br',
  },
];

export const primaryContact = contacts[0];

export const team = [
  { name: 'Andréia Ramires', role: 'Jornalista e fundadora' },
  { name: 'Pietra Martins', role: 'Head de marketing e Comercial' },
  { name: 'Henrique Souza', role: 'Comercial' },
  { name: 'Eduardo Soares', role: 'Designer' },
  { name: 'Erick Silveira', role: 'Gestor de tráfego' },
  { name: 'Adriano Moraes', role: 'Financeiro' },
];

export const founderQuote = [
  'Minha jornada na comunicação começou no jornalismo esportivo e no jornalismo de revista. Embora tenha escolhido a comunicação cegamente pela vontade de atuar com futebol, minha trajetória profissional me encaminhou para o marketing digital, atuando desde 2017 com criação de conteúdo. Foi essa caminhada também que me levou ao empreendedorismo.',
  'Despretensiosamente, criei em 2021 o Instagram @oqueeupostaria.mkt voltado apenas para dar dicas de conteúdo, sem objetivos comerciais. O crescimento foi tão rápido que abandonei a CLT: tornei uma atividade despretensiosa naquilo que hoje é o meu sustento e também o sustento de outras pessoas.',
  'Abri uma agência e lidero uma equipe dedicada a ajudar empresas e profissionais a alcançarem seu potencial máximo. Hoje vejo que minha missão é agregar valor através da comunicação, transformando desafios em oportunidades de crescimento.',
];

export const strategySteps = [
  'Mapeamento dos canais digitais atuais',
  'Definição da personalidade do especialista',
  'Análise de referências e concorrentes',
  'Definição de objetivos',
  'DNA da marca: características que guiarão o conteúdo',
  'Análise SWOT',
  'Personas a serem atraídas pelo conteúdo',
  'Palavras-chave para SEO e criação de conteúdo',
  'Identidade visual e sua aplicação',
  'Linhas editoriais',
  'Tom de voz',
  'Estratégia de redes sociais e canais prioritários',
  'Ideias de materiais educacionais e offline',
  'Mapeamento de site: criação ou melhorias',
  'Captação de clientes com campanhas para cada etapa do funil',
];

export type Service = { name: string; text: string };
export type ServiceGroup = { title: string; services: Service[] };

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Estratégia',
    services: [
      {
        name: 'Estratégias digitais',
        text: 'Estudamos os canais digitais e a personalidade da empresa ou profissional, analisamos a concorrência, definimos objetivos, personas, identidade visual, linhas editoriais e cronograma. Entregamos em 20 a 30 dias. É o serviço que vem antes da gestão de redes.',
      },
      {
        name: 'Consultoria para redes sociais',
        text: 'Para quem quer conduzir as próprias redes, com a supervisão de um profissional. Você produz, a gente orienta o caminho certo, por um valor mais acessível que a gestão completa.',
      },
    ],
  },
  {
    title: 'Redes e conteúdo',
    services: [
      {
        name: 'Gestão de redes sociais',
        text: 'Para empresas, profissionais, marcas e influenciadores que querem presença online, mas não têm tempo, conhecimento ou recursos para cuidar das redes. Recomendamos contratar a estratégia antes.',
      },
      {
        name: 'Gestão de tráfego pago',
        text: 'Criação e otimização de campanhas no Google Ads, Facebook Ads e Instagram Ads para aumentar alcance, engajamento e conversões.',
      },
      {
        name: 'Videomakers parceiros',
        text: 'Uma rede de videomakers qualificados, da concepção e roteiro até a edição e pós-produção.',
      },
      {
        name: 'Ilustrações autorais',
        text: 'Ilustrações criadas para a sua marca e o seu conteúdo.',
      },
    ],
  },
  {
    title: 'Marca e design',
    services: [
      {
        name: 'Identidade visual e logos',
        text: 'Logos e identidades desenvolvidos junto com o cliente, para representar a marca de forma única e memorável.',
      },
      {
        name: 'Design para mídias on e off',
        text: 'Banners, PDFs, apresentações e materiais impressos como flyers, cartões de visita, papel timbrado e pastas.',
      },
      {
        name: 'Mídia kit',
        text: 'Apresentação profissional de perfis e criadores para marcas e parceiros.',
      },
      {
        name: 'Eventos',
        text: 'Peças de campanha, cartazes e backdrops para eventos.',
      },
    ],
  },
  {
    title: 'Imprensa e texto',
    services: [
      {
        name: 'Assessoria de imprensa',
        text: 'Monitoramos os veículos, encontramos onde a sua pauta tem mais chance, marcamos entrevistas e redigimos releases.',
      },
      {
        name: 'Textos jornalísticos e para blogs',
        text: 'Produção e redação de conteúdos relevantes para veículos e blogs de empresas, adaptados a cada público.',
      },
      {
        name: 'Revisão de textos',
        text: 'Textos claros, coerentes e corretos, adequados ao público, sem erros de ortografia e gramática.',
      },
      {
        name: 'Comunicação interna e endomarketing',
        text: 'Estratégias e criações para engajar colaboradores e fortalecer a cultura e os valores da empresa.',
      },
    ],
  },
  {
    title: 'Web',
    services: [
      {
        name: 'Sites e landing pages',
        text: 'Sites e landing pages atrativos, funcionais e otimizados para o resultado que você busca.',
      },
    ],
  },
];

export type Work = { file: string; client: string; category: string };

export const categories = [
  'Redes sociais',
  'Identidade visual',
  'Eventos',
  'Imprensa',
  'Endomarketing',
  'Mídia kit',
  'Impressos',
  'Sites',
  'Estratégia',
] as const;

export const portfolio: Work[] = [
  { file: '04-estrategia-exemplo.jpg', client: 'Estratégia digital', category: 'Estratégia' },
  { file: '06-redes-liga-gaucha-futsal.jpg', client: 'Liga Gaúcha de Futsal', category: 'Redes sociais' },
  { file: '07-redes-sulminas.jpg', client: 'SulMinas Assessoria Consular', category: 'Redes sociais' },
  { file: '08-redes-amplitude-veterinaria.jpg', client: 'Amplitude Clínica Veterinária', category: 'Redes sociais' },
  { file: '09-redes-petrus-engenharia.jpg', client: 'Petrus Engenharia e Construções', category: 'Redes sociais' },
  { file: '10-redes-execute-1.jpg', client: 'Execute Engenharia e Incorporadora', category: 'Redes sociais' },
  { file: '11-redes-execute-2.jpg', client: 'Execute Engenharia e Incorporadora', category: 'Redes sociais' },
  { file: '12-redes-anderson-beauvalet-1.jpg', client: 'Fotógrafo Anderson Beauvalet', category: 'Redes sociais' },
  { file: '13-redes-anderson-beauvalet-2.jpg', client: 'Fotógrafo Anderson Beauvalet', category: 'Redes sociais' },
  { file: '14-redes-boca-juniors-canoas.jpg', client: 'Escola Boca Juniors Canoas', category: 'Redes sociais' },
  { file: '15-redes-revista-da-cerveja.jpg', client: 'Revista da Cerveja', category: 'Redes sociais' },
  { file: '16-ilustracoes-autorais.jpg', client: 'Ilustrações autorais', category: 'Redes sociais' },
  { file: '17-redes-crippa-rey.jpg', client: 'Crippa Rey Advogados', category: 'Redes sociais' },
  { file: '18-redes-julia-bittencourt.jpg', client: 'Júlia Bittencourt Advogados', category: 'Redes sociais' },
  { file: '19-redes-doce-lar.jpg', client: 'Doce Lar', category: 'Redes sociais' },
  { file: '20-redes-luana-fleck.jpg', client: 'Luana Fleck', category: 'Redes sociais' },
  { file: '22-midiakit-pedro-espinosa.jpg', client: 'Pedro Espinosa', category: 'Mídia kit' },
  { file: '23-midiakit-cris-viegas.jpg', client: 'Cris Viegas', category: 'Mídia kit' },
  { file: '25-eventos-copa-sulamericana-cerveja.jpg', client: 'Copa Sul-Americana de Cerveja', category: 'Eventos' },
  { file: '26-eventos-premio-queijo-brasil.jpg', client: 'Prêmio Queijo Brasil', category: 'Eventos' },
  { file: '27-eventos-cartazes.jpg', client: 'Cartazes', category: 'Eventos' },
  { file: '28-eventos-backdrop.jpg', client: 'Backdrop', category: 'Eventos' },
  { file: '30-imprensa-clean-environment-1.jpg', client: 'Clean Environment Brasil', category: 'Imprensa' },
  { file: '31-imprensa-clean-environment-2.jpg', client: 'Clean Environment Brasil', category: 'Imprensa' },
  { file: '32-imprensa-queijo-dalagoa.jpg', client: "Queijo D'Alagoa-MG", category: 'Imprensa' },
  { file: '33-imprensa-julia-bittencourt.jpg', client: 'Júlia Bittencourt Advogados', category: 'Imprensa' },
  { file: '35-endomarketing-crippa-rey-1.jpg', client: 'Crippa Rey Advogados', category: 'Endomarketing' },
  { file: '36-endomarketing-crippa-rey-2.jpg', client: 'Crippa Rey Advogados', category: 'Endomarketing' },
  { file: '38-identidade-sulminas.jpg', client: 'SulMinas Assessoria Consular', category: 'Identidade visual' },
  { file: '39-identidade-amplitude.jpg', client: 'Amplitude Clínica Veterinária', category: 'Identidade visual' },
  { file: '40-identidade-fabiola-marabiza.jpg', client: 'Fabíola Marabiza', category: 'Identidade visual' },
  { file: '41-identidade-wolf-vision.jpg', client: 'Wolf Vision', category: 'Identidade visual' },
  { file: '42-identidade-bruno-soares.jpg', client: 'Bruno Soares Repórter', category: 'Identidade visual' },
  { file: '43-identidade-demetria.jpg', client: 'Demétria', category: 'Identidade visual' },
  { file: '45-impressos-cartaz-flyer.jpg', client: 'Amplitude: cartaz e flyer', category: 'Impressos' },
  { file: '46-impressos-papel-timbrado.jpg', client: 'Papel timbrado', category: 'Impressos' },
  { file: '47-impressos-cartao-visita.jpg', client: 'Cartões de visita', category: 'Impressos' },
  { file: '48-impressos-pasta.jpg', client: 'Borges Advogados', category: 'Impressos' },
  { file: '50-sites-1.jpg', client: 'Sites e landing pages', category: 'Sites' },
  { file: '51-sites-2.jpg', client: 'Sites e landing pages', category: 'Sites' },
];

export const testimonials = [
  {
    name: 'Bruna Rodrigues',
    role: 'Administrativo do Crippa Rey Advocacia Empresarial',
    services: 'Gestão de redes sociais + endomarketing',
    highlight: 'Desde o início, sentimos que éramos mais do que apenas mais um cliente.',
    text: 'Escrevo esta mensagem com imensa satisfação para expressar nossa gratidão pela experiência incrível que temos ao trabalhar com a equipe da @oqueeupostaria.mkt. Desde o momento em que decidimos confiar em vocês para cuidar das nossas redes sociais, fomos constantemente impressionados pelo profissionalismo, criatividade e comprometimento demonstrados por sua equipe. Desde o início, sentimos que éramos mais do que apenas mais um cliente. O atendimento personalizado e a atenção aos detalhes e cuidado são o que mais admiramos. Os resultados de nossas campanhas internas e interações com clientes superaram todas as nossas expectativas. O cuidado e dedicação de vocês tornaram nosso alcance e reconhecimento verdadeiramente notável. Agradecemos sinceramente a dedicação e o esforço de toda a equipe.',
  },
  {
    name: 'Stephanie Matos',
    role: 'Sócia-proprietária da SulMinas Assessoria Consular',
    services: 'Criação de logo e gestão de redes sociais',
    highlight: '…nos mostrando o que realmente traz resultados.',
    text: 'Desde o início estamos tendo uma ótima experiência com o serviço, a Andréia está nos auxiliando desde a parte de criação da logo da empresa, identidade visual, cuidando do nosso perfil, nos dando dicas e ideias do que postar, nos incentivando na gravação de vídeos e nos mostrando o que realmente traz resultados. O nosso conteúdo tem sido de extrema qualidade, muito organizado, com uma arte que chama a atenção de possíveis clientes. Ter alguém que cuide dessa parte pra nós tem sido muito importante para o crescimento da empresa.',
  },
  {
    name: 'Renata Toribio',
    role: 'Psicóloga',
    services: 'Estratégia e gestão de redes sociais',
    highlight: 'Ela é super capacitada e dedicada em oferecer o melhor…',
    text: 'Conheci o trabalho da Andréia através de uma amiga, entrei em contato com ela e ela rapidamente já me respondeu, marcamos uma reunião e iniciamos! Ela é super capacitada e dedicada em oferecer o melhor, sempre fui atendida com muita rapidez e comprometimento. Estou muito satisfeita com a nossa parceria!',
  },
  {
    name: 'Nathália Berlitz',
    role: 'Advogada Tributarista',
    services: 'Gestão de redes sociais',
    highlight: '…o atendimento é individualizado e humanizado!',
    text: 'Competência. Agilidade. Assertividade e estratégias inovadoras me fazem ser uma cliente muito satisfeita da O que eu Postaria. Além de sempre estarem alinhadas com as inovações da área do marketing, o atendimento é individualizado e humanizado!',
  },
];

// Escudos (logos de clientes). Para incluir um novo: coloque o PNG em
// src/assets/clientes/ e adicione uma linha aqui com o mesmo nome de arquivo.
export const clients: { file: string; name: string }[] = [
  { file: 'premio-queijo-brasil.png', name: 'Prêmio Queijo Brasil' },
  { file: 'copa-sulamericana-cerveja.png', name: 'Copa Sul-Americana de Cerveja' },
  { file: 'clean-environment-brasil.png', name: 'Clean Environment Brasil' },
  { file: 'crippa-rey.png', name: 'Crippa Rey Advocacia Empresarial' },
  { file: 'sulminas.png', name: 'SulMinas Assessoria Consular' },
  { file: 'wolf-vision.png', name: 'Wolf Vision Comunicação' },
  { file: 'boca-escola-de-futebol.png', name: 'Boca Escola de Futebol' },
  { file: 'trigo-pizzaria.png', name: 'Trigo Pizzaria' },
  { file: 'aussie-burger.png', name: 'Aussie Burger' },
  { file: 'cravo-advogados.png', name: 'Cravo Advogados Associados' },
  { file: 'liv.png', name: 'LIV' },
  { file: 'uniao.png', name: 'União Esporte, Amor e Cultura' },
  { file: 'michelle-guerini.png', name: 'Michelle Guerini Advogada das Famílias' },
  { file: 'naia-manica.png', name: 'Naiá Mânica' },
  { file: 'vida-na-empresa.png', name: 'Vida na Empresa, por Luana Fleck' },
  { file: 'evolucao-essencial.png', name: 'Evolução Essencial' },
  { file: 'pcm.png', name: 'PCM' },
  { file: 'espaco-psicanalitico.png', name: 'Espaço Psicanalítico' },
  { file: 'kromograf.png', name: 'Kromograf Soluções Gráficas' },
  { file: 'cliente-c.png', name: 'Cliente da agência' },
  { file: 'cliente-e.png', name: 'Cliente da agência' },
];
