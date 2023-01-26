import express from "express"
import { initData, allUsers } from "./data"

export const app = express()
const PORT = 4000

app.get('/home-page-data', (req: Request, res: Response) => {
  res.send(initData)
})

app.get('/all-users', (req: Request, res: Response) => {
  res.send(allUsers)
})


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.use(express.json()); 
app.use(express.urlencoded());

// Export the Express API
module.exports = app