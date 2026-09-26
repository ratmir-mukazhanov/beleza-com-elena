/**
 * Single source of truth for contact, social links and list content.
 * `contact.phone` drives BOTH the WhatsApp links (digits are extracted) and
 * tel: links. Format it however you like for display.
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
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VPrbFBhw2zdV26mmO9nIZGKBrGWDzTTkoz-N011KsXxKbwG9_Fv4rBXXUsvWDhDmFKwRByZpYNr6bdxx6OlOp5vp7PHEX6EXAmYKBj5Ivg0maNJWz2DVxUdutd5cFQvMQIRz2AY0QSfY5d5i3RyeEsq-6h4bshBLqz663JE-BVaLubfZoJQxbH_2-ozCV90hlLRCyixKA9_YtPXkHEawfy3N31CjODmpmw_uLhV0T4",
      message: "Olá Elena, tenho interesse na Atomy Pasta Dentífrica com Própolis.",
    },
    {
      category: "oral",
      tag: "Higiene oral",
      title: "Atomy Escova de Dentes Antibacteriana",
      desc: "Cerdas ultrafinas arredondadas com micro-partículas de ouro e cabo ergonómico transparente.",
      alt: "Atomy Escova de Dentes Antibacteriana",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VEjI0eTGCYjad0tZ5vOmax4VWriywws6v91T3kPE3LzNQ7fr5PEf4YRK4E-x1Qu6z71vlDcsAURPIP8JPCgchqPmmFwDQPcrLIKOKm3VR6Enz99PfVburFeNXeADf_RwN7T2b5Zm3jYvB0pKhP41EEZ_s5qo-PMAv7ICopY6h4lnOv7spJ1re69m8EGVhyjb-MEQM9dmdJGl2F_zk6-D-iB9_hmgxSQuumk-buCY2h-Q",
      message: "Olá Elena, tenho interesse na Atomy Escova de Dentes Antibacteriana.",
    },
    {
      category: "skincare",
      tag: "Cuidados da pele",
      title: "Atomy Absolute CellActive Ampoule",
      desc: "Fórmula concentrada com tecnologia de entrega peptídica para nutrição profunda e vitalidade da pele.",
      alt: "Atomy Absolute CellActive Ampoule",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1WI6fX42LJVSdUcBxi5p7xXpscZDZ_YrRvsmuKAoxZVNbu7bD0p1AWbDiuTMNmARrVW1txbKh5-pBiO3I147hQtD0Y-OPoBjZrXIeGskPquTnQd7kqcjfeVUgYPMkro9wxJJmuwZApjnHFhzNr2lJOjL6gM0TJaQ6PC--N_-C-cXz68j0938d1-SFojjndZn_zP-QInNzLwenWL8JsW2d3H1PtLMTkwR2lWQs5S6fG15Q",
      message: "Olá Elena, tenho interesse na Atomy Absolute CellActive Ampoule.",
    },
    {
      category: "skincare",
      tag: "Homem",
      title: "Atomy Homme Skincare Energizing",
      desc: "Textura leve e rápida absorção, especialmente formulado para o cuidado diário masculino.",
      alt: "Atomy Homme Skincare",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1WmciOAHH822FvtX6fe4CMOsUH8nnQXSQoxHp6vbP9_Q81QszSAmUQtIUNrMJvuAlxTZEhnhpfzlm9KLonnm2Uh3XqOoDcmxCeHTVXXb82pGrzRzWKiD9aApMIAM2wC7K3bmuD7sX_acNklywk_syF46jNoOPEwKJCk5IqPFl_WoitRgtU9AdO3tJjPZDRkeINNtbMwuo_bp2DLGi4dVWKpTc_TkEK-BySwEpiiSEdzNg",
      message: "Olá Elena, tenho interesse no Atomy Homme Skincare.",
    },
    {
      category: "wellness",
      tag: "Saúde & bem-estar",
      title: "Atomy HemoHIM Complexo Botânico",
      desc: "Extrato botânico patenteado de Angelica gigas, Cnidium e Paeonia, tradicional na Coreia.",
      alt: "Atomy HemoHIM",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1XGYox0_nsy8g4WTvpuPfrt43YF5waLqTXOOR5TXhpeM02pFtuEn3v1n4Lb-fXmrkaHpRB-zlTYbG_9ggpaa4LwAItk9OSQjcfVjP6ypbfknQ30CpMt2r6BSGzS_66U3-VHw65wgpD2vXqm-XDGeN4FCoo_z6HRFmd8d5xZI4L9AuW4kvp44BX3r1QXLEits9C7n0wXjlOTfCexE9riD1rP9yU-i_vE5yA-pVIwy2RN",
      message: "Olá Elena, tenho interesse no Atomy HemoHIM.",
    },
    {
      category: "hair",
      tag: "Cabelo",
      title: "Atomy Herbal Shampoo Natural",
      desc: "Limpeza equilibrada do couro cabeludo com infusão de ervas orientais e tensoativos suaves.",
      alt: "Atomy Herbal Shampoo",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1WXKIBPRUbRMVoLjUlLznmMHHk3fsmaAlZG8-_-sYtQVQ9b_iNbTZR-Yal410fO-U5IJiLt7Lj8XaD778-S27doGcIiM0DadPPJ5RFAA6Ig3pYjPvp-dgkzIv_OXJ-2c_-7XPt_652mO5Q3Laqf2HwEY9MRSTn862RTADV1sho4X3RCCp_-FielcW-UfS01rW5QWEVNTw1sGmGdU69R1_mV8CGkHpOShX0DZa60NHmBog",
      message: "Olá Elena, tenho interesse no Atomy Herbal Shampoo.",
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
