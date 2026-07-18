
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:barrel_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_barrel_weapon',
      ['createaddition:iron_rod', 'kubejs:iron_drill_bit']),
e.recipes.createFilling('kubejs:incomplete_barrel_weapon', ['kubejs:incomplete_barrel_weapon', Fluid.of('minecraft:lava', 250)])
]
  )
  .transitionalItem('kubejs:incomplete_barrel_weapon')
  .loops(3);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:insides_weapon_akm', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:corpus_akm',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_akm',
      ['kubejs:corpus_akm', 'kubejs:the_return_mechanism']),
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_akm',
      ['kubejs:incomplete_insides_weapon_akm', 'kubejs:shutter']),
e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_akm',
      ['kubejs:incomplete_insides_weapon_akm', 'kubejs:barrel_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_insides_weapon_akm')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:the_return_mechanism', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_the_return_mechanism',
      ['createaddition:iron_rod', 'minecraft:iron_nugget']),
e.recipes.createDeploying(
      'kubejs:incomplete_the_return_mechanism',
      ['kubejs:incomplete_the_return_mechanism', 'createbigcannons:recoil_spring']),
e.recipes.createFilling(
     'kubejs:incomplete_the_return_mechanism',
     ['kubejs:incomplete_the_return_mechanism', Fluid.of('minecraft:lava', 250)])
]
  )
  .transitionalItem('kubejs:incomplete_the_return_mechanism')
  .loops(2);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:shutter', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'createaddition:iron_rod',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_shutter',
      ['createaddition:iron_rod', 'kubejs:iron_drill_bit']),
e.recipes.createDeploying(
      'kubejs:incomplete_shutter',
      ['kubejs:incomplete_shutter', 'minecraft:iron_nugget']),
e.recipes.createFilling(
     'kubejs:incomplete_shutter',
     ['kubejs:incomplete_shutter', Fluid.of('minecraft:lava', 250)])
]
  )
  .transitionalItem('kubejs:incomplete_shutter')
  .loops(2);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:store_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'create:iron_sheet',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_store_weapon',
      ['create:iron_sheet', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'kubejs:incomplete_store_weapon',
      ['kubejs:incomplete_store_weapon', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'kubejs:incomplete_store_weapon',
      ['kubejs:incomplete_store_weapon', 'create:iron_sheet']),
    e.recipes.createDeploying(
      'kubejs:incomplete_store_weapon',
      ['kubejs:incomplete_store_weapon', 'create:iron_sheet']),
e.recipes.createFilling(
     'kubejs:incomplete_store_weapon',
     ['kubejs:incomplete_store_weapon', Fluid.of('minecraft:lava', 250)]),
    e.recipes.createDeploying(
      'kubejs:incomplete_store_weapon',
      ['kubejs:incomplete_store_weapon','simulated:spring'])
]
  )
  .transitionalItem('kubejs:incomplete_store_weapon')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:butt_weapon', 0.9),
      CreateItem.of('minecraft:oak_planks', 0.1)
    ],
    'minecraft:oak_wood',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_butt_weapon',
      ['minecraft:oak_wood','farmersdelight:iron_knife']).keepHeldItem()
]
  )
  .transitionalItem('kubejs:incomplete_butt_weapon')
  .loops(5);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:wooden_handle', 0.9),
      CreateItem.of('minecraft:oak_planks', 0.1)
    ],
    'minecraft:oak_log',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_wooden_handle',
      ['minecraft:oak_log','farmersdelight:iron_knife']).keepHeldItem()
]
  )
  .transitionalItem('kubejs:incomplete_wooden_handle')
  .loops(5);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:1b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:insides_weapon_akm',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_akm',
      ['kubejs:insides_weapon_akm','kubejs:butt_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_akm',
      ['kubejs:incomplete_akm','kubejs:wooden_handle']),
    e.recipes.createDeploying(
      'kubejs:incomplete_akm',
      ['kubejs:incomplete_akm','kubejs:store_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_akm')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:insides_weapon_m4a1', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:corpus_m4a1',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_m4a1',
      ['kubejs:corpus_m4a1', 'kubejs:the_return_mechanism']),
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_m4a1',
      ['kubejs:incomplete_insides_weapon_m4a1', 'kubejs:shutter']),
