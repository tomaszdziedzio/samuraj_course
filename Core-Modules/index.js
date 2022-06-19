import fs from 'fs'
fs.access('./names.txt', (err) => {
    console.log(err ? 'Ni ma plika' : 'Jest taki plik')
})