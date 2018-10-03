import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import APP_ENV from '../config/env'

const appConfig = APP_ENV['development']; 
const config = {
  link: new HttpLink({
    uri: appConfig.SERVER_URL, // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
}

export default withData(config)
