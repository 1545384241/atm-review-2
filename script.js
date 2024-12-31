// Get elements
const loginContainer = document.getElementById('login-container');
const dashboardContainer = document.getElementById('dashboard-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const themeToggle = document.getElementById('theme-toggle');
const errorMessage = document.getElementById('error-message');
const registrationErrorMessage = document.getElementById('registration-error-message');
const goToRegisterButton = document.getElementById('go-to-register');
const goToLoginButton = document.getElementById('go-to-login');
const exitButton = document.getElementById('exit');

// Store users data
let users = [];
let loggedInUser = null;

// Login functionality
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const pin = document.getElementById('pin').value;
    
    loggedInUser = users.find(user => user.cardNumber === cardNumber && user.pin === pin);
    if (loggedInUser) {
        loginContainer.style.display = 'none';
        dashboardContainer.style.display = 'block';
        document.getElementById('user-name').innerText = loggedInUser.name;
        document.getElementById('current-balance').innerText = `Balance: $${loggedInUser.balance || 1000}`;
        errorMessage.textContent = '';

        // Bind event listeners for dashboard buttons
        bindDashboardButtonEvents();

        // Show theme toggle button on the dashboard
        themeToggle.style.display = 'inline-block';
    } else {
        errorMessage.textContent = 'Invalid card number or PIN.';
    }
});

// Register functionality
goToRegisterButton.addEventListener('click', function() {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

goToLoginButton.addEventListener('click', function() {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('reg-card-number').value;
    const pin = document.getElementById('reg-pin').value;
    const name = document.getElementById('name').value;

    if (cardNumber.length === 16 && pin.length === 4 && name) {
        const newUser = {
            cardNumber: cardNumber,
            pin: pin,
            name: name,
            balance: 1000
        };
        users.push(newUser);
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    } else {
        registrationErrorMessage.textContent = 'Please fill in all fields correctly.';
    }
});

// Exit functionality
exitButton.addEventListener('click', function() {
    loggedInUser = null;
    dashboardContainer.style.display = 'none';
    loginContainer.style.display = 'block';

    // Hide theme toggle button when logged out
    themeToggle.style.display = 'none';
});

// Theme toggle functionality
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Bind event listeners for dashboard buttons
function bindDashboardButtonEvents() {
    // Event listener for "Check Balance"
    const checkBalanceButton = document.getElementById('check-balance');
    checkBalanceButton.addEventListener('click', function() {
        alert(`Your balance is $${loggedInUser.balance || 1000}`);
    });

    // Event listener for "Withdraw"
    const withdrawButton = document.getElementById('withdraw');
    withdrawButton.addEventListener('click', function() {
        const amount = prompt("Enter amount to withdraw:");
        if (amount && !isNaN(amount)) {
            loggedInUser.balance -= parseFloat(amount);
            document.getElementById('current-balance').innerText = `Balance: $${loggedInUser.balance}`;
            alert(`You withdrew $${amount}`);
        } else {
            alert("Invalid amount");
        }
    });

    // Event listener for "Deposit"
    const depositButton = document.getElementById('deposit');
    depositButton.addEventListener('click', function() {
        const amount = prompt("Enter amount to deposit:");
        if (amount && !isNaN(amount)) {
            loggedInUser.balance += parseFloat(amount);
            document.getElementById('current-balance').innerText = `Balance: $${loggedInUser.balance}`;
            alert(`You deposited $${amount}`);
        } else {
            alert("Invalid amount");
        }
    });

    // Event listener for "Transfer"
    const transferButton = document.getElementById('transfer');
    transferButton.addEventListener('click', function() {
        const amount = prompt("Enter amount to transfer:");
        const cardNumber = prompt("Enter recipient's card number:");
        if (amount && !isNaN(amount) && cardNumber) {
            // Simulate a transfer
            loggedInUser.balance -= parseFloat(amount);
            document.getElementById('current-balance').innerText = `Balance: $${loggedInUser.balance}`;
            alert(`You transferred $${amount} to card number ${cardNumber}`);
        } else {
            alert("Invalid details");
        }
    });
}
