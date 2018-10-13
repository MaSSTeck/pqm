import {PROD_API, DEV_API} from './constants'

const APP_ENV = {
    'production': {
        'SERVER_URL': PROD_API,
    },
    'development': {
        'SERVER_URL': DEV_API,
    }
};

export default APP_ENV;
