// appConfig.js

module.exports = {
    // Server configuration
    server: {
        port: process.env.PORT || 3000, // Default to 3000, but use environment variable if available
    },

    // Google Calendar API configuration
    // Ensure you replace 'YOUR_API_KEY_HERE' with your actual API key,
    // and consider using environment variables for better security
    googleCalendar: {
        apiKey: process.env.GOOGLE_CALENDAR_API_KEY || 'YOUR_API_KEY_HERE',
        clientId: process.env.GOOGLE_CALENDAR_CLIENT_ID || 'YOUR_CLIENT_ID_HERE',
        clientSecret: process.env.GOOGLE_CALENDAR_CLIENT_SECRET || 'YOUR_CLIENT_SECRET_HERE',
        redirectUri: process.env.GOOGLE_CALENDAR_REDIRECT_URI || 'http://localhost:3000/oauth2callback',
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
    },

    // Notification service configuration
    // As with the API keys, replace these placeholders with your actual data or use environment variables
    notification: {
        email: {
            service: 'Gmail', // or another email service
            user: process.env.EMAIL_USER || 'vverych@kse.org.ua',
            password: process.env.EMAIL_PASSWORD || 'vverych2807',
        },
        sms: {
            provider: 'Twilio', // or another SMS provider
            accountSid: process.env.TWILIO_ACCOUNT_SID || 'YOUR_TWILIO_ACCOUNT_SID',
            authToken: process.env.TWILIO_AUTH_TOKEN || 'YOUR_TWILIO_AUTH_TOKEN',
            fromNumber: process.env.TWILIO_FROM_NUMBER || '+380988407696',
        }
    },

    // Any other global settings can be defined here
    // Example: application environment (development, production, etc.)
    environment: process.env.NODE_ENV || 'development',
};
