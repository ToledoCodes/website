---
title: Toledo Codes Introduction Meetup
date: 2024-03-15
description: Our first meetup introducing Toledo Codes to the community with a presentation on Rocket Hacks 2025 and Augmented Development.
slides:
  - title: Augmented Development - The DIRECT framework
    url: https://www.slideshare.net/slideshow/augmented-development-the-direct-framework-pdf/277054724
    author: Justin Beaudry
---

# Hello, Toledo

**Date: March 20, 2025**

Toledo Codes made its debut with a resounding success! Our first event attracted nearly 50 registered participants with impressive attendance rates. The enthusiastic audience brought energy and valuable participation, creating an interactive atmosphere that exceeded our expectations for a launch event.

Thank you to everyone who joined us and contributed to making our inaugural Toledo Codes gathering a memorable one. We're excited to build on this momentum for future events!

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