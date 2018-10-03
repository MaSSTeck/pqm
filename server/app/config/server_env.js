import {PROD_API, DEV_API} from './constants'

const SERVER_ENV = {

    'production': {
        'BASE_API': PROD_API,
        'SERVER_PORT': process.env.PORT || 4000
    },
    'development': {
        'BASE_API': DEV_API,
        'SERVER_PORT': process.env.PORT || 4000
    }
};

export default SERVER_ENV;
