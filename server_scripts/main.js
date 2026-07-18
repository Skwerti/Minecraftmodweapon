BlockEvents.rightClicked('furniture:bin', event => event.cancel())
BlockEvents.rightClicked('refurbished_furniture:post_box', event => event.cancel())
ServerEvents.recipes(e => {
e.remove({ output: 'tacz:gun_smith_table' }),
e.remove({ id: 'tacz:gun_smith_table' }),
e.remove({ input: '#tacz:gun_smith_table' })
  console.log('Hello! The recipe event has fired!')
});