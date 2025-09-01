export const timelineData = [
  // Éon Pré-cambriano
  {
    eon: 'Pré-cambriano',
    id: 'hadeano',
    label: 'Hadeano',
    period: '4.6 a 4 bilhões de anos atrás',
    startAge: 4600,
    endAge: 4000,
    mapImage: '/src/assets/hadeano-map.jpg',
    description: 'A Terra primitiva, em estágio de formação. A superfície era um oceano de magma, com bombardeio constante de asteroides. A vida ainda não existia.'
  },
  {
    eon: 'Pré-cambriano',
    id: 'arqueano',
    label: 'Arqueano',
    period: '4 a 2.5 bilhões de anos atrás',
    startAge: 4000,
    endAge: 2500,
    mapImage: '/src/assets/arqueano-map.jpg',
    description: 'Início da vida com organismos procariontes primitivos. O vapor de água se condensou, formando os oceanos e a primeira crosta terrestre estável.'
  },
  {
    eon: 'Pré-cambriano',
    id: 'proterozoico',
    label: 'Proterozoico',
    period: '2.5 bilhões a 541 milhões de anos atrás',
    startAge: 2500,
    endAge: 541,
    mapImage: '/src/assets/proterozoico-map.jpg',
    description: 'A "Grande Oxigenação" ocorreu, com o acúmulo de oxigênio na atmosfera. Surgiram as primeiras células eucarióticas e organismos multicelulares.'
  },

  // Éon Fanerozoico - Era Paleozoica
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'cambriano',
    label: 'Cambriano',
    period: '541 a 485 milhões de anos atrás',
    startAge: 541,
    endAge: 485,
    mapImage: '/src/assets/paleozoico-map.jpg',
    description: 'A "Explosão Cambriana" marca a rápida diversificação de vida complexa nos oceanos. Surgem os primeiros grupos de artrópodes e cordados.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'ordoviciano',
    label: 'Ordoviciano',
    period: '485 a 443 milhões de anos atrás',
    startAge: 485,
    endAge: 443,
    mapImage: '/src/assets/paleozoico-map.jpg',
    description: 'Domínio de invertebrados marinhos. Ocorreu a primeira grande extinção em massa, provavelmente causada por glaciações.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'siluriano',
    label: 'Siluriano',
    period: '443 a 419 milhões de anos atrás',
    startAge: 443,
    endAge: 419,
    mapImage: '/src/assets/paleozoico-map.jpg',
    description: 'As primeiras plantas com vasos colonizaram a terra, permitindo o surgimento de ecossistemas terrestres. Os peixes evoluíram significativamente.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'devoniano',
    label: 'Devoniano',
    period: '419 a 359 milhões de anos atrás',
    startAge: 419,
    endAge: 359,
    mapImage: '/src/assets/paleozoico-map.jpg',
    description: 'A "Idade dos Peixes". Os primeiros anfíbios e florestas surgiram em terra firme. Formação de grandes recifes de corais.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'carbonifero',
    label: 'Carbonífero',
    period: '359 a 299 milhões de anos atrás',
    startAge: 359,
    endAge: 299,
    mapImage: '/src/assets/paleozoico-map.jpg',
    description: 'Marcado por florestas exuberantes de samambaias e pântanos que deram origem às grandes reservas de carvão. Surgiram os primeiros répteis.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Paleozoica',
    id: 'permiano',
    label: 'Permiano',
    period: '299 a 252 milhões de anos atrás',
    startAge: 299,
    endAge: 252,
    mapImage: '/src/assets/paleozoico-map.jpg',
    description: 'Formação do supercontinente Pangeia. A era terminou com a "Grande Morte", a maior extinção em massa da história da Terra.'
  },

  // Éon Fanerozoico - Era Mesozoica
  {
    eon: 'Fanerozoico',
    era: 'Mesozoica',
    id: 'triassico',
    label: 'Triássico',
    period: '252 a 201 milhões de anos atrás',
    startAge: 252,
    endAge: 201,
    mapImage: 'https://tse1.mm.bing.net/th/id/OIP.1hlINxlIO6KuP-GNVNAWrgHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'O início da era dos dinossauros. Os primeiros mamíferos e répteis marinhos surgiram. Clima quente e seco.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Mesozoica',
    id: 'jurassico',
    label: 'Jurássico',
    period: '201 a 145 milhões de anos atrás',
    startAge: 201,
    endAge: 145,
    mapImage: 'https://tse1.mm.bing.net/th/id/OIP.1hlINxlIO6KuP-GNVNAWrgHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Apogeu dos dinossauros gigantes. A Pangeia começou a se fragmentar, formando o oceano Atlântico primitivo. Surgiram as primeiras aves.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Mesozoica',
    id: 'cretaceo',
    label: 'Cretáceo',
    period: '145 a 66 milhões de anos atrás',
    startAge: 145,
    endAge: 66,
    mapImage: 'https://tse1.mm.bing.net/th/id/OIP.1hlINxlIO6KuP-GNVNAWrgHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Surgimento das plantas com flores. Ocorreu a extinção dos dinossauros e de grande parte da vida na Terra, marcando o fim da era.'
  },

  // Éon Fanerozoico - Era Cenozoica
  {
    eon: 'Fanerozoico',
    era: 'Cenozoica',
    id: 'paleogeno',
    label: 'Paleogeno',
    period: '66 a 23 milhões de anos atrás',
    startAge: 66,
    endAge: 23,
    mapImage: '/src/assets/cenozoico-map.jpg',
    description: 'Recuperação da vida após a extinção. Os mamíferos se diversificaram rapidamente, ocupando os nichos deixados pelos dinossauros.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Cenozoica',
    id: 'neogeno',
    label: 'Neogeno',
    period: '23 a 2.6 milhões de anos atrás',
    startAge: 23,
    endAge: 2.6,
    mapImage: '/src/assets/cenozoico-map.jpg',
    description: 'Os continentes se aproximaram das suas posições atuais. A evolução dos hominídeos começou na África. Surgimento de grandes mamíferos.'
  },
  {
    eon: 'Fanerozoico',
    era: 'Cenozoica',
    id: 'quaternario',
    label: 'Quaternário',
    period: '2.6 milhões de anos atrás até o presente',
    startAge: 2.6,
    endAge: 0,
    mapImage: '/src/assets/cenozoico-map.jpg',
    description: 'A era atual, caracterizada por ciclos de glaciação (eras do gelo) e pelo surgimento e desenvolvimento da espécie humana.'
  }
];