# PASSWORD RESET FLOW (UI)

This project implements a secure password reset flow with email verification and encrypted password storage in the database.

### Functionality

- **Protected Home Page**: Only accessible to authorized users.
- **Sign-in/Register Page**: Separate sections for login and new user registration.
- **Forgot Password**: Sends a One-Time Password (OTP) with a five-minute validity to the user's registered email address.
- **Reset Password Link**: Email link automatically redirects to the password reset page.
- **Secure Password Reset**: Validates OTP and email before updating the password in the database using a secure hashing algorithm.

### React Routes

- `/`: Home (Protected)
- `/login`: Login and Registration
- `/create`: New User Registration
- `/forgot-password`: Send Password Reset Link
- `/reset-password`: Reset Old Password

### Setup

**Prerequisites:**

- Node.js
- npm (Node Package Manager)

**Instructions:**

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open http://localhost:3000/ in your browser to access the application.