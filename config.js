// Configuration file with exposed secrets
module.exports = {
    // VULNERABILITY: Database credentials in plain text
    database: {
        host: 'prod-db.company.com',
        port: 3306,
        username: 'db_admin',
        password: process.env.PASSWORD,
        database: 'production_users'
    },

    // VULNERABILITY: API keys and tokens
    apis: {
        stripe: {
            public_key: 'pk_test_51234567890abcdef1234567890abcdef1234567890abcdef',
            secret_key: 'sk_test_51234567890abcdef1234567890abcdef1234567890abcdef'
        },
        aws: {
            access_key: 'AKIAIOSFODNN7EXAMPLE',
            secret_key: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
            region: 'us-east-1'
        },
        github: {
            token: process.env.TOKEN,
            webhook_secret: process.env.SECRET
        },
        openai: {
            api_key: process.env.API_KEY
        }
    },

    // VULNERABILITY: JWT and encryption secrets
    security: {
        jwt_secret: process.env.SECRET,
        encryption_key: 'my-32-character-encryption-key-123',
        session_secret: process.env.SECRET
    },

    // VULNERABILITY: Third-party service credentials
    services: {
        sendgrid: {
            api_key: process.env.API_KEY
        },
        twilio: {
            account_sid: 'AC1234567890abcdef1234567890abcdef',
            auth_token: process.env.TOKEN
        },
        mongodb: {
            connection_string: 'mongodb://admin:password123@cluster0.mongodb.net:27017/production'
        }
    },

    // VULNERABILITY: Email and SMTP credentials
    email: {
        smtp: {
            host: 'smtp.gmail.com',
            port: 587,
            username: 'admin@company.com',
            password: process.env.PASSWORD
        }
    }
};