e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_m4a1',
      ['kubejs:incomplete_insides_weapon_m4a1', 'kubejs:barrel_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_insides_weapon_m4a1')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:iron_handle', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'create:iron_sheet',
    [
e.recipes.createPressing('kubejs:incomplete_iron_handle', 'create:iron_sheet')
]
  )
  .transitionalItem('kubejs:incomplete_iron_handle')
  .loops(5);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:iron_butt_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'create:iron_sheet',
    [
e.recipes.createDeploying(
      'kubejs:incomplete_iron_butt_weapon',
      ['create:iron_sheet', 'minecraft:iron_ingot']),
e.recipes.createPressing('kubejs:incomplete_iron_butt_weapon', 'kubejs:incomplete_iron_butt_weapon'),
e.recipes.createPressing('kubejs:incomplete_iron_butt_weapon', 'kubejs:incomplete_iron_butt_weapon'),
e.recipes.createPressing('kubejs:incomplete_iron_butt_weapon', 'kubejs:incomplete_iron_butt_weapon'),
e.recipes.createPressing('kubejs:incomplete_iron_butt_weapon', 'kubejs:incomplete_iron_butt_weapon'),
e.recipes.createPressing('kubejs:incomplete_iron_butt_weapon', 'kubejs:incomplete_iron_butt_weapon')
]
  )
  .transitionalItem('kubejs:incomplete_iron_butt_weapon')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:1b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:insides_weapon_m4a1',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_m4a1',
      ['kubejs:insides_weapon_m4a1','kubejs:iron_butt_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_m4a1',
      ['kubejs:incomplete_m4a1','kubejs:iron_handle']),
    e.recipes.createDeploying(
      'kubejs:incomplete_m4a1',
      ['kubejs:incomplete_m4a1','kubejs:store_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_m4a1')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:insides_weapon_hk_g3', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:corpus_hk_g3',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_hk_g3',
      ['kubejs:corpus_hk_g3', 'kubejs:the_return_mechanism']),
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_hk_g3',
      ['kubejs:incomplete_insides_weapon_hk_g3', 'kubejs:shutter']),
e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_hk_g3',
      ['kubejs:incomplete_insides_weapon_hk_g3', 'kubejs:barrel_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_insides_weapon_hk_g3')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:3,GunFireMode:"SEMI",GunId:"tacz:hk_g3",HasBulletInBarrel:1b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:insides_weapon_hk_g3',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_hk_g3',
      ['kubejs:insides_weapon_hk_g3','kubejs:iron_butt_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_hk_g3',
      ['kubejs:incomplete_hk_g3','kubejs:iron_handle']),
    e.recipes.createDeploying(
      'kubejs:incomplete_hk_g3',
      ['kubejs:incomplete_hk_g3','kubejs:store_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_hk_g3')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:drum_revolver', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'minecraft:iron_ingot',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_drum_revolver',
      ['minecraft:iron_ingot', 'kubejs:iron_drill_bit']),
e.recipes.createPressing('kubejs:incomplete_drum_revolver', 'kubejs:incomplete_drum_revolver')
]
  )
  .transitionalItem('kubejs:incomplete_drum_revolver')
  .loops(6);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
      CreateItem.of('kubejs:insides_weapon_rhino_revolver', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:corpus_rhino_revolver',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_rhino_revolver',
      ['kubejs:corpus_rhino_revolver', 'createbigcannons:recoil_spring']),
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_rhino_revolver',
      ['kubejs:incomplete_insides_weapon_rhino_revolver', 'kubejs:drum_revolver']),
e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon_rhino_revolver',
      ['kubejs:incomplete_insides_weapon_rhino_revolver', 'kubejs:barrel_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_insides_weapon_rhino_revolver')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:3,GunFireMode:"SEMI",GunId:"tacz:rhino357",HasBulletInBarrel:1b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:insides_weapon_rhino_revolver',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_rhino_revolver',
      ['kubejs:insides_weapon_rhino_revolver','kubejs:wooden_handle'])
]
  )
  .transitionalItem('kubejs:incomplete_rhino_revolver')
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
      'kubejs:incomplete_spring_wire',
      ['minecraft:iron_nugget','minecraft:iron_nugget']),
e.recipes.createPressing('kubejs:incomplete_spring_wire', 'kubejs:incomplete_spring_wire')
]
  )
  .transitionalItem('kubejs:incomplete_spring_wire')
  .loops(3);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:corpus_glock_17',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_glock_17',
      ['kubejs:corpus_glock_17','createbigcannons:recoil_spring']),
    e.recipes.createDeploying(
      'kubejs:incomplete_glock_17',
      ['kubejs:incomplete_glock_17','kubejs:store_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_glock_17',
      ['kubejs:incomplete_glock_17','kubejs:barrel_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_glock_17',
      ['kubejs:incomplete_glock_17','kubejs:shutter'])
]
  )
  .transitionalItem('kubejs:incomplete_glock_17')
  .loops(1);
});
ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly(
    [
CreateItem.of('tacz:modern_kinetic_gun[custom_data={GunCurrentAmmoCount:16,GunFireMode:"AUTO",GunId:"tacz:cz75",HasBulletInBarrel:1b}]', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:corpus_cz_75',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_cz_75',
      ['kubejs:corpus_cz_75','createbigcannons:recoil_spring']),
    e.recipes.createDeploying(
      'kubejs:incomplete_cz_75',
      ['kubejs:incomplete_cz_75','kubejs:store_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_cz_75',
      ['kubejs:incomplete_cz_75','kubejs:barrel_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_cz_75',
      ['kubejs:incomplete_cz_75','kubejs:shutter']),
    e.recipes.createDeploying(
      'kubejs:incomplete_cz_75',
      ['kubejs:incomplete_cz_75','kubejs:iron_handle'])
]
  )
  .transitionalItem('kubejs:incomplete_cz_75')
  .loops(1);
});
