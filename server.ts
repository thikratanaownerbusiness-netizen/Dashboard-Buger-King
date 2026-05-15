import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY as string,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', brand: 'Burger King FlameOS' });
  });

  app.post('/api/gemini/insights', async (req, res) => {
    try {
      const { data } = req.body;
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are the executive AI strategist for Burger King. 
        Analyze the following operations data and provide 3 high-impact, pithy, executive-grade business insights.
        Data: ${JSON.stringify(data)}
        Format each insight as:
        - TYPE: [Opportunity/Alert/Strategy]
        - TITLE: [Short Catchy Title]
        - CONTENT: [The insight itself]`,
        config: {
          systemInstruction: "Always speak with the authority of a Chief Operating Officer. Be direct, data-driven, and slightly cinematic.",
        }
      });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Gemini Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FlameOS Server running on http://localhost:${PORT}`);
  });
}

startServer();
