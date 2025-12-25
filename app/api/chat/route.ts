// import { streamText, UIMessage, convertToModelMessages } from 'ai';
// import { openai } from "@ai-sdk/openai";
// // import { google } from '@ai-sdk/google';

// export const maxDuration = 30;

// export async function POST(req: Request) {
//   const { messages }: { messages: UIMessage[] } = await req.json();

//   const result = streamText({
//     model: openai("gpt-4o-mini"),
//     // model: google('gemini-1.5-pro'),
//     messages: await convertToModelMessages(messages),
//   });

//   return result.toUIMessageStreamResponse();
// }
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    // model: "google/gemini-2.5-flash",
    // model: "mistral/devstral-2",
    model: "meta/llama-3.1-70b",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}