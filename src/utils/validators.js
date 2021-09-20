import { personalities } from "./constants";

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

export const validateAge = (ageStr) => {
  if (!ageStr) {
    throw new Error("Please enter an age.");
  } else if (isNaN(ageStr)) {
    throw new Error("Age must be a number.");
  }

  const age = parseInt(ageStr);
  if (age < 18 || age > 99) {
    throw new Error("Must be between 18 and 99 years old to register.");
  }
};

export const validatePersonality = (personality) => {
  if (personality && !personalities.includes(personality)) {
    throw new Error("Please provide a valid personality.");
  }
};
