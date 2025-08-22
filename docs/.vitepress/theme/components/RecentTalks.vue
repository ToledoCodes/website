<template>
  <section class="recent-talks">
    <div class="container">
      <h2>Recent Talks</h2>
      
      <div class="talks-grid">
        <div 
          v-for="talk in talks" 
          :key="talk.title"
          class="talk-card"
        >
          <div class="talk-header">
            <div class="talk-date">{{ formatDate(talk.date) }}</div>
            <span v-if="talk.author" class="talk-author">{{ talk.author }}</span>
          </div>
          <h3 class="talk-title">
            <a :href="talk.link" class="talk-link">{{ talk.title }}</a>
          </h3>
          <div class="talk-actions">
            <a :href="talk.link" class="talk-read-more">View Details →</a>
          </div>
        </div>
      </div>
      
      <div class="talks-actions">
        <a href="/presentations/" class="btn-link">All Presentations</a>
        <a href="https://lu.ma/toledocodes" target="_blank" class="btn-link">Upcoming Events</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  talks: {
    type: Array,
    default: () => []
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.recent-talks {
  padding: 2rem 0;
  background: var(--vp-c-bg-soft);
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.recent-talks h2 {
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  font-family: 'Lexend', sans-serif;
}

.talks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.talk-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.2s ease;
}

.talk-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(25, 25, 112, 0.1);
  border-color: var(--vp-c-brand);
}

.talk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.talk-date {
  font-size: 0.8rem;
  color: var(--vp-c-brand);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.talk-author {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.talk-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  font-family: 'Lexend', sans-serif;
}

.talk-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.talk-link:hover {
  color: var(--vp-c-brand);
}

.talk-actions {
  text-align: right;
}

.talk-read-more {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
  transition: color 0.2s ease;
}

.talk-read-more:hover {
  color: var(--vp-c-brand-dark);
}

.talks-actions {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.btn-link:hover {
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .recent-talks {
    padding: 1.5rem 0;
  }
  
  .recent-talks h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .talks-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .talk-card {
    padding: 1rem;
  }
  
  .talk-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .talks-actions {
    gap: 1rem;
  }
}
</style>
