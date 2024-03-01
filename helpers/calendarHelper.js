const { google } = require('googleapis');
const calendar = google.calendar('v3');
const { OAuth2 } = google.auth;

const calendarId = process.env.CALENDAR_ID; // Google Calendar ID, store in an environment variable
const clientId = process.env.CLIENT_ID; // Google API client ID
const clientSecret = process.env.CLIENT_SECRET; // Google API client secret
const redirectUri = process.env.REDIRECT_URI; // Redirect URI for OAuth2
const refreshToken = process.env.REFRESH_TOKEN; // Refresh token for OAuth2

const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
oauth2Client.setCredentials({ refresh_token: refreshToken });

// Add event to Google Calendar
exports.addEvent = async (event) => {
    return calendar.events.insert({
        auth: oauth2Client,
        calendarId: calendarId,
        resource: event,
    });
};

// Update event in Google Calendar
exports.updateEvent = async (eventId, event) => {
    return calendar.events.update({
        auth: oauth2Client,
        calendarId: calendarId,
        eventId: eventId,
        resource: event,
    });
};

// Delete event from Google Calendar
exports.deleteEvent = async (eventId) => {
    return calendar.events.delete({
        auth: oauth2Client,
        calendarId: calendarId,
        eventId: eventId,
    });
};
