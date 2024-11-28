import Head from "next/head";
import { Box, Button, Text, HStack, Input } from "@chakra-ui/react";
import { ThemeSwitch } from "@/components/theme-switch";
import { system } from "@/configs/theme";

export default function Home() {
  console.log(system.token("colors.secondary"));

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        px={{ lg: "10em", md: "6em", base: "1em" }}
        my="2em"
        display="flex"
        flexFlow="column"
        gap="2em"
      >
        <Box display="flex" flexFlow="column" gap=".8em">
          <Text>Layout issue with Select component (fixed)</Text>
          <HStack>
            <Button>Main Button</Button>
            <Button>Secondary Button</Button>
            <Input />
            <Box position="relative">
              <ThemeSwitch />
            </Box>
          </HStack>
        </Box>

        <Box my="1em">
          <Text>Theme config setup</Text>
          <HStack my="1em">
            <Button>Click me</Button>
            <Button variant="outline">Click me</Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
