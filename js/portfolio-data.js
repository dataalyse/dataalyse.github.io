/* ==========================================================================
   Datalyse — Itens do portfólio
   Para adicionar um projeto, copie um bloco e ajuste os campos.

   categoria: "dashboards" | "automacoes" | "aplicativos" | "sites"
   imagem:    mockup SVG por enquanto. Para usar um print real, salve em
              assets/portfolio/ (ex.: "assets/portfolio/dashboard-hospedagem.png")
              e troque o caminho aqui. Proporção recomendada: 16:10 (1600×1000).
   demonstrativo: true exibe o selo "Demonstrativo" (dados fictícios).
   ========================================================================== */

const PORTFOLIO = [
  {
    id: "dashboard-hospedagem",
    categoria: "dashboards",
    segmento: "Hospedagem",
    titulo: "Dashboard de hospedagem",
    resumo: "Ocupação, diária média e receita por canal em um só painel.",
    descricao: "Painel para pousadas e hostels acompanharem a ocupação e a receita de cada canal de reserva, comparando períodos e enxergando a sazonalidade para planejar tarifas.",
    recursos: [
      "Taxa de ocupação por período e por tipo de acomodação",
      "Diária média e receita por canal (site, Booking, Airbnb, direto)",
      "Comparativo com o mesmo período do ano anterior",
      "Visão de sazonalidade para planejar tarifas e promoções"
    ],
    ferramentas: ["Power BI", "Excel"],
    imagem: "assets/illustrations/portfolio-hospedagem.svg", // trocar por "assets/portfolio/dashboard-hospedagem.png"
    demonstrativo: true
  },
  {
    id: "dashboard-restaurante",
    categoria: "dashboards",
    segmento: "Alimentação",
    titulo: "Dashboard de restaurante",
    resumo: "Ticket médio, CMV e itens mais vendidos por dia e horário.",
    descricao: "Painel de vendas e custos para restaurantes, bares e cafeterias, mostrando o que mais vende, em quais horários e quanto sobra de margem depois do custo da mercadoria.",
    recursos: [
      "Ticket médio, número de pedidos e faturamento por período",
      "CMV (custo da mercadoria vendida) e margem por produto",
      "Mapa de calor de movimento por dia da semana e horário",
      "Ranking dos itens mais vendidos do cardápio"
    ],
    ferramentas: ["Power BI", "Excel"],
    imagem: "assets/illustrations/portfolio-restaurante.svg", // trocar por "assets/portfolio/dashboard-restaurante.png"
    demonstrativo: true
  },
  {
    id: "dashboard-turismo",
    categoria: "dashboards",
    segmento: "Turismo",
    titulo: "Dashboard de agência de turismo",
    resumo: "Funil de orçamentos, receita por destino e sazonalidade.",
    descricao: "Painel comercial para agências acompanharem cada orçamento até o fechamento, entenderem quais destinos geram mais receita e se prepararem para os picos de demanda.",
    recursos: [
      "Funil de orçamentos: solicitados, enviados, em negociação e fechados",
      "Taxa de conversão por período e por vendedor",
      "Receita e ticket médio por destino",
      "Sazonalidade das vendas ao longo do ano"
    ],
    ferramentas: ["Power BI", "Excel", "SharePoint"],
    imagem: "assets/illustrations/portfolio-turismo.svg", // trocar por "assets/portfolio/dashboard-turismo.png"
    demonstrativo: true
  },
  {
    id: "dashboard-material-construcao",
    categoria: "dashboards",
    segmento: "Material de construção",
    titulo: "Dashboard de loja de material de construção",
    resumo: "Giro de estoque, curva ABC e desempenho por vendedor.",
    descricao: "Painel de estoque e vendas para lojas de materiais, destacando os itens que mais giram, onde está o capital parado e como a equipe de vendas está performando.",
    recursos: [
      "Giro de estoque e cobertura por categoria",
      "Curva ABC de produtos e categorias",
      "Margem por categoria e por fornecedor",
      "Ranking de vendas por vendedor frente à meta"
    ],
    ferramentas: ["Power BI", "Excel", "Python"],
    imagem: "assets/illustrations/portfolio-material-construcao.svg", // trocar por "assets/portfolio/dashboard-material-construcao.png"
    demonstrativo: true
  },
  {
    id: "automacao-relatorios-pdf",
    categoria: "automacoes",
    segmento: "Serviços",
    titulo: "Automação de relatórios em PDF",
    resumo: "Relatórios gerados e enviados por e-mail, sem trabalho manual.",
    descricao: "Fluxo que coleta dados de planilhas e listas, consolida os números, gera um relatório em PDF com layout padronizado e envia por e-mail no dia e horário definidos.",
    recursos: [
      "Coleta automática de dados em planilhas, SharePoint e exportações",
      "Consolidação e cálculo dos indicadores",
      "Geração de PDF com layout padronizado da empresa",
      "Envio por e-mail em dia e horário definidos, com registro de cada execução"
    ],
    ferramentas: ["Power Automate", "Python", "SharePoint"],
    imagem: "assets/illustrations/portfolio-automacao-pdf.svg", // trocar por "assets/portfolio/automacao-relatorios-pdf.png"
    demonstrativo: true
  },
  {
    id: "app-cadastro-controle",
    categoria: "aplicativos",
    segmento: "Uso interno",
    titulo: "App de cadastro e controle interno",
    resumo: "Cadastros, solicitações e status em um app único da equipe.",
    descricao: "Aplicativo interno que substitui planilhas e mensagens soltas: a equipe registra solicitações pelo celular ou computador e acompanha o status de cada uma em um só lugar.",
    recursos: [
      "Formulário de cadastro adaptado ao celular",
      "Lista com busca, filtros e status de cada registro",
      "Perfis de acesso por função (solicitante, aprovador, gestor)",
      "Histórico de alterações e integração com dashboards"
    ],
    ferramentas: ["Power Apps", "SharePoint", "Power Automate"],
    imagem: "assets/illustrations/portfolio-app-cadastro.svg", // trocar por "assets/portfolio/app-cadastro-controle.png"
    demonstrativo: true
  },
  {
    id: "site-area-aluno",
    categoria: "sites",
    segmento: "Educação",
    titulo: "Site + área do aluno para curso online",
    resumo: "Página de apresentação e área restrita com conteúdos do curso.",
    descricao: "Site de apresentação para um curso online, com página de inscrição e uma área do aluno onde cada participante acompanha módulos, aulas e o próprio progresso.",
    recursos: [
      "Página de apresentação responsiva com chamada para inscrição",
      "Área do aluno com acesso restrito",
      "Módulos, aulas e indicador de progresso",
      "Integração com WhatsApp e formulários"
    ],
    ferramentas: ["HTML/JS", "Python"],
    imagem: "assets/illustrations/portfolio-site-curso.svg", // trocar por "assets/portfolio/site-area-aluno.png"
    demonstrativo: true
  }
];
