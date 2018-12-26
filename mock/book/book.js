var data = { books: [] }
for (var i = 0; i < 1000; i++) {
  data.books.push({ id: i, name: 'bock' + i, address: 'address 奥尔良新街' + i + '区；', date: (1545637034362 - parseInt(Math.random() * 1000000000))})
}
module.exports = data;
