var fetch = require('node-fetch');
var UserResolver = {
    signup: async (_, args) => {
        console.log('sss');
        try {
            const signupUrl = "http://progoanpi.ml/v1/users/signup?type=user"
            console.log(JSON.stringify(args))
            return fetch(signupUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(args)
        }).then((res) => res.json()).then((djson) => {
            console.log('json: ',djson);
            return djson;
        })
      
        } catch (error) {
            console.log('error here',error)
            throw error;

        }
    },

    login: async (_, {email, password}) => {
        try {
            return 'login';
        } catch (error) {
            throw error;
        }
    },

    users: async () => {
        try {
            return {email:'theemail'};
        } catch (error) {
            throw error;
        }
    },

};
module.exports = UserResolver;