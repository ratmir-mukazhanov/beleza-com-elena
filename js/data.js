/**
 * Single source of truth for contact info and list content.
 * `contact.phone` drives the WhatsApp links (digits are extracted) and the
 * displayed number. Format it however you like for display.
 */

window.DATA = {
  contact: {
    phone: "+351 918 823 650",
  },

  products: [
    {
      category: "oral",
      tag: "Higiene oral",
      title: "Atomy Pasta Dentífrica com Própolis",
      desc: "Com extrato de própolis verde e chá verde para hálito fresco e cuidado suave das gengivas.",
      alt: "Atomy Pasta Dentífrica com Própolis",
      image: "img/placeholder.jpg",
      message: "Olá Elena, tenho interesse na Atomy Pasta Dentífrica com Própolis.",
    },
    {
      category: "oral",
      tag: "Higiene oral",
      title: "Atomy Escova de Dentes Antibacteriana",
      desc: "Cerdas ultrafinas arredondadas com micro-partículas de ouro e cabo ergonómico transparente.",
      alt: "Atomy Escova de Dentes Antibacteriana",
      image: "img/placeholder.jpg",
      message: "Olá Elena, tenho interesse na Atomy Escova de Dentes Antibacteriana.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy Absolute CellActive Ampoule",
      desc: "Fórmula concentrada com tecnologia de entrega peptídica para nutrição profunda e vitalidade da pele.",
      alt: "Atomy Absolute CellActive Ampoule",
      image: "img/placeholder.jpg",
      message: "Olá Elena, tenho interesse na Atomy Absolute CellActive Ampoule.",
    },
    {
      category: "skincare",
      tag: "Homem",
      title: "Atomy Homme Skincare Energizing",
      desc: "Textura leve e rápida absorção, especialmente formulado para o cuidado diário masculino.",
      alt: "Atomy Homme Skincare",
      image: "img/placeholder.jpg",
      message: "Olá Elena, tenho interesse no Atomy Homme Skincare.",
    },
    {
      category: "wellness",
      tag: "Saúde & bem-estar",
      title: "Atomy HemoHIM Complexo Botânico",
      desc: "Extrato botânico patenteado de Angelica gigas, Cnidium e Paeonia, tradicional na Coreia.",
      alt: "Atomy HemoHIM",
      image: "img/placeholder.jpg",
      message: "Olá Elena, tenho interesse no Atomy HemoHIM.",
    },
    {
      category: "hair",
      tag: "Cabelo",
      title: "Atomy Herbal Shampoo Natural",
      desc: "Limpeza equilibrada do couro cabeludo com infusão de ervas orientais e tensoativos suaves.",
      alt: "Atomy Herbal Shampoo",
      image: "img/placeholder.jpg",
      message: "Olá Elena, tenho interesse no Atomy Herbal Shampoo.",
    },
  ],

  categories: [
    {
      icon: "auto_awesome",
      title: "Cuidados da pele",
      desc: "Tónicos, essências e protetores solares.",
      message: "Gostaria de conhecer os produtos para Cuidados da Pele.",
    },
    {
      icon: "clean_hands",
      title: "Higiene oral",
      desc: "Pastas com própolis e escovas suaves.",
      message: "Gostaria de conhecer os produtos de Higiene Oral.",
    },
    {
      icon: "shower",
      title: "Cabelo",
      desc: "Shampoos botânicos e cuidados nutritivos.",
      message: "Gostaria de conhecer os produtos para Cabelo.",
    },
    {
      icon: "soap",
      title: "Cuidados pessoais",
      desc: "Sabonetes e loções corporais suaves.",
      message: "Gostaria de conhecer os produtos de Cuidados Pessoais.",
    },
    {
      icon: "energy_savings_leaf",
      title: "Saúde & bem-estar",
      desc: "Infusões, extratos e suplementos puros.",
      message: "Gostaria de conhecer os produtos de Saúde e Bem-estar.",
    },
    {
      icon: "face",
      title: "Homem",
      desc: "Cuidados práticos para barbear e pele.",
      message: "Gostaria de conhecer os produtos para Homem.",
    },
  ],

  philosophy: [
    {
      num: "01",
      icon: "biotech",
      title: "Inovação Coreana",
      desc: "Investigação científica avançada combinada harmoniosamente com extratos botânicos ancestrais asiáticos.",
    },
    {
      num: "02",
      icon: "verified",
      title: "Qualidade e Consistência",
      desc: "Produção certificada internacionalmente com padrões rigorosos de pureza e formulações dermatologicamente testadas.",
    },
    {
      num: "03",
      icon: "spa",
      title: "Para o Dia a Dia",
      desc: "Formulado para integrar a sua rotina diária de forma simples, leve e com momentos autênticos de calma e prazer.",
    },
  ],

  steps: [
    {
      num: "1",
      title: "Passo 01: Escolha",
      desc: "Explore os produtos e encontre aquilo que procura para a sua rotina de cuidados diários ou solicite recomendações.",
    },
    {
      num: "2",
      title: "Passo 02: Pergunte",
      desc: "Envie-me uma mensagem no WhatsApp se tiver dúvidas sobre textura, modo de aplicação, tipo de pele ou ingredientes.",
    },
    {
      num: "3",
      title: "Passo 03: Encomende",
      desc: "Explico-lhe como encomendar os produtos de forma segura e direta com envio oficial para qualquer morada em Portugal.",
    },
  ],

  faqs: [
    {
      q: "Preciso de ser membro para comprar?",
      a: "Não precisa de nenhuma subscrição obrigatória. Posso ajudá-lo(a) a obter os produtos diretamente ou a criar o seu acesso gratuito à plataforma para encomendas autónomas.",
    },
    {
      q: "Como posso encomendar?",
      a: "Basta enviar-me uma mensagem com os produtos que pretende. Indico-lhe os passos simples e seguros para a entrega direta na sua residência.",
    },
    {
      q: "Posso pedir ajuda para escolher um produto?",
      a: "Com certeza! É precisamente essa a minha função como distribuidora independente: analisar as suas necessidades ou tipo de pele e sugerir a rotina ideal.",
    },
    {
      q: "Os produtos são enviados para Portugal?",
      a: "Sim, os envios são feitos a partir do centro de distribuição europeu oficial da Atomy diretamente para Portugal continental e regiões autónomas da Madeira e Açores.",
    },
    {
      q: "Como posso saber mais sobre os ingredientes e composição?",
      a: "Fale comigo pelo WhatsApp ou consulte as fichas de produto que terei todo o prazer em partilhar consigo detalhadamente.",
    },
  ],
};
