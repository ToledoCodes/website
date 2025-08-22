---
title: RAGs to Riches - Economics of Retrieval-Augmented Generation
date: 2024-11-15
description: An in-depth exploration of RAG systems and how to build applications that leverage the power of semantic search and large language models.
slides:
  - title: RAGs to Riches - Economics of Retrieval-Augmented Generation
    url: https://www.slideshare.net/slideshow/rags-to-riches-economics-of-retrieval-augmented-generation-pdf/282594682
    author: Justin Beaudry
  - title: RAGs to Riches - Intelligent Applications
    url: https://www.slideshare.net/slideshow/rags-to-riches-intelligent-applications-pdf/282594683
    author: Justin Beaudry
---

# RAGs to Riches - Economics of Retrieval-Augmented Generation

**Date: August 21st, 2025**

Toledo Codes hosted an in-depth exploration of Retrieval-Augmented Generation (RAG) systems, featuring Justin Beaudry's comprehensive presentation on building applications that leverage the power of semantic search and large language models. This session demystified the core components of RAG architectures and provided practical insights for developers, product managers, entrepreneurs, students, and anyone curious about AI technology.

## About the Presentation

This session equipped attendees with fundamental knowledge about one of the most important patterns in AI application development. The presentation covered both the theoretical foundations and practical implementation details of RAG systems, making complex concepts accessible to a diverse audience.

## What Was Covered

### The RAG Foundation
Understanding how RAG systems combine the power of retrieval mechanisms with generative AI to create more accurate, contextual, and trustworthy applications. The session explored how to build and maintain an effective corpus that serves as your application's knowledge base.

### Search & Ranking Deep Dive
Mastering the mechanics of semantic search, including cosine similarity and other ranking algorithms. Attendees learned how to optimize retrieval performance and ensure systems return the most relevant information for any query.

### The Art of Chunking
Discovering the critical decisions around text chunking strategies. The presentation examined optimal chunk sizes, the importance of chunk overlap, and how these choices impact both retrieval quality and system performance.

### Embedding Models Decoded
Navigating the landscape of embedding models with confidence. The session covered what embeddings actually represent, compared popular models, and provided guidance on selecting the right model for specific use cases and performance requirements.

### Beyond Basic RAG: Knowledge Graph Augmentation
Taking RAG implementation to the next level by incorporating knowledge graphs. Attendees learned how graph-based representations can enhance context understanding, improve relationship mapping, and enable more sophisticated query responses.

## Key Takeaways

The presentation emphasized practical techniques and insights into this transformative technology, including:

- **Economic Considerations**: Understanding the cost implications and trade-offs in RAG system design
- **Architecture Patterns**: Best practices for building scalable and maintainable RAG applications
- **Performance Optimization**: Strategies for improving retrieval accuracy and response quality
- **Real-world Applications**: Practical examples of successful RAG implementations

## Target Audience

This session welcomed anyone eager to understand RAG technology - from those planning to build applications to those who simply wanted to understand how AI systems retrieve and process information. While technical terminology and implementation details were covered, all concepts were explained in an accessible way.

## Presentations

Below are the slides from presentations given at this event:

<div class="slides-container">
  <div v-for="slide in $frontmatter.slides" :key="slide.title" class="slide-item">
    <h3>{{ slide.title }}</h3>
    <p class="slide-author">By {{ slide.author }}</p>
    <div class="slide-actions">
      <a :href="slide.url" target="_blank" class="slide-download">
        Download Slides
      </a>
    </div>
  </div>
</div>

## Get Involved

If you'd like to present at a future Toledo Codes event, please visit our [Submit a Talk](/submit-talk/) page. We welcome presentations on a wide range of technical topics and experience levels.

<style>
.slides-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.slide-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.slide-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.slide-author {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin: 0.5rem 0 1rem;
}

.slide-actions {
  margin-top: 1rem;
}

.slide-download {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand);
  color: white !important;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.slide-download:hover {
  background-color: var(--vp-c-brand-dark);
  color: white !important;
}
</style>
