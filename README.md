# Dentist Page

A modern and responsive website for a dental clinic, featuring a landing page, contact section, about page, and services offered.

## Features

- **Landing Page**: A visually appealing homepage to attract visitors.
- **About Section**: Information about the clinic, team, and mission.
- **Services**: List of dental services provided.
- **Contact Section**: Contact form for inquiries.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/julio-ccatb/dentistpage.git
   cd dentistpage

   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the project and configure the following environment variables:

   ```env
   DATABASE_URL="file:./db.sqlite"
   SMTP_HOST=<your_smtp_host>
   SMTP_PORT=<your_smtp_port>
   SMTP_USER=<your_smtp_user>
   CLIENT_ID=<your_client_id>
   CLIENT_SECRET=<your_client_secret>
   CLIENT_REFRESH_TOKEN=<your_client_refresh_token>
   ```

4. Run the project:
   ```sh
   npm run dev
   ```

## Technologies Used

- **Next.js / React** for frontend development
- **Tailwind CSS** for styling
- **Prisma** for database management
- **Nodemailer** for email handling
- **tRPC** for type-safe API communication

## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License.

---

**Author:** Julio Castaño
