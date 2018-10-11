import {PROD_URL, DEV_URL} from './constants'

const APP_ENV = {
    'production': {
        'SERVER_URL': PROD_URL,
    },
    'development': {
        'SERVER_URL': DEV_URL,
    }
};

export default APP_ENV;
