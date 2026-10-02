// Temporarily disabled: OAuth email transporter
// When ready to re-enable, configure with valid OAuth credentials or standard SMTP
export const transporter = {
  sendMail: async (mailOptions: unknown) => {
    console.log("Email dispatch temporarily disabled. Mail details:", mailOptions);
    return { messageId: "disabled" };
  },
};

