import {PROD_API, DEV_API} from './constants'

const APP_ENV = {

    'production': {
        'SERVER_URL': PROD_URL,
    },
    'development': {
        'SERVER_URL': DEV_URL,
    }
};

export default SERVER_ENV;
