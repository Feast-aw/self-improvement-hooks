# Nuxt3 + Agent Example

This example shows a minimal Nuxt 3 app calling an LLM (OpenAI-compatible) from a server endpoint and recording a pending summary to .learnings.

Quick start:

1. cd examples/nuxt-agent
2. npm install
3. export OPENAI_API_KEY=your_key_here
4. npm run dev
5. Open http://localhost:3000, ask a question

Notes:
- The server writes a draft summary into .learnings/.pending_summaries for manual review.
- Do not commit node_modules. The repo .gitignore excludes it.

Security:
- Keep your API key secret; do not upload it to the repo or share in chat.
