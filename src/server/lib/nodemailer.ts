import nodemailer, { type TransportOptions } from "nodemailer";
import { google } from "googleapis";
import { env } from "@/env";

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(env.CLIENT_ID, env.CLIENT_SECRET);
oauth2Client.setCredentials({
  refresh_token: env.CLIENT_REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();
const config = {
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: env.SMTP_USER,
    clientId: env.CLIENT_ID,
    clientSecret: env.CLIENT_SECRET,
    refreshToken: env.CLIENT_REFRESH_TOKEN,
    accessToken,
  },
} as TransportOptions;

export const transporter = nodemailer.createTransport(config);
