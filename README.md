## ChakraUI v2 to v3 Migration blockers

This repo aims to document some of the issues users on the ChakraUI discord channel faces while migrating from v2 to v3.

Below, you'll find some of the issues, and short summary of the solution with links to the file(s) in this repo.

- ### layout issue when using the Select component in `<HStack>`

the layout shift occurs when the menu is open. The trick is to wrap the select in a parent with relative positioning and set its own position to absolute

see [theme-switch](https://github.com/kaf-lamed-beyt/chakra-v3-test/blob/84ecd71e75f0a2247acc38160ddaca13414c3707/components/theme-switch.tsx#L37) and the [parent](https://github.com/kaf-lamed-beyt/chakra-v3-test/blob/84ecd71e75f0a2247acc38160ddaca13414c3707/pages/index.tsx#L19)

- ### theme config

Although, in the docs, applying the color like so should get it to work. But, it didn't.

```tsx
 <Button color="primary" >Click me</Button>
```
One approach i used that worked was to explicitly reference the token like so:

```tsx
 <Button color={system.token("colors.secondary")}>Click me</Button>
```

This worked. But, i don't think its the best.

- ### opt out of Chakra's dark/light mode

If you don't want to serve the dark/light mode theme in your project. You can opt-out by updating the `<ColorModeProvider />` in `components/ui/provider` by setting the `forcedTheme` prop to either light or dark like so:

```tsx
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} forcedTheme="light" />
    </ChakraProvider>
  );
}
```
