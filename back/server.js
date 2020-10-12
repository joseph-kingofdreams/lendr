import app from './app.js'
import db from './db/db.js'

db.connect(err => err ? console.log(err) : console.log('Connected to DB'))
app(db).listen(8000, () => console.log(`Live @ http://localhost:${8000}`))
