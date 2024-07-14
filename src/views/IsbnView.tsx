"use client";
import { isbn } from "@chewhx/google-books";
import { CodeHighlight } from "@mantine/code-highlight";
import {
  ActionIcon,
  Box,
  JsonInput,
  Loader,
  Stack,
  TextInput,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const IsbnView = () => {
  const [result, setResult] = React.useState<any>({});
  const [input, setInput] = useInputState<string>("9780374159122");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(() => {
    setIsLoading(true);
    isbn(input)
      .then(setResult)
      .finally(() => setIsLoading(false));
  }, [input]);

  return (
    <Stack py="sm">
      <TextInput
        value={input}
        onChange={setInput}
        onKeyUp={(e) => {
          if (e.key === "Enter" && !isLoading) {
            fetchData();
          }
        }}
        rightSection={
          isLoading ? (
            <Loader type="dots" size="xs" />
          ) : (
            <ActionIcon onClick={fetchData}>
              <IconArrowRight size={18} />
            </ActionIcon>
          )
        }
      />
      <CodeHighlight
        style={{ borderRadius: 10 }}
        styles={{
          copy: {
            position: "absolute",
            marginTop: 3,
          },
        }}
        code={`import { isbn } from '@chewhx/google-books';\n\nisbn('${input}');`}
      />
      <Box pos="relative">
        {isLoading && (
          <Loader pos="absolute" top="45%" left="45%" type="dots" />
        )}
        <JsonInput
          disabled={isLoading}
          readOnly
          value={JSON.stringify(result, null, 2)}
          rows={8}
          styles={{
            input: {
              fontSize: "12px",
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default IsbnView;
