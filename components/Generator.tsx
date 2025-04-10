'use client';
import { useState } from "react";
import axios from "axios";

export default function Generator() {
  const [idea, setIdea] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    setIdea("");
    setImageUrl("");

    const ideaRes = await axios.post("/api/generate");
    setIdea(ideaRes.data.idea);

    const imageRes = await axios.post("/api/image", { prompt: ideaRes.data.idea });
    setImageUrl(imageRes.data.url);

    setLoading(false);
  };

  return (
    <div className="text-center py-10 px-4">
      <button
        onClick={generate}
        className="bg-neon-blue text-black px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
      >
        {loading ? "生成中..." : "生成一个网站创意 🚀"}
      </button>

      {idea && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-neon-pink">创意：</h2>
          <p className="text-lg mt-2">{idea}</p>
        </div>
      )}

      {imageUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-neon-green">图片展示：</h2>
          <img src={imageUrl} alt="Generated" className="mt-4 w-full max-w-lg mx-auto rounded-lg border border-neon-blue" />
        </div>
      )}
    </div>
  );
}
