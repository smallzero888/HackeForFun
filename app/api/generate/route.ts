import { OpenAI } from "openai";

export async function POST() {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const chat = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: "生成一个有趣又有未来感的网站创意，包含网站名称、slogan 和功能简介"
      }
    ],
    temperature: 0.9
  });

  const idea = chat.choices[0].message.content;

  return Response.json({ idea });
}
