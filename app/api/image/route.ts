import { OpenAI } from "openai";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const result = await openai.images.generate({
    prompt: `${prompt}，霓虹灯、城市、未来科技风格`,
    model: "dall-e-3",
    n: 1,
    size: "1024x1024"
  });

  const url = result.data[0].url;
  return Response.json({ url });
}
