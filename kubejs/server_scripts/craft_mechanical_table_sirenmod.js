ServerEvents.recipes(e => {
  e.recipes.create.mechanical_crafting('the_civil_defense:variablesettings', 
    [
      'DDDD',
      'DAAD',
      'DBBD',
      'DCAD',
      'DDDD'
    ], 
    { D: 'create:iron_sheet',
A: 'minecraft:redstone',
B: 'create:electron_tube',
C: 'create:precision_mechanism' }
  )
})

ServerEvents.recipes(e => {
  e.recipes.create.mechanical_crafting('the_civil_defense:sirenc_40360v', 
    [
      'A   A',
      'DDDDD',
      'DBDBD',
      'DACAD',
      'DDDDD'
    ], 
    { D: 'create:iron_sheet',
A: 'minecraft:redstone',
B: 'create:electron_tube',
C: 'create:precision_mechanism' }
  )
})

ServerEvents.recipes(e => {
  e.recipes.create.mechanical_crafting('the_civil_defense:sirenc_40', 
    [
      'DDDDD',
      'DBABD',
      'DACAD',
      'DDDDD'
    ], 
    { D: 'create:iron_sheet',
A: 'minecraft:redstone',
B: 'create:electron_tube',
C: 'create:precision_mechanism' }
  )
})