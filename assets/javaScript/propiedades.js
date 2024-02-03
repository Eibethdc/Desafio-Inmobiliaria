const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones | 2 Baños',
        costo: 2000,
        smoke: false,
        pets: true},
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue,Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones | 3 Baños',
        costo: 2500,
        smoke: true,
        pets: true,
        calificacion: 5,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street,Anytown, CA 91234',
        habitaciones: '2 Habitaciones| 3 Baños',
        costo: 2200,
        smoke: false,
        pets: false,
        calificacion: 4,
    },
    {
        nombre: 'Arriendo Casa En Cachagua , Zapallar',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_754658-MLC74220218908_012024-F.webp',
        descripcion: 'Maravillosa casa en arriendo con piscina, cercana a lagos y demas entretenciones',
        ubicacion: 'Avenida Cachagua, Centro de Cachagua, Zapallar, Valparaíso',
        habitaciones: '5 Habitaciones| 4 Baños',
        costo: 3000,
        smoke: false,
        pets: true,
        calificacion: 5,
    },
    {
        nombre: 'Cabaña Santa Bárbara',
        src: 'https://a0.muscache.com/im/pictures/082b2471-a4a2-44ec-811d-a68bd424b843.jpg?im_w=960',
        descripcion: 'Conecta con la naturaleza en esta escapada inolvidable. Nativos es un recinto exclusivo para parejas',
        ubicacion: 'Santa Bárbara, Region del Bio-Bio, Chile',
        habitaciones: '1 Habitación| 1 Baño',
        costo: 2000,
        smoke: false,
        pets: true,
        calificacion: 4,
    },
]

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 Habitaciones | 4 Baños',
        costo: 5000,
        smoke: false,
        pets: false,
        calificacion: 5,
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones| 1 Baño',
        costo: 1200,
        smoke: true,
        pets: true,
        calificacion: 4.75,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 Habitaciones| 3 Baños',
        costo: 4500,
        smoke: false,
        pets: true,
        calificacion: 5
    },
    {
        nombre: 'Townhouse General Córdova',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_866745-MLC53148431314_012023-F.webp',
        descripcion: 'Nuestros Townhouses tienen un diseño adaptable que se puede transformar en un hogar de 4 dormitorios más basement (sótano).',
        ubicacion: 'General Córdova 6000, Manuel Montt, Providencia, RM (Metropolitana)',
        habitaciones: '4 Habitaciones| 3 Baños',
        costo: 6500,
        smoke: true,
        pets: true,
        calificacion: 5
    },
    {
        nombre: 'Río Arriba Eco Loft 2',
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-985509329667599537/original/abf6045b-4223-43ab-8fe0-e721d4f57b47.jpeg?im_w=960',
        descripcion: 'Un lugar para relajarse y disfrutar de una increíble vista a la desembocadura del río rapel y su ecosistema',
        ubicacion: 'Navidad, OHiggins, Chile',
        habitaciones: '1 Habitación| 1 Baño',
        costo: 5500,
        smoke: true,
        pets: true,
        calificacion: 5
    }
]