// Conteúdo do site. Para incluir um trabalho novo: coloque a imagem em
// src/assets/portfolio/ e adicione uma linha em `portfolio` com o mesmo nome de arquivo.
// Os trabalhos de outros nichos que saíram do álbum estão em materiais/portfolio/.

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
  'Olá! Vim pelo site e quero conversar sobre a comunicação do meu escritório.',
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
    name: 'Andréia Ramires',
    role: 'Jornalista e CEO',
    phone: '+55 51 98136-5746',
    whatsapp: wa('5551981365746'),
    email: 'andreia.ramires@oqueeupostariamkt.com.br',
  },
];

export const primaryContact = contacts[0];

// Time. Para colocar a foto de alguém: salve em src/assets/time/ e preencha `photo`.
// A fundadora aparece na figurinha dourada, acima da lista do time.
export const founder = { name: 'Andréia Ramires', role: 'Jornalista e fundadora', photo: 'andreia-ramires.png' };

export const team: { name: string; role: string; photo?: string }[] = [
  { name: 'Pietra Martins', role: 'Head de marketing e Comercial' },
  { name: 'Henrique Souza', role: 'Comercial', photo: 'henrique-souza.png' },
  { name: 'Eduardo Soares', role: 'Designer' },
  { name: 'Erick Silveira', role: 'Gestor de tráfego', photo: 'erick-silveira.png' },
  { name: 'Adriano Moraes', role: 'Financeiro', photo: 'adriano-moraes.png' },
];

export const founderQuote = [
  'Minha jornada na comunicação começou no jornalismo esportivo e no jornalismo de revista. Embora tenha escolhido a comunicação cegamente pela vontade de atuar com futebol, minha trajetória profissional me encaminhou para o marketing digital, atuando desde 2017 com criação de conteúdo. Foi essa caminhada também que me levou ao empreendedorismo.',
  'Despretensiosamente, criei em 2021 o Instagram @oqueeupostaria.mkt voltado apenas para dar dicas de conteúdo, sem objetivos comerciais. O crescimento foi tão rápido que abandonei a CLT: tornei uma atividade despretensiosa naquilo que hoje é o meu sustento e também o sustento de outras pessoas.',
  'Abri uma agência e lidero uma equipe dedicada a ajudar empresas e profissionais a alcançarem seu potencial máximo. Hoje vejo que minha missão é agregar valor através da comunicação, transformando desafios em oportunidades de crescimento.',
];

// O que entra na estratégia (do documento entregue ao advogado Fausto Manica, no mídia kit).
export const strategySteps = [
  'Canais digitais atuais',
  'Personalidade do especialista',
  'Referências e concorrentes',
  'Objetivos do projeto',
  'DNA do projeto',
  'Missão, visão e valores',
  'Análise SWOT',
  'Personas e público-alvo',
  'Palavras-chave',
  'Identidade visual',
  'Mapa do site',
  'Linhas editoriais',
  'Instagram, LinkedIn e WhatsApp',
  'Materiais educacionais',
];

export type Service = { name: string; text: string };

// Os serviços mais usados por advogados (mídia kit 2026). O primeiro é o destaque.
export const featuredServices: Service[] = [
  {
    name: 'Estratégia digital',
    text: 'Aqui está o nosso diferencial. Muita agência sai direto fazendo post, a gente começa pela estratégia. Um estudo de mercado e do cliente que leva de 20 a 30 dias. Definimos personalidade, concorrência, personas, linhas editoriais, entre tantos outros pontos e, claro, a estratégia para cada rede.',
  },
  {
    name: 'Gestão de redes sociais',
    text: 'Conteúdo, artes, legendas e publicação, com cronograma mensal aprovado pelo cliente.',
  },
  {
    name: 'Identidade visual e logo',
    text: 'Criação de logo (ou ajustes), paleta de cores e fontes para começar ou fortalecer a sua marca.',
  },
  {
    name: 'Papelaria e materiais',
    text: 'Cartão de visita físico ou digital, folha timbrada, assinatura de e-mail, pasta, bloco de notas e envelopes.',
  },
  {
    name: 'Sites e landing pages',
    text: 'Sites claros e rápidos, feitos para o cliente entender o que você faz e chamar no WhatsApp.',
  },
  {
    name: 'Comunicação interna e apresentações',
    text: 'Artes para a equipe do escritório e apresentações institucionais.',
  },
];

// Os outros serviços da agência, numa lista menor.
export const otherServices: Service[] = [
  {
    name: 'Consultoria para redes sociais',
    text: 'Para quem quer conduzir as próprias redes, com a supervisão de um profissional, por um valor mais acessível que a gestão completa.',
  },
  {
    name: 'Gestão de tráfego pago',
    text: 'Campanhas no Google Ads, Facebook Ads e Instagram Ads para aumentar alcance, engajamento e conversões.',
  },
  {
    name: 'Assessoria de imprensa',
    text: 'Monitoramos os veículos, encontramos onde a sua pauta tem mais chance, marcamos entrevistas e redigimos releases.',
  },
  {
    name: 'Textos jornalísticos e para blogs',
    text: 'Conteúdos relevantes para veículos e blogs de empresas, adaptados a cada público.',
  },
  {
    name: 'Revisão de textos',
    text: 'Textos claros, coerentes e corretos, sem erros de ortografia e gramática.',
  },
  {
    name: 'Videomakers parceiros',
    text: 'Uma rede de videomakers qualificados, da concepção e roteiro até a edição e pós-produção.',
  },
  {
    name: 'Eventos',
    text: 'Peças de campanha, cartazes e backdrops para eventos.',
  },
  {
    name: 'Ilustrações autorais',
    text: 'Ilustrações criadas para a sua marca e o seu conteúdo.',
  },
];

