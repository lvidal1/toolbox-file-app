import * as dotenv from 'dotenv'
import App from './src/app'

dotenv.config()

const app = new App(parseInt(process.env.PORT || '5000'))

app.listen()
