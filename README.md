ATM System - README
Overview
This ATM System is a simple web-based application that allows users to log in, register, and access a variety of ATM functionalities such as checking their balance, withdrawing money, depositing money, and transferring funds to another account. The system also includes user authentication via card number and PIN, as well as theme toggling (light/dark mode) to enhance the user experience.

Features
Login System: Users can log in using a card number and PIN.
Registration: New users can register with a card number, PIN, and their name.
Dashboard: After login, users can access their account balance, perform transactions (withdraw, deposit, transfer), and toggle the interface theme (light/dark mode).
Responsive Design: The system is responsive and optimized for use on both desktop and mobile devices.
Input Validation: Ensures that the card number and PIN entered by the user are valid.
Theme Toggle: Users can switch between light and dark themes. The theme preference is saved locally in the browser.
Error Handling: Displays error messages when invalid data is entered or actions fail (e.g., invalid card number or insufficient funds).
Files and Structure
index.html: The main HTML structure of the application, which includes the login form, registration form, dashboard, and modals for transaction actions.
style.css: The stylesheet that defines the design and layout of the page, including light/dark theme styles.
script.js: The JavaScript file responsible for handling user interactions, form submissions, and theme toggling.
Getting Started
To run the ATM system locally, follow these steps:

Clone the Repository

bash
Copy code
git clone <repository-url>
Navigate to the project directory

bash
Copy code
cd <project-directory>
Open the index.html file in your browser
Double-click the index.html file to open it in your default web browser.

Usage
Login
Open the login page.
Enter your card number and PIN, then click Login.
If the credentials are correct, you will be taken to the dashboard.
Registration
If you don't have an account, click on the "Don't have an account? Register" link to go to the registration page.
Enter your card number, PIN, and name.
After registration, you will be automatically logged in, and your dashboard will be displayed.
Dashboard
Once logged in, you can:

View your current balance.
Perform transactions (withdraw, deposit, or transfer money).
Exit the system, which will log you out and return to the login page.
Theme Toggle
You can switch between light and dark modes using the Toggle Theme button on the dashboard and login/registration pages. Your theme preference is saved in the browser.

Transactions
Withdraw: Enter an amount to withdraw. The system checks if you have enough balance before proceeding.
Deposit: Enter an amount to deposit to your account.
Transfer: Enter the recipient's card number and amount to transfer funds to another account.
Validation Rules
Card Number: The card number must be 16 digits and pass the Luhn algorithm (used for validating credit card numbers).
PIN: The PIN must be exactly 4 digits.
Name: The name is required during registration.
Technologies Used
HTML5: The markup language used to create the structure of the page.
CSS3: Used for styling the application, including responsive design and theme support.
JavaScript: Handles form validation, theme toggling, and interaction with the DOM.
Bootstrap 5: A CSS framework used for the layout and responsive design.
Known Issues
Card Number Format: Card numbers must be valid per the Luhn algorithm. Invalid card numbers (even if they are 16 digits long) will not be accepted.
Local Storage Limitation: User data is stored in the browser's localStorage, which means it will be lost if the user clears their browser cache or uses a different browser.
Contributing
Contributions are welcome! If you'd like to improve or add features to the ATM system, please feel free to fork the repository and submit a pull request.

License
This project is open-source and available under the MIT License.