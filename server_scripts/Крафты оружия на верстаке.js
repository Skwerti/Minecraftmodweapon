
ServerEvents.recipes(event => {
event.shapeless(
  Item.of('kubejs:iron_drill_bit', 1), 
  [
    'minecraft:iron_nugget', 	       
    'minecraft:iron_nugget'
  ]
)
  console.log('Hello! The recipe event has fired!')
})