BlockEvents.rightClicked('furniture:bin', event => event.cancel())
BlockEvents.rightClicked('refurbished_furniture:post_box', event => event.cancel())
ServerEvents.recipes(event => {
event.remove({ output: 'tacz:gun_smith_table' })
  console.log('Hello! The recipe event has fired!')
})