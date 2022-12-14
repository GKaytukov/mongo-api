import express from 'express' 
import { addNewFurniture,getAllFurniture,findFurnitureByModel } from './furniture.js'


const PORT = 3035
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('working'))
app.post('/furniture', addNewFurniture);
app.get('/furniture', getAllFurniture)
app.get('/furniture/:search', findFurnitureByModel)



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))