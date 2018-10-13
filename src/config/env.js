import {PROD_API, DEV_API} from './constants'

const SERVER_ENV = {

    'production': {
        'SERVER_URL': PROD_API,
    },
    'development': {
        'SERVER_URL': DEV_API,
    }
};

export default SERVER_ENV;
