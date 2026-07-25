
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:barrel_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
e.recipes.createPressing('catr:incomplete_barrel_weapon', 'createaddition:iron_rod'),
    e.recipes.createDeploying(
      'catr:incomplete_barrel_weapon',
      ['catr:incomplete_barrel_weapon', 'catr:iron_drill_bit'])
]
  )
  .transitionalItem('catr:incomplete_barrel_weapon')
  .loops(3);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:the_return_mechanism', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
    e.recipes.createDeploying(
      'catr:incomplete_the_return_mechanism',
      ['createaddition:iron_rod', 'minecraft:iron_nugget']),
e.recipes.createDeploying(
      'catr:incomplete_the_return_mechanism',
      ['catr:incomplete_the_return_mechanism', 'createbigcannons:recoil_spring']),
e.recipes.createFilling(
     'catr:incomplete_the_return_mechanism',
     ['catr:incomplete_the_return_mechanism', Fluid.of('minecraft:lava', 250)])
]
  )
  .transitionalItem('catr:incomplete_the_return_mechanism')
  .loops(2);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:shutter_rifle', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
    e.recipes.createDeploying(
      'catr:incomplete_shutter_rifle',
      ['createaddition:iron_rod', 'catr:iron_drill_bit']),
e.recipes.createDeploying(
      'catr:incomplete_shutter_rifle',
      ['catr:incomplete_shutter_rifle', 'minecraft:iron_nugget']),
