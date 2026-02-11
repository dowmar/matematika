export interface Question {
  id: number;
  category: 'segitiga' | 'segiempat' | 'sudut';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  // ============ KONGRUEN SEGITIGA (10 Soal) ============
  {
    id: 1,
    category: 'segitiga',
    question: 'Dua segitiga dikatakan kongruen jika...',
    options: [
      'Memiliki sudut yang sama saja',
      'Memiliki sisi yang sama saja',
      'Memiliki sisi dan sudut yang bersesuaian sama besar',
      'Memiliki luas yang sama'
    ],
    correctAnswer: 2,
    explanation: 'Dua segitiga kongruen jika memiliki sisi dan sudut yang bersesuaian sama besar (sesuai dengan definisi kongruensi).'
  },
  {
    id: 2,
    category: 'segitiga',
    question: 'Pada segitiga ABC dan DEF, jika AB = DE, BC = EF, dan AC = DF, maka berlaku...',
    options: [
      'Sisi-Sudut-Sisi (Sd-Sd-Sd)',
      'Sisi-Sisi-Sisi (S-S-S)',
      'Sudut-Sisi-Sudut (Sd-S-Sd)',
      'Sudut-Sudut-Sisi (Sd-Sd-S)'
    ],
    correctAnswer: 1,
    explanation: 'Ketiga sisi yang bersesuaian sama panjang, sehingga berlaku kriteria Sisi-Sisi-Sisi (S-S-S).'
  },
  {
    id: 3,
    category: 'segitiga',
    question: 'Jika ∠A = ∠D, AB = DE, dan ∠B = ∠E, maka segitiga ABC kongruen dengan segitiga DEF berdasarkan...',
    options: [
      'Sisi-Sisi-Sisi (S-S-S)',
      'Sisi-Sudut-Sisi (S-Sd-S)',
      'Sudut-Sisi-Sudut (Sd-S-Sd)',
      'Sudut-Sudut-Sisi (Sd-Sd-S)'
    ],
    correctAnswer: 2,
    explanation: 'Dua sudut dan sisi di antara keduanya sama, sehingga berlaku kriteria Sudut-Sisi-Sudut (Sd-S-Sd).'
  },
  {
    id: 4,
    category: 'segitiga',
    question: 'Dua segitiga siku-siku kongruen jika...',
    options: [
      'Hanya sudut siku-sikunya sama',
      'Sisi miring dan satu sudut lainnya sama',
      'Luasnya sama',
      'Kelilingnya sama'
    ],
    correctAnswer: 1,
    explanation: 'Dua segitiga siku-siku kongruen jika sisi miring (hipotenusa) dan satu sudut lainnya sama besar.'
  },
  {
    id: 5,
    category: 'segitiga',
    question: 'Pada segitiga PQR dan STU, jika PQ = ST, ∠P = ∠S, dan PR = SU, maka berlaku kriteria...',
    options: [
      'Sisi-Sudut-Sisi (S-Sd-S)',
      'Sudut-Sisi-Sudut (Sd-S-Sd)',
      'Sisi-Sisi-Sisi (S-S-S)',
      'Sudut-Sudut-Sudut (Sd-Sd-Sd)'
    ],
    correctAnswer: 0,
    explanation: 'Dua sisi dan sudut yang diapit di antara keduanya sama, sehingga berlaku kriteria Sisi-Sudut-Sisi (S-Sd-S).'
  },
  {
    id: 6,
    category: 'segitiga',
    question: 'Jika segitiga ABC kongruen dengan segitiga DEF, maka yang BENAR adalah...',
    options: [
      'AB = EF',
      'BC = DE',
      'AC = DF',
      '∠A = ∠E'
    ],
    correctAnswer: 2,
    explanation: 'Jika segitiga ABC kongruen dengan DEF, maka sisi AC bersesuaian dengan sisi DF, sehingga AC = DF.'
  },
  {
    id: 7,
    category: 'segitiga',
    question: 'Dua segitiga sama kaki akan kongruen jika...',
    options: [
      'Hanya sudut alasnya sama',
      'Sisi alas dan sudut alasnya sama',
      'Luasnya sama',
      'Tingginya sama'
    ],
    correctAnswer: 1,
    explanation: 'Dua segitiga sama kaki kongruen jika sisi alas dan sudut alasnya sama besar (berdasarkan S-Sd-S).'
  },
  {
    id: 8,
    category: 'segitiga',
    question: 'Pada segitiga ABC dan PQR, diketahui ∠A = ∠P = 50°, ∠B = ∠Q = 60°, dan AB = PQ. Segitiga tersebut kongruen berdasarkan...',
    options: [
      'Sd-Sd-S',
      'Sd-S-Sd',
      'S-S-S',
      'S-Sd-S'
    ],
    correctAnswer: 0,
    explanation: 'Dua sudut dan sisi yang tidak diapit (sisi di depan sudut ketiga) sama, sehingga berlaku Sudut-Sudut-Sisi (Sd-Sd-S).'
  },
  {
    id: 9,
    category: 'segitiga',
    question: 'Jika segitiga KLM kongruen dengan segitiga NOP, dengan KL = 5 cm, LM = 7 cm, dan KM = 9 cm, maka panjang NO adalah...',
    options: [
      '7 cm',
      '5 cm',
      '9 cm',
      'Tidak dapat ditentukan'
    ],
    correctAnswer: 1,
    explanation: 'Karena kongruen, sisi NO bersesuaian dengan sisi KL, sehingga NO = KL = 5 cm.'
  },
  {
    id: 10,
    category: 'segitiga',
    question: 'Manakah pasangan segitiga yang PASTI kongruen?',
    options: [
      'Segitiga sama sisi dengan sisi 4 cm dan segitiga sama sisi dengan sisi 5 cm',
      'Segitiga sama sisi dengan sisi 6 cm dan segitiga sama sisi dengan sisi 6 cm',
      'Segitiga sama kaki dengan sisi alas 8 cm dan segitiga sama kaki dengan sisi alas 6 cm',
      'Segitiga sembarang dengan luas 12 cm² dan segitiga sembarang dengan luas 12 cm²'
    ],
    correctAnswer: 1,
    explanation: 'Dua segitiga sama sisi dengan panjang sisi yang sama pasti kongruen karena semua sisi dan sudutnya sama.'
  },

  // ============ KONGRUEN SEGIEMPAT (10 Soal) ============
  {
    id: 11,
    category: 'segiempat',
    question: 'Dua persegi akan kongruen jika...',
    options: [
      'Luasnya sama',
      'Kelilingnya sama',
      'Panjang sisinya sama',
      'Sudutnya sama'
    ],
    correctAnswer: 2,
    explanation: 'Dua persegi kongruen jika panjang sisinya sama, karena semua sisi persegi sama panjang dan semua sudut 90°.'
  },
  {
    id: 12,
    category: 'segiempat',
    question: 'Dua persegi panjang kongruen jika...',
    options: [
      'Hanya panjangnya sama',
      'Hanya lebarnya sama',
      'Panjang dan lebarnya sama',
      'Luasnya sama'
    ],
    correctAnswer: 2,
    explanation: 'Dua persegi panjang kongruen jika panjang dan lebarnya sama, sehingga semua sisi bersesuaian sama panjang.'
  },
  {
    id: 13,
    category: 'segiempat',
    question: 'Dua jajargenjang kongruen jika...',
    options: [
      'Hanya alasnya sama',
      'Alas, sisi miring, dan sudutnya sama',
      'Luasnya sama',
      'Tingginya sama'
    ],
    correctAnswer: 1,
    explanation: 'Dua jajargenjang kongruen jika alas, sisi miring, dan sudut yang diapitnya sama (S-Sd-S).'
  },
  {
    id: 14,
    category: 'segiempat',
    question: 'Jika persegi ABCD kongruen dengan persegi EFGH, dan AB = 6 cm, maka panjang EF adalah...',
    options: [
      '12 cm',
      '6 cm',
      '3 cm',
      '36 cm'
    ],
    correctAnswer: 1,
    explanation: 'Karena kongruen, sisi EF bersesuaian dengan sisi AB, sehingga EF = AB = 6 cm.'
  },
  {
    id: 15,
    category: 'segiempat',
    question: 'Dua belah ketupat kongruen jika...',
    options: [
      'Hanya diagonalnya sama',
      'Sisi dan salah satu sudutnya sama',
      'Luasnya sama',
      'Kelilingnya sama'
    ],
    correctAnswer: 1,
    explanation: 'Dua belah ketupat kongruen jika sisi dan salah satu sudutnya sama, karena sudut menentukan bentuk belah ketupat.'
  },
  {
    id: 16,
    category: 'segiempat',
    question: 'Persegi panjang ABCD dengan AB = 8 cm dan BC = 5 cm. Persegi panjang mana yang kongruen?',
    options: [
      'Persegi panjang dengan panjang 10 cm dan lebar 4 cm',
      'Persegi panjang dengan panjang 8 cm dan lebar 5 cm',
      'Persegi panjang dengan panjang 5 cm dan lebar 3 cm',
      'Persegi panjang dengan panjang 16 cm dan lebar 10 cm'
    ],
    correctAnswer: 1,
    explanation: 'Dua persegi panjang kongruen jika panjang dan lebarnya sama, yaitu 8 cm dan 5 cm.'
  },
  {
    id: 17,
    category: 'segiempat',
    question: 'Dua trapesium sama kaki kongruen jika...',
    options: [
      'Hanya alasnya sama',
      'Alas, kaki, dan sudut alasnya sama',
      'Luasnya sama',
      'Tingginya sama'
    ],
    correctAnswer: 1,
    explanation: 'Dua trapesium sama kaki kongruen jika alas, kaki, dan sudut alasnya sama.'
  },
  {
    id: 18,
    category: 'segiempat',
    question: 'Jika belah ketupat PQRS kongruen dengan belah ketupat TUVW, dan ∠P = 60°, maka ∠T adalah...',
    options: [
      '120°',
      '60°',
      '90°',
      '30°'
    ],
    correctAnswer: 1,
    explanation: 'Karena kongruen, sudut yang bersesuaian sama besar, sehingga ∠T = ∠P = 60°.'
  },
  {
    id: 19,
    category: 'segiempat',
    question: 'Manakah pernyataan yang BENAR tentang kongruensi segiempat?',
    options: [
      'Semua persegi panjang pasti kongruen',
      'Semua persegi pasti kongruen',
      'Dua persegi dengan sisi sama pasti kongruen',
      'Dua jajargenjang dengan luas sama pasti kongruen'
    ],
    correctAnswer: 2,
    explanation: 'Dua persegi dengan sisi yang sama panjang pasti kongruen karena semua sisi dan sudutnya sama.'
  },
  {
    id: 20,
    category: 'segiempat',
    question: 'Jajargenjang ABCD dengan AB = 10 cm, BC = 6 cm, dan ∠A = 60°. Jajargenjang mana yang kongruen?',
    options: [
      'Jajargenjang dengan sisi 12 cm dan 8 cm',
      'Jajargenjang dengan sisi 10 cm, 6 cm, dan sudut 60°',
      'Jajargenjang dengan sisi 10 cm dan 6 cm saja',
      'Jajargenjang dengan luas yang sama'
    ],
    correctAnswer: 1,
    explanation: 'Dua jajargenjang kongruen jika dua sisi berdekatan dan sudut yang diapitnya sama (S-Sd-S).'
  },

  // ============ SUDUT-SUDUT (10 Soal) ============
  {
    id: 21,
    category: 'sudut',
    question: 'Sudut yang besarnya 90° disebut sudut...',
    options: [
      'Lancip',
      'Tumpul',
      'Siku-siku',
      'Refleks'
    ],
    correctAnswer: 2,
    explanation: 'Sudut siku-siku adalah sudut yang besarnya tepat 90°.'
  },
  {
    id: 22,
    category: 'sudut',
    question: 'Jika dua sudut saling berpelurus, maka jumlah kedua sudut tersebut adalah...',
    options: [
      '90°',
      '180°',
      '270°',
      '360°'
    ],
    correctAnswer: 1,
    explanation: 'Dua sudut yang saling berpelurus memiliki jumlah 180° (membentuk garis lurus).'
  },
  {
    id: 23,
    category: 'sudut',
    question: 'Sudut yang besarnya lebih dari 90° tetapi kurang dari 180° disebut sudut...',
    options: [
      'Lancip',
      'Siku-siku',
      'Tumpul',
      'Lurus'
    ],
    correctAnswer: 2,
    explanation: 'Sudut tumpul adalah sudut yang besarnya antara 90° dan 180°.'
  },
  {
    id: 24,
    category: 'sudut',
    question: 'Jika ∠A = 35°, maka besar sudut pelurusnya adalah...',
    options: [
      '55°',
      '145°',
      '180°',
      '35°'
    ],
    correctAnswer: 1,
    explanation: 'Sudut pelurus = 180° - 35° = 145°.'
  },
  {
    id: 25,
    category: 'sudut',
    question: 'Dua sudut yang saling berpenyiku memiliki jumlah...',
    options: [
      '90°',
      '180°',
      '270°',
      '360°'
    ],
    correctAnswer: 0,
    explanation: 'Dua sudut yang saling berpenyiku memiliki jumlah 90°.'
  },
  {
    id: 26,
    category: 'sudut',
    question: 'Jika ∠P dan ∠Q saling berpenyiku, dan ∠P = 25°, maka ∠Q = ...',
    options: [
      '65°',
      '155°',
      '90°',
      '115°'
    ],
    correctAnswer: 0,
    explanation: 'Karena berpenyiku, ∠Q = 90° - 25° = 65°.'
  },
  {
    id: 27,
    category: 'sudut',
    question: 'Sudut lancip adalah sudut yang besarnya...',
    options: [
      'Lebih dari 90°',
      'Kurang dari 90°',
      'Tepat 90°',
      'Tepat 180°'
    ],
    correctAnswer: 1,
    explanation: 'Sudut lancip adalah sudut yang besarnya kurang dari 90°.'
  },
  {
    id: 28,
    category: 'sudut',
    question: 'Pada gambar, jika ∠AOC = 120° dan B terletak di antara A dan C, maka ∠AOB + ∠BOC = ...',
    options: [
      '90°',
      '120°',
      '180°',
      '240°'
    ],
    correctAnswer: 1,
    explanation: 'Karena B terletak di antara A dan C, maka ∠AOB + ∠BOC = ∠AOC = 120°.'
  },
  {
    id: 29,
    category: 'sudut',
    question: 'Sudut yang dibentuk oleh jarum jam pada pukul 3 tepat adalah...',
    options: [
      '60°',
      '90°',
      '120°',
      '180°'
    ],
    correctAnswer: 1,
    explanation: 'Pada pukul 3, jarum panjang menunjuk 12 dan jarum pendek menunjuk 3, membentuk sudut 90°.'
  },
  {
    id: 30,
    category: 'sudut',
    question: 'Jika dua garis berpotongan, maka sudut-sudut yang saling berhadapan disebut...',
    options: [
      'Sudut dalam',
      'Sudut luar',
      'Sudut bertolak belakang',
      'Sudut berseberangan'
    ],
    correctAnswer: 2,
    explanation: 'Sudut-sudut yang saling berhadapan ketika dua garis berpotongan disebut sudut bertolak belakang, dan besarnya sama.'
  }
];

export const getQuestionsByCategory = (category: 'segitiga' | 'segiempat' | 'sudut') => {
  return questions.filter(q => q.category === category);
};

export const getAllQuestions = () => questions;
