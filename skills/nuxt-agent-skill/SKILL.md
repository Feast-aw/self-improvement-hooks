---
name: nuxt-agent-skill
description: Nuxt3 example skill to demonstrate agent integration and writing pending summaries to .learnings
metadata:
---

This skill demonstrates how a Nuxt3 app can call an LLM from a server endpoint and record a pending summary into .learnings/.pending_summaries.

Files:
- examples/nuxt-agent/server/api/agent.post.ts
- examples/nuxt-agent/pages/index.vue

Usage:
- Set OPENAI_API_KEY in environment
- Run: cd examples/nuxt-agent && npm install && npm run dev

This skill is intentionally minimal and writes drafts to .learnings for manual review before promotion.