e.recipes.createFilling(
     'catr:incomplete_shutter_rifle',
     ['catr:incomplete_shutter_rifle', Fluid.of('minecraft:lava', 250)])
]
  )
  .transitionalItem('catr:incomplete_shutter_rifle')
  .loops(2);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:store_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'create:iron_sheet',
    [
    e.recipes.createDeploying(
      'catr:incomplete_store_weapon',
      ['create:iron_sheet', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'catr:incomplete_store_weapon',
      ['catr:incomplete_store_weapon', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'catr:incomplete_store_weapon',
      ['catr:incomplete_store_weapon', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'catr:incomplete_store_weapon',
      ['catr:incomplete_store_weapon', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'catr:incomplete_store_weapon',
      ['catr:incomplete_store_weapon','simulated:spring'])
]
  )
  .transitionalItem('catr:incomplete_store_weapon')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:butt_weapon', 0.9),
      CreateItem.of('minecraft:oak_planks', 0.1)
    ],
    'minecraft:oak_wood',
    [
    e.recipes.createDeploying(
      'catr:incomplete_butt_weapon',
      ['minecraft:oak_wood','farmersdelight:iron_knife']).keepHeldItem()
]
  )
  .transitionalItem('catr:incomplete_butt_weapon')
  .loops(5);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:wooden_handle', 0.9),
      CreateItem.of('minecraft:oak_planks', 0.1)
    ],
    'minecraft:oak_log',
    [
    e.recipes.createDeploying(
      'catr:incomplete_wooden_handle',
      ['minecraft:oak_log','farmersdelight:iron_knife']).keepHeldItem()
]
  )
  .transitionalItem('catr:incomplete_wooden_handle')
  .loops(5);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:0b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'catr:corpus_akm',
    [
    e.recipes.createDeploying(
      'catr:incomplete_akm',
      ['catr:corpus_akm','catr:butt_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_akm',
      ['catr:incomplete_akm','catr:wooden_handle']),
    e.recipes.createDeploying(
      'catr:incomplete_akm',
      ['catr:incomplete_akm','catr:store_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_akm',
      ['catr:incomplete_akm', 'catr:barrel_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_akm',
      ['catr:incomplete_akm', 'catr:the_return_mechanism']),
    e.recipes.createDeploying(
      'catr:incomplete_akm',
      ['catr:incomplete_akm', 'catr:shutter_rifle'])
]
  )
  .transitionalItem('catr:incomplete_akm')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:iron_handle', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'create:iron_sheet',
    [
e.recipes.createPressing('catr:incomplete_iron_handle', 'create:iron_sheet')
]
  )
  .transitionalItem('catr:incomplete_iron_handle')
  .loops(5);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:iron_butt_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'create:iron_sheet',
    [
e.recipes.createDeploying(
      'catr:incomplete_iron_butt_weapon',
      ['create:iron_sheet', 'minecraft:iron_ingot']),
e.recipes.createPressing('catr:incomplete_iron_butt_weapon', 'catr:incomplete_iron_butt_weapon'),
e.recipes.createPressing('catr:incomplete_iron_butt_weapon', 'catr:incomplete_iron_butt_weapon'),
e.recipes.createPressing('catr:incomplete_iron_butt_weapon', 'catr:incomplete_iron_butt_weapon'),
e.recipes.createPressing('catr:incomplete_iron_butt_weapon', 'catr:incomplete_iron_butt_weapon'),
e.recipes.createPressing('catr:incomplete_iron_butt_weapon', 'catr:incomplete_iron_butt_weapon')
]
  )
  .transitionalItem('catr:incomplete_iron_butt_weapon')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:0b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'catr:corpus_m4a1',
    [
    e.recipes.createDeploying(
      'catr:incomplete_m4a1',
      ['catr:corpus_m4a1','catr:iron_butt_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_m4a1',
      ['catr:incomplete_m4a1','catr:iron_handle']),
    e.recipes.createDeploying(
      'catr:incomplete_m4a1',
      ['catr:incomplete_m4a1','catr:store_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_m4a1',
      ['catr:incomplete_m4a1', 'catr:barrel_weapon']),
      e.recipes.createDeploying(
      'catr:incomplete_m4a1',
      ['catr:incomplete_m4a1', 'catr:the_return_mechanism']),
    e.recipes.createDeploying(
      'catr:incomplete_m4a1',
      ['catr:incomplete_m4a1', 'catr:shutter_rifle']),
    
]
  )
  .transitionalItem('catr:incomplete_m4a1')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:3,GunFireMode:"SEMI",GunId:"tacz:hk_g3",HasBulletInBarrel:0b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'catr:corpus_hk_g3',
    [
        e.recipes.createDeploying(
      'catr:incomplete_hk_g3',
      ['catr:corpus_hk_g3','catr:iron_butt_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_hk_g3',
      ['catr:incomplete_hk_g3','catr:iron_handle']),
    e.recipes.createDeploying(
      'catr:incomplete_hk_g3',
      ['catr:incomplete_hk_g3','catr:store_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_hk_g3',
      ['catr:incomplete_hk_g3', 'catr:barrel_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_hk_g3',
      ['catr:incomplete_hk_g3', 'catr:the_return_mechanism']),
    e.recipes.createDeploying(
      'catr:incomplete_hk_g3',
      ['catr:incomplete_hk_g3', 'catr:shutter_rifle'])
]
  )
  .transitionalItem('catr:incomplete_hk_g3')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:drum_revolver', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'minecraft:iron_ingot',
    [
    e.recipes.createDeploying(
      'catr:incomplete_drum_revolver',
      ['minecraft:iron_ingot', 'catr:iron_drill_bit']),
e.recipes.createPressing('catr:incomplete_drum_revolver', 'catr:incomplete_drum_revolver')
]
  )
  .transitionalItem('catr:incomplete_drum_revolver')
  .loops(6);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:3,GunFireMode:"SEMI",GunId:"tacz:rhino357",HasBulletInBarrel:0b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'catr:corpus_rhino_revolver',
    [
    e.recipes.createDeploying(
      'catr:incomplete_rhino_revolver',
      ['catr:corpus_rhino_revolver','catr:wooden_handle']),
e.recipes.createDeploying(
      'catr:incomplete_rhino_revolver',
      ['catr:incomplete_rhino_revolver', 'catr:barrel_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_rhino_revolver',
      ['catr:incomplete_rhino_revolver', 'catr:drum_revolver']),
    e.recipes.createDeploying(
      'catr:incomplete_rhino_revolver',
      ['catr:incomplete_rhino_revolver', 'createbigcannons:recoil_spring'])

]
  )
  .transitionalItem('catr:incomplete_rhino_revolver')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('createbigcannons:spring_wire', 0.9),
      CreateItem.of('minecraft:iron_nugget', 0.1)
    ],
    'minecraft:iron_nugget',
    [
    e.recipes.createDeploying(
      'catr:incomplete_spring_wire',
      ['minecraft:iron_nugget','minecraft:iron_nugget']),
e.recipes.createPressing('catr:incomplete_spring_wire', 'catr:incomplete_spring_wire')
]
  )
  .transitionalItem('catr:incomplete_spring_wire')
  .loops(3);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:0b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'catr:corpus_glock_17',
    [
    e.recipes.createDeploying(
      'catr:incomplete_glock_17',
      ['catr:corpus_glock_17','catr:store_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_glock_17',
      ['catr:incomplete_glock_17','catr:shutter_pistols']),
    e.recipes.createDeploying(
      'catr:incomplete_glock_17',
      ['catr:incomplete_glock_17','createbigcannons:recoil_spring'])
]
  )
  .transitionalItem('catr:incomplete_glock_17')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:16,GunFireMode:"AUTO",GunId:"tacz:cz75",HasBulletInBarrel:0b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'catr:corpus_cz_75',
    [
    e.recipes.createDeploying(
      'catr:incomplete_cz_75',
      ['catr:corpus_cz_75','catr:iron_handle']),
    e.recipes.createDeploying(
      'catr:incomplete_cz_75',
      ['catr:incomplete_cz_75','catr:store_weapon']),
    e.recipes.createDeploying(
      'catr:incomplete_cz_75',
      ['catr:incomplete_cz_75','catr:shutter_pistols']),
    e.recipes.createDeploying(
      'catr:incomplete_cz_75',
      ['catr:incomplete_cz_75','createbigcannons:recoil_spring'])
]
  )
  .transitionalItem('catr:incomplete_cz_75')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('catr:shutter_pistols', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
    e.recipes.createDeploying(
      'catr:incomplete_shutter_pistols',
      ['createaddition:iron_rod', 'create:iron_sheet']),
e.recipes.createPressing('catr:incomplete_shutter_pistols', 'catr:incomplete_shutter_pistols'),
e.recipes.createDeploying(
      'catr:incomplete_shutter_pistols',
      ['catr:incomplete_shutter_pistols', 'minecraft:iron_nugget']),
e.recipes.createDeploying(
      'catr:incomplete_shutter_pistols',
      ['catr:incomplete_shutter_pistols', 'catr:iron_drill_bit'])
    ]
  )
  .transitionalItem('catr:incomplete_shutter_pistols')
  .loops(2);
});
