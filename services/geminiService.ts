import { KnowledgeDoc, ChatMessage } from '../types';

/**
 * Client-side service: call the serverless proxy at /api/generate.
 * This avoids exposing the Gemini API key in the client bundle.
 */
export const generateAnswer = async (
  question: string,
  documents: KnowledgeDoc[],
  history: ChatMessage[]
): Promise<string> => {
  try {
    const resp = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question, documents, history })
    });

    if (!resp.ok) {
      const errBody = await resp.json().catch(() => ({}));
      const errMsg = errBody?.error || `Server returned ${resp.status}`;
      throw new Error(errMsg);
    }

    const data = await resp.json();
    return data.text || "Không có phản hồi từ server.";
  } catch (err: any) {
    console.error("Client generateAnswer error:", err);
    throw new Error(err?.message || "Lỗi khi gọi server API.");
  }
};