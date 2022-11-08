const data = [
  { 
    name: 'Alcala',
    city: 'Cota',
    otherCity: ['Sabana de Bogotá', 'Cajicá', 'Chía', 'Cota', 'Guasca', 'Madrid'],
    projectType: ['Vivienda propia'],
    income: 'más 10 millones',
    rooms: 3,
    price: 1398400000,
    initialArea: 173,
    untilArea: 215,
    bonus: '$ 70,000,000',
    logo: 'alcala-logo.jpg',
    galery: [ 'alcala-render-1.jpg','alcala-render-2.jpg','alcala-render-3.jpg','alcala-render-4.jpg','alcala-render-5.jpg' ]
  },
  { 
    name: 'Barú',
    city: 'Ricaurte',
    otherCity: ['Resto del país', 'Ricaurte', 'Villavicencio'],
    projectType:['Vivienda propia', 'Inversión', 'vacacional'],
    income: '4-7 Millones',
    rooms: 3,
    price: 276400000,
    initialArea: 72,
    untilArea: 83,
    bonus: '$ 15,000,000',
    logo: 'baru-logo.jpg',
    galery: ['baru-galeria-1.jpg',	'baru-galeria-2.jpg',	'baru-galeria-3.jpg',	'baru-render-1.jpg',	'baru-render-2.jpg', 'baru-render-3.jpg']
  },
  { 
    name: 'Boreal',
    city: 'Bogotá',
    otherCity: ['Bogotá'],
    projectType: ['Vivienda propia'],
    income: '7-10 Millones',
    rooms: 3,
    price: 442200000,
    initialArea: 74,
    untilArea: 105,
    bonus: '$ 16,000,000',
    logo: 'boreal-logo.jpg',
    galery: ['boreal-galeria-1.jpg', 'boreal-galeria-2.jpg', 'boreal-galeria-3.jpg', 'boreal-render-1.jpg', 'boreal-render-2.jpg', 'boreal-render-3.jpg']
  },
  { 
    name: 'Boreal II',
    city: 'Bogotá',
    otherCity: ['Bogotá'],
    projectType: ['Vivienda propia'],
    income: '7-10 Millones',
    rooms: 3,
    price: 461100000,
    initialArea: 74,
    untilArea: 105,
    bonus: '$ 12,000,000',
    logo: 'boreal-logo.jpg',
    galery: ['boreal-galeria-1.jpg', 'boreal-galeria-2.jpg', 'boreal-galeria-3.jpg', 'boreal-render-1.jpg', 'boreal-render-2.jpg', 'boreal-render-3.jpg']
  },
  { 
    name: 'Brisas Del Rio',
    city: 'Barranquilla',
    otherCity: ['Costa', 'Barranquilla','Cartagena'],
    projectType: ['Vivienda propia', 'inversión'],
    income: '7-10 Millones',
    rooms: 3,
    price: 461100000,
    initialArea: 87,
    untilArea: 117,
    bonus: '$ 25,000,000',
    logo: 'brisas-del-rio-logo.jpg',
    galery: ['brisas-del-rio-galeria-1.jpg',	'brisas-del-rio-galeria-2.jpg',	'brisas-del-rio-galeria-3.jpg',	
    'brisas-del-rio-render-1.jpg',	'brisas-del-rio-render-2.jpg',	'brisas-del-rio-render-3.jpg'
    ]
  },
  { 
    name: 'Cantabria',
    city: 'Bogotá',
    otherCity: ['Bogotá'],
    projectType: ['Vivienda propia', 'inversión'],
    income: 'más 10 millones',
    rooms: 2.3,
    price: 553900000,
    initialArea: 72,
    untilArea: 102,
    bonus: '$ 25,000,000',
    logo: 'cantabria-logo.jpg',
    galery: ['cantabria-galeria-1.jpg',	'cantabria-galeria-2.jpg',	'cantabria-galeria-3.jpg',	'cantabria-render-1.jpg',
    	'cantabria-render-2.jpg',	'cantabria-render-3.jpg'],
  },
  /*
  { 
    name: 'Cavana',
  },
  { 
    name: 'Cedro ',
  },
  { 
    name: 'Cerezo',
  },
  { 
    name: 'Ficus',
  },
  { 
    name: 'Flamingo',
  },
  { 
    name: 'Fragata',
  },
  { 
    name: 'Ginger',
  },
  { 
    name: 'Hacienda Samaria',
  },
  { 
    name: 'Huertas Oriental 2',
  },
  { 
    name: 'La Bahía',
  },
  { 
    name: 'La Isla',
  },
  { 
    name: 'Monterivera',
  },
  { 
    name: 'Nogal',
  },
  { 
    name: 'Orquidea',
  },
  { 
    name: 'Palladio',
  },
  { 
    name: 'Ponte Verdi',
  },
  { 
    name: 'Portón de Granada',
  },
  { 
    name: 'Prado Verde ',
  },
  { 
    name: 'Refugio del Valle',
  },
  { 
    name: 'Reserva de Granada V',
  },
  { 
    name: 'Reserva de Granada VI',
  },
  { 
    name: 'Rivera del Valle',
  },
  { 
    name: 'Senderos de Granada',
  },
  { 
    name: 'Senderos de Modelia',
  },
  { 
    name: 'Sorrento',
  },
  { 
    name: 'Sotavento',
  },
  { 
    name: 'Tierra Luna',
  },
  { 
    name: 'Torrechiara',
  },
  { 
    name: 'Tuparro',
  },
  { 
    name: 'Vernazza',
  },
  { 
    name: 'Zafiro',
  },
  { 
    name: 'CC JARDIN DEL RIO',
  },
  { 
    name: 'CC PARQUE HEREDIA',
  },
  { 
    name: 'CC ROSABLANCA',
  },
  { 
    name: 'OFICINAS CANTABRIA',
  },
  { 
    name: 'SALAMANCA',
  },
  { 
    name: 'MUELLE DEL RIO',
  },
  { 
    name: 'CC CASABLANCA',
  },
  { 
    name: 'PONTEVEDRA',
  },
  { 
    name: 'PE DE OCCIDENTE',
  },
  { 
    name: 'HUERTAS DE CAJICA',
  },
  { 
    name: 'UNICENTRO DE OCCIDENTE',
  },
  { 
    name: 'CC PRADO VERDE',
  },*/
];


export default data;