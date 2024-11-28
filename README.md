## ChakraUI v2 to v3 Migration blockers

This repo aims to document some of the issues users on the ChakraUI discord channel faces while migrating from v2 to v3.

Below, you'll find some of the issues, and short summary of the solution with links to the file(s) in this repo.

- ### layout issue when using the Select component in `<HStack>`

the layout shift occurs when the menu is open. The trick is to wrap the select in a parent with relative positioning and set its own position to absolute

see [theme-switch](https://github.com/kaf-lamed-beyt/chakra-v3-test/blob/84ecd71e75f0a2247acc38160ddaca13414c3707/components/theme-switch.tsx#L37) and the [parent](https://github.com/kaf-lamed-beyt/chakra-v3-test/blob/84ecd71e75f0a2247acc38160ddaca13414c3707/pages/index.tsx#L19)
