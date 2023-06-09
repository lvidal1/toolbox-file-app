import * as dotenv from 'dotenv'
import App from './src/app'

dotenv.config()

const app = new App(process.env.PORT)

app.listen()

export default app
