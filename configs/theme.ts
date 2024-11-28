import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "blue" },
        secondary: { value: "#EE0F0F" },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
  },
});

export const system = createSystem(config);
