import { createStandaloneToast } from "@chakra-ui/react";

export const showError = (errorMessage) => {
  const errorToast = createStandaloneToast();

  errorToast.closeAll();

  errorToast({
    description: errorMessage,
    status: "error",
    duration: 5000,
    position: "bottom",
    isClosable: true,
  });
};

export const showInfo = (infoMessage) => {
  const infoToast = createStandaloneToast();

  infoToast.closeAll();

  infoToast({
    description: infoMessage,
    status: "info",
    duration: 5000,
    position: "bottom",
    isClosable: true,
  });
};
