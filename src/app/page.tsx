import { CodeHighlight } from "@mantine/code-highlight";
import {
  Anchor,
  Center,
  Divider,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
} from "@mantine/core";
import AuthorView from "../views/AuthorView";
import IdView from "../views/IdView";
import IsbnView from "../views/IsbnView";
import SearchView from "../views/SearchView";
import TitleView from "../views/TitleView";
import { functionType } from "../constants";

export default function Home() {
  return (
    <Center h="100vh">
      <Stack w={600}>
        {/* 1 */}
        <Group justify="space-between" align="center">
          <Stack gap={0}>
            <Text size="lg" fw={500}>
              @chewhx/google-books
            </Text>
            <Text size="xs">
              Javascript Wrapper to search for books on Google Books API
            </Text>
          </Stack>
          <Group>
            <Anchor
              href="https://github.com/chewhx/google-books"
              target="_blank"
              referrerPolicy="no-referrer"
              size="sm"
              td="underline"
            >
              GitHub
            </Anchor>
            <Anchor
              href="https://www.npmjs.com/package/@chewhx/google-books"
              target="_blank"
              referrerPolicy="no-referrer"
              size="sm"
              td="underline"
            >
              NPM
            </Anchor>
          </Group>
        </Group>
        {/* 2 */}
        <CodeHighlight
          style={{ borderRadius: 10 }}
          styles={{
            copy: {
              position: "absolute",
              marginTop: 3,
            },
          }}
          language="shell"
          code={`npm install @chewhx/google-books`}
        />
        <Divider my="xs" />
        {/* 3 */}
        <Tabs variant="pills" defaultValue="search">
          <TabsList
            style={{
              fontFamily: "monospace",
            }}
          >
            {functionType.map((e) => (
              <TabsTab style={{ fontSize: "12px" }} key={e} value={e}>
                {e}
              </TabsTab>
            ))}
          </TabsList>
          <TabsPanel value="search">
            <SearchView />
          </TabsPanel>
          <TabsPanel value="title">
            <TitleView />
          </TabsPanel>
          <TabsPanel value="id">
            <IdView />
          </TabsPanel>
          <TabsPanel value="author">
            <AuthorView />
          </TabsPanel>
          <TabsPanel value="isbn">
            <IsbnView />
          </TabsPanel>
        </Tabs>
      </Stack>
    </Center>
  );
}
