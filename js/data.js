/**
 * Single source of truth for contact info and list content.
 * `contact.phone` drives WhatsApp links and UI display.
 */

window.DATA = {
  contact: {
    phone: "+351 918 823 650",
  },

  products: [
    {
      category: "oral",
      tag: "Higiene oral",
      title: "Atomy Pasta Dentífrica com Própolis (200g)",
      desc: "Combina extrato de própolis solúvel em água e chá verde para ação antibacteriana natural, gengivas saudáveis e hálito puro.",
      alt: "Atomy Pasta Dentífrica com Própolis 200g",
      image: "https://image.atomy.com/EU/goods/700501/org/501/thumb_700501_0000.jpg?w=720&h=720",
      productUrl: "https://eu.atomy.com/product/700501",
      message: "Olá Elena, gostaria de encomendar a Pasta Dentífrica com Própolis da Atomy.",
    },
    {
      category: "oral",
      tag: "Higiene oral",
      title: "Atomy Escova de Dentes Antibacteriana",
      desc: "Cerdas superfinas flexíveis (0,03 mm) com pó de ouro a 99,9% para prevenir a proliferação bacteriana.",
      alt: "Atomy Escova de Dentes Antibacteriana Ouro",
      image: "https://i.ebayimg.com/images/g/QL8AAOSwxf9jrMMO/s-l1200.png",
      productUrl: "https://eu.atomy.com/product/700510",
      message: "Olá Elena, tenho interesse no conjunto de Escovas de Dentes da Atomy.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy Absolute CellActive Ampoule",
      desc: "Vencedor de múltiplos prémios de biotecnologia. Concentrado anti-idade intensivo com tecnologia CellActive para rejuvenescimento.",
      alt: "Atomy Absolute CellActive Ampoule",
      image: "https://image.atomy.com/EU/goods/700227/org/947/250226000036947.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700227",
      message: "Olá Elena, quero saber mais sobre a Absolute CellActive Ampoule.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy The Fame Skincare Set",
      desc: "Sistema hidratante icónico de 5 passos (Toner, Eye Cream, Essence, Lotion e Nutrition Cream) com micro-cápsulas de óleo de argão e ceramidas.",
      alt: "Conjunto Atomy The Fame 5 Passos",
      image: "https://image.atomy.com/EU/goods/700003/org/214/250317000038214.png?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700003",
      message: "Olá Elena, gostaria de informações sobre o conjunto The Fame Skincare.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy Evening Care 4 Set",
      desc: "Ritual completo de limpeza profunda coreana: Deep Cleanser, Foam Cleanser, Peeling Gel e Peel-Off Mask.",
      alt: "Atomy Evening Care 4 Set Kit de Limpeza",
      image: "https://image.atomy.com/EU/goods/700351/org/351/thumb_700351_0000.jpg?w=720&h=720",
      productUrl: "https://eu.atomy.com/product/700351",
      message: "Olá Elena, gostaria de encomendar o kit de limpeza Evening Care 4 Set.",
    },
    {
      category: "skincare",
      tag: "Proteção Solar",
      title: "Atomy Absolute Essence Sunscreen SPF 50+",
      desc: "Proteção solar diária de largo espetro (PA++++) com textura ultraleve tipo essência hidratante. Não deixa película esbranquiçada.",
      alt: "Protetor Solar Atomy Absolute Essence Sunscreen",
      image: "https://image.atomy.com/EU/goods/700276/org/199/250317000038199.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700276",
      message: "Olá Elena, gostaria de encomendar o Protetor Solar Absolute Essence SPF 50+.",
    },
    {
      category: "wellness",
      tag: "Saúde & bem-estar",
      title: "Atomy HemoHIM Complexo Botânico",
      desc: "Extrato botânico patenteado de Angelica gigas, Cnidium e Paeonia para suporte imunitário diário e vitalidade física.",
      alt: "Atomy HemoHIM Suplemento",
      image: "https://global.atomy.com/kr/img/contents/sub02/sub020200_index01.jpg?v221011",
      productUrl: "https://eu.atomy.com/product/700001",
      message: "Olá Elena, gostaria de encomendar o suplemento HemoHIM.",
    },
    {
      category: "wellness",
      tag: "Saúde & bem-estar",
      title: "Atomy Colorfood Vitamin C (500mg)",
      desc: "Vitamina C em pó solúvel em formato stick individual com extratos botânicos de 7 alimentos coloridos (manga, tangerina, curcuma).",
      alt: "Atomy Colorfood Vitamin C Saquetas",
      image: "https://image.atomy.com/US/goods/A00121/org/719/260124000049719.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700121",
      message: "Olá Elena, tenho interesse na Vitamina C Colorfood em saquetas.",
    },
    {
      category: "hair",
      tag: "Cabelo",
      title: "Atomy Scalpcare Hair Shampoo",
      desc: "Tratamento botânico purificante enriquecido com neem, arnica e shikakai para refrescar o couro cabeludo e controlar a oleosidade.",
      alt: "Atomy Scalpcare Shampoo Frasco",
      image: "https://image.atomy.com/EU/goods/700691/org/691/thumb_700691_0000.jpg?w=720&h=720",
      productUrl: "https://eu.atomy.com/product/700691",
      message: "Olá Elena, tenho interesse no shampoo Atomy Scalpcare.",
    },
    {
      category: "men",
      tag: "Homem",
      title: "Atomy Homme Energizing Skincare Set",
      desc: "Rotina masculina descomplicada de absorção imediata com água botânica fresca, acalmando a pele pós-barbear.",
      alt: "Kit Masculino Atomy Homme Skincare",
      image: "https://image.atomy.com/US/goods/A00749/org/838/241203000031838.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700749",
      message: "Olá Elena, quero encomendar o conjunto Atomy Homme para homem.",
    },
  ],

  categories: [
    {
      icon: "auto_awesome",
      title: "Cuidados da pele",
      desc: "Séruns, protetores UV coreanos e rotinas anti-idade completas.",
      message: "Olá Elena, gostaria de ver os produtos de Cuidados da Pele.",
    },
    {
      icon: "clean_hands",
      title: "Higiene oral",
      desc: "Pastas com própolis antibacteriano e escovas com ouro 99.9%.",
      message: "Olá Elena, gostaria de conhecer a gama de Higiene Oral.",
    },
    {
      icon: "shower",
      title: "Cabelo & Corpo",
      desc: "Fórmulas de ervas orientais para purificação do couro cabeludo.",
      message: "Olá Elena, gostaria de ver as soluções para Cabelo e Corpo.",
    },
    {
      icon: "energy_savings_leaf",
      title: "Saúde & Imunidade",
      desc: "HemoHIM, probióticos ativos e vitamina C botânica.",
      message: "Olá Elena, gostaria de informações sobre os Suplementos e Bem-estar.",
    },
    {
      icon: "face",
      title: "Homem",
      desc: "Fórmulas energizantes e leves para barbear e cuidado diário.",
      message: "Olá Elena, gostaria de conhecer os produtos masculinos.",
    },
  ],

  philosophy: [
    {
      num: "01",
      icon: "biotech",
      title: "Qualidade Absoluta, Preço Absoluto",
      desc: "O compromisso central da Atomy: produtos premium formulados com biotecnologia coreana de topo (Colmar BNH e KAERI) ao menor custo de distribuição possível.",
    },
    {
      num: "02",
      icon: "verified",
      title: "Segurança e Pureza",
      desc: "Normas de boas práticas de fabrico (GMP) e certificações dermatológicas internacionais (Dermatest Excellent), sem corantes artificiais ou aditivos agressivos.",
    },
    {
      num: "03",
      icon: "spa",
      title: "Rotina Funcional",
      desc: "Texturas formuladas para absorção instantânea e eficácia prática no dia a dia, respeitando a barreira e o equilíbrio biológico do corpo.",
    },
  ],

  steps: [
    {
      num: "1",
      title: "Passo 01: Escolha o Produto",
      desc: "Selecione os itens que pretende ou peça uma sugestão personalizada para as necessidades específicas da sua pele ou rotina diária.",
    },
    {
      num: "2",
      title: "Passo 02: Contacto Direto",
      desc: "Clique no botão de WhatsApp para falar diretamente comigo sobre disponibilidade, composição ou modo correto de aplicação.",
    },
    {
      num: "3",
      title: "Passo 03: Entrega Oficial",
      desc: "Encomenda enviada diretamente do armazém central europeu da Atomy para a sua morada em Portugal Continental ou Ilhas via transportadora rastreada.",
    },
  ],

  faqs: [
    {
      q: "Preciso de pagar alguma anuidade ou mensalidade para comprar?",
      a: "Não. Não existe qualquer taxa de subscrição, contrato ou obrigatoriedade de compras periódicas. O registo oficial como membro na Atomy Europa é 100% gratuito e permite-lhe adquirir os produtos com desconto de membro a qualquer momento.",
    },
    {
      q: "Como são feitos os envios para Portugal?",
      a: "As encomendas são despachadas a partir do centro logístico oficial da Atomy na Europa e entregues em Portugal Continental e Regiões Autónomas (Madeira e Açores) via transportadora (DPD/Chronopost/CTT Express), com número de rastreio em tempo real.",
    },
    {
      q: "Qual é o tempo médio de entrega?",
      a: "Para Portugal Continental, as entregas demoram tipicamente entre 3 a 5 dias úteis após a confirmação do pagamento no sistema oficial.",
    },
    {
      q: "Posso encomendar diretamente através de si?",
      a: "Sim. Como consultora e parceira independente, posso apoiar no registo gratuito para que encomende diretamente na plataforma da marca com os melhores descontos, ou ajudar a processar o seu pedido.",
    },
    {
      q: "Os produtos Atomy têm certificação dermatológica?",
      a: "Sim, grande parte das linhas cosméticas (incluindo Absolute e The Fame) é clinicamente testada por laboratórios dermatológicos independentes de referência, como o instituto alemão Dermatest, garantindo alta tolerância em peles sensíveis.",
    },
  ],
};