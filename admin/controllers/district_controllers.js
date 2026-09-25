// admin/controllers/district_controllers.js

export function home(req, res) {
  let distritos = [[
  {
    "id": 1,
    "name": "Lima",
    "code": "150101",
    "active": true
  },
  {
    "id": 2,
    "name": "Ancón",
    "code": "150102",
    "active": true
  },
  {
    "id": 3,
    "name": "Ate",
    "code": "150103",
    "active": true
  },
  {
    "id": 4,
    "name": "Barranco",
    "code": "150104",
    "active": true
  },
  {
    "id": 5,
    "name": "Breña",
    "code": "150105",
    "active": false
  }
]

  ];

  return res.render('admin/distritos', {
    title: 'Admin Site',
    distritos: distritos,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}