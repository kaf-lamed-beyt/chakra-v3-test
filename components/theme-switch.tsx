import {
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem,
  createListCollection,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SelectRoot
      collection={frameworks}
      size="sm"
      positioning={{ placement: "top", flip: true }}
      width="320px"
      value={[theme ?? ""]}
      onValueChange={(e) => {
        if (e.value[0]) setTheme(e.value[0]);
      }}
    >
      <SelectTrigger>
        <SelectValueText placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent position="absolute" width="100%" top="10">
        {frameworks.items.map((framework) => (
          <SelectItem item={framework.label} key={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