export type Work = { file: string; client: string; category: string };

export const categories = [
  'Estratégia',
  'Redes sociais',
  'Comunicação interna',
  'Identidade visual',
  'Papelaria',
  'Apresentações',
  'Sites',
  'Imprensa',
] as const;

// Só trabalhos para advocacia. Os "mk" são páginas do mídia kit 2026 (materiais/midia-kit/).
export const portfolio: Work[] = [
  { file: 'mk04-estrategia-fausto-manica.jpg', client: 'Advogado Fausto Manica', category: 'Estratégia' },
  { file: 'mk05-redes-fausto-manica.jpg', client: 'Advogado Fausto Manica', category: 'Redes sociais' },
  { file: 'mk06-redes-michelle-guerini.jpg', client: 'Michelle Guerini', category: 'Redes sociais' },
  { file: 'mk07-redes-fabiola-marabiza.jpg', client: 'Fabíola Marabiza', category: 'Redes sociais' },
  { file: 'mk08-redes-cerato-junior.jpg', client: 'João Carlos Cerato Junior', category: 'Redes sociais' },
  { file: '17-redes-crippa-rey.jpg', client: 'Crippa Rey Advogados', category: 'Redes sociais' },
  { file: '18-redes-julia-bittencourt.jpg', client: 'Júlia Bittencourt Advogados', category: 'Redes sociais' },
  { file: 'mk09-interna-crippa-rey.jpg', client: 'Crippa Rey: stories e eventos', category: 'Comunicação interna' },
  { file: '35-endomarketing-crippa-rey-1.jpg', client: 'Crippa Rey Advogados', category: 'Comunicação interna' },
  { file: '36-endomarketing-crippa-rey-2.jpg', client: 'Crippa Rey Advogados', category: 'Comunicação interna' },
  { file: 'mk10-identidade-advocacia.jpg', client: 'Logos para escritórios', category: 'Identidade visual' },
  { file: '40-identidade-fabiola-marabiza.jpg', client: 'Fabíola Marabiza', category: 'Identidade visual' },
  { file: 'mk11-papelaria-timbrados.jpg', client: 'Folhas timbradas', category: 'Papelaria' },
  { file: 'mk12-papelaria-cartoes.jpg', client: 'Cartões, pastas e envelopes', category: 'Papelaria' },
  { file: '48-impressos-pasta.jpg', client: 'Borges Advogados', category: 'Papelaria' },
  { file: 'mk13-apresentacoes-crippa-rey-berlitz.jpg', client: 'Crippa Rey e Berlitz', category: 'Apresentações' },
  { file: 'mk14-sites-advocacia.jpg', client: 'Alano · Crippa Rey e Berlitz', category: 'Sites' },
  { file: '33-imprensa-julia-bittencourt.jpg', client: 'Júlia Bittencourt Advogados', category: 'Imprensa' },
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
    name: 'Nathália Berlitz',
    role: 'Advogada Tributarista',
    services: 'Gestão de redes sociais',
    highlight: '…o atendimento é individualizado e humanizado!',
    text: 'Competência. Agilidade. Assertividade e estratégias inovadoras me fazem ser uma cliente muito satisfeita da O que eu Postaria. Além de sempre estarem alinhadas com as inovações da área do marketing, o atendimento é individualizado e humanizado!',
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
];

// Escudos (logos de clientes). Para incluir um novo: coloque o PNG em
// src/assets/clientes/ e adicione uma linha aqui com o mesmo nome de arquivo.
export const clients: { file: string; name: string }[] = [
  { file: 'crippa-rey.png', name: 'Crippa Rey Advocacia Empresarial' },
  { file: 'cravo-advogados.png', name: 'Cravo Advogados Associados' },
  { file: 'michelle-guerini.png', name: 'Michelle Guerini Advogada das Famílias' },
  { file: 'premio-queijo-brasil.png', name: 'Prêmio Queijo Brasil' },
  { file: 'copa-sulamericana-cerveja.png', name: 'Copa Sul-Americana de Cerveja' },
  { file: 'clean-environment-brasil.png', name: 'Clean Environment Brasil' },
  { file: 'sulminas.png', name: 'SulMinas Assessoria Consular' },
  { file: 'wolf-vision.png', name: 'Wolf Vision Comunicação' },
  { file: 'boca-escola-de-futebol.png', name: 'Boca Escola de Futebol' },
  { file: 'trigo-pizzaria.png', name: 'Trigo Pizzaria' },
  { file: 'aussie-burger.png', name: 'Aussie Burger' },
  { file: 'liv.png', name: 'LIV' },
  { file: 'uniao.png', name: 'União Esporte, Amor e Cultura' },
  { file: 'naia-manica.png', name: 'Naiá Mânica' },
  { file: 'vida-na-empresa.png', name: 'Vida na Empresa, por Luana Fleck' },
  { file: 'evolucao-essencial.png', name: 'Evolução Essencial' },
  { file: 'pcm.png', name: 'PCM' },
  { file: 'espaco-psicanalitico.png', name: 'Espaço Psicanalítico' },
  { file: 'kromograf.png', name: 'Kromograf Soluções Gráficas' },
  { file: 'cliente-c.png', name: 'Cliente da agência' },
  { file: 'cliente-e.png', name: 'Cliente da agência' },
];
