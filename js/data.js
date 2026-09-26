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
      desc: "Pasta com própolis e chá verde para uma sensação de limpeza e hálito fresco.",
      alt: "Atomy Pasta Dentífrica com Própolis 200g",
      image: "https://image.atomy.com/EU/goods/700501/org/501/thumb_700501_0000.jpg?w=720&h=720",
      productUrl: "https://eu.atomy.com/product/700501",
      message: "Olá Elena, gostaria de encomendar a Pasta Dentífrica com Própolis da Atomy.",
    },
    {
      category: "oral",
      tag: "Higiene oral",
      title: "Atomy Escova de Dentes Antibacteriana",
      desc: "Cerdas finas e flexíveis com pó de ouro, para uma escovagem suave.",
      alt: "Atomy Escova de Dentes Antibacteriana Ouro",
      image: "https://i.ebayimg.com/images/g/QL8AAOSwxf9jrMMO/s-l1200.png",
      productUrl: "https://eu.atomy.com/product/700510",
      message: "Olá Elena, tenho interesse no conjunto de Escovas de Dentes da Atomy.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy Absolute CellActive Ampoule",
      desc: "Concentrado anti-idade da linha Absolute, para a rotina da noite.",
      alt: "Atomy Absolute CellActive Ampoule",
      image: "https://image.atomy.com/EU/goods/700227/org/947/250226000036947.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700227",
      message: "Olá Elena, quero saber mais sobre a Absolute CellActive Ampoule.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy The Fame Skincare Set",
      desc: "Conjunto de 5 passos: Toner, Eye Cream, Essence, Lotion e Nutrition Cream.",
      alt: "Conjunto Atomy The Fame 5 Passos",
      image: "https://image.atomy.com/EU/goods/700003/org/214/250317000038214.png?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700003",
      message: "Olá Elena, gostaria de informações sobre o conjunto The Fame Skincare.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy Evening Care 4 Set",
      desc: "Kit de limpeza de 4 passos: Deep Cleanser, Foam Cleanser, Peeling Gel e Peel-Off Mask.",
      alt: "Atomy Evening Care 4 Set Kit de Limpeza",
      image: "https://image.atomy.com/EU/goods/700351/org/351/thumb_700351_0000.jpg?w=720&h=720",
      productUrl: "https://eu.atomy.com/product/700351",
      message: "Olá Elena, gostaria de encomendar o kit de limpeza Evening Care 4 Set.",
    },
    {
      category: "skincare",
      tag: "Proteção Solar",
      title: "Atomy Absolute Essence Sunscreen SPF 50+",
      desc: "Protetor solar SPF 50+ PA++++ com textura leve, para uso diário.",
      alt: "Protetor Solar Atomy Absolute Essence Sunscreen",
      image: "https://image.atomy.com/EU/goods/700276/org/199/250317000038199.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700276",
      message: "Olá Elena, gostaria de encomendar o Protetor Solar Absolute Essence SPF 50+.",
    },
    {
      category: "wellness",
      tag: "Saúde & bem-estar",
      title: "Atomy HemoHIM Complexo Botânico",
      desc: "Suplemento à base de extrato botânico, para tomar na rotina diária.",
      alt: "Atomy HemoHIM Suplemento",
      image: "https://global.atomy.com/kr/img/contents/sub02/sub020200_index01.jpg?v221011",
      productUrl: "https://eu.atomy.com/product/700001",
      message: "Olá Elena, gostaria de encomendar o suplemento HemoHIM.",
    },
    {
      category: "wellness",
      tag: "Saúde & bem-estar",
      title: "Atomy Colorfood Vitamin C (500mg)",
      desc: "Vitamina C em pó, em saquetas individuais de 500mg.",
      alt: "Atomy Colorfood Vitamin C Saquetas",
      image: "https://image.atomy.com/US/goods/A00121/org/719/260124000049719.jpg?w=1360&h=1360",
      productUrl: "https://eu.atomy.com/product/700121",
      message: "Olá Elena, tenho interesse na Vitamina C Colorfood em saquetas.",
    },
    {
      category: "hair",
      tag: "Cabelo",
      title: "Atomy Scalpcare Hair Shampoo",
      desc: "Shampoo para couro cabeludo oleoso, com extratos botânicos.",
      alt: "Atomy Scalpcare Shampoo Frasco",
      image: "https://image.atomy.com/EU/goods/700691/org/691/thumb_700691_0000.jpg?w=720&h=720",
      productUrl: "https://eu.atomy.com/product/700691",
      message: "Olá Elena, tenho interesse no shampoo Atomy Scalpcare.",
    },
    {
      category: "men",
      tag: "Homem",
      title: "Atomy Homme Energizing Skincare Set",
      desc: "Conjunto de cuidado diário para homem, leve e de absorção rápida.",
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
      desc: "Séruns, protetores solares e rotinas completas.",
      message: "Olá Elena, gostaria de ver os produtos de Cuidados da Pele.",
    },
    {
      icon: "clean_hands",
      title: "Higiene oral",
      desc: "Pastas e escovas.",
      message: "Olá Elena, gostaria de conhecer a gama de Higiene Oral.",
    },
    {
      icon: "shower",
      title: "Cabelo & Corpo",
      desc: "Shampoo e produtos de banho.",
      message: "Olá Elena, gostaria de ver as soluções para Cabelo e Corpo.",
    },
    {
      icon: "energy_savings_leaf",
      title: "Saúde & Bem-estar",
      desc: "Suplementos e vitamina C.",
      message: "Olá Elena, gostaria de informações sobre os Suplementos e Bem-estar.",
    },
    {
      icon: "face",
      title: "Homem",
      desc: "Cuidado diário para homem.",
      message: "Olá Elena, gostaria de conhecer os produtos masculinos.",
    },
  ],

  philosophy: [
    {
      num: "01",
      icon: "biotech",
      title: "Produtos coreanos",
      desc: "Marcas de beleza e bem-estar fabricadas na Coreia.",
    },
    {
      num: "02",
      icon: "verified",
      title: "Escolha simples",
      desc: "Ajudo-o a escolher entre muitos produtos, sem complicações.",
    },
    {
      num: "03",
      icon: "spa",
      title: "Uso diário",
      desc: "Produtos pensados para a rotina de todos os dias.",
    },
  ],

  steps: [
    {
      num: "1",
      title: "Escolha o produto",
      desc: "Veja os produtos ou peça uma sugestão para a sua pele.",
    },
    {
      num: "2",
      title: "Fale comigo",
      desc: "Envie mensagem por WhatsApp para tirar dúvidas ou encomendar.",
    },
    {
      num: "3",
      title: "Receba em casa",
      desc: "Combinamos o pagamento e o envio da sua encomenda.",
    },
  ],

  faqs: [
    {
      q: "Como faço uma encomenda?",
      a: "Escolha os produtos que quer e fale comigo por WhatsApp. Confirmo a disponibilidade e combinamos os detalhes.",
    },
    {
      q: "Faz envios para todo o país?",
      a: "Sim, envio para Portugal Continental e Ilhas. Os portes e o prazo dependem da transportadora e são combinados consigo.",
    },
    {
      q: "Quanto tempo demora a entrega?",
      a: "Depende da transportadora e da sua localização. Indico-lhe uma estimativa quando fizer a encomenda.",
    },
    {
      q: "Posso pagar diretamente a si?",
      a: "Sim. Falamos por WhatsApp e combinamos o método de pagamento mais prático para si.",
    },
    {
      q: "E se precisar de ajuda a escolher?",
      a: "É só perguntar. Diga-me o que procura e recomendo os produtos mais adequados.",
    },
  ],
};