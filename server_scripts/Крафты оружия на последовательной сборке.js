
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
      CreateItem.of('kubejs:insides_weapon', 0.9),
      CreateItem.of('create:iron_sheet', 0.1)
    ],
    'kubejs:the_return_mechanism',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon',
      ['kubejs:the_return_mechanism', 'kubejs:shutter']),
e.recipes.createDeploying(
      'kubejs:incomplete_insides_weapon',
      ['kubejs:incomplete_insides_weapon', 'kubejs:barrel_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_insides_weapon')
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
      'kubejs:incomplete_insides_weapon',
      ['kubejs:the_return_mechanism', 'minecraft:iron_nugget']),
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
    'kubejs:insides_weapon',
    [
    e.recipes.createDeploying(
      'kubejs:incomplete_akm',
      ['kubejs:insides_weapon','kubejs:butt_weapon']),
    e.recipes.createDeploying(
      'kubejs:incomplete_akm',
      ['kubejs:incomplete_akm','kubejs:wooden_handle']),
    e.recipes.createDeploying(
      'kubejs:incomplete_akm',
      ['kubejs:incomplete_akm','kubejs:store_weapon'])
]
  )
  .transitionalItem('kubejs:incomplete_wooden_handle')
  .loops(1);
});