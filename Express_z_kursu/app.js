const express = require ('express')

const app = express()

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000')
})

app.get('/', (req, res) =>{
    res.send('Hello, world');
})

// app.get('/:id', (req) => {
//     console.log(`Informacja szczegółowa na temat uzytkownika o id: ${req.params.id}`)
// })

// app.post ('/:id', (req) => {
//     console.log('Dodawanie nowego użytkownika');
// })

// app.patch ('/:id', (req) => {
//     console.log('Aktualizacja użytkownika')
// })

// app.delete ('/:id', (req) => {
//     console.log('Usunięcie użytkownika')
// })

