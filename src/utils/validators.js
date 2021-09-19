export const validateEmail = (email) => {
  if (!email) {
    throw new Error("Please enter an email address.");
  } else if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Please enter a valid email address.");
  }
};

export const validatePassword = (password) => {
  if (!password) {
    throw new Error("Please enter a password.");
  } else if (password.length < 8) {
    throw new Error("Passwords must be at least 8 characters.");
  }
};

export const validateAccountName = (accountName) => {
  if (!accountName) {
    throw new Error("Please enter an account name.");
  }
};

export const validateGames = (games) => {
  if (Object.keys(games).length === 0) {
    throw new Error("Please choose at least one game.");
  }
};
