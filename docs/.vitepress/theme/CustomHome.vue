<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="custom-home-wrapper">
    <div class="container">
      <div class="main">
        <div class="cta-container">
          <div v-if="frontmatter.upcoming_event" class="event-callout">
            <h2 class="event-heading">Register for our next Toledo Codes event</h2>
            <template v-if="frontmatter.upcoming_event.title">
              <h2 class="event-title">{{ frontmatter.upcoming_event.title }}</h2>
            </template>
            <template v-if="frontmatter.upcoming_event.description || frontmatter.upcoming_event.tagline">
              <p class="event-tagline">{{ frontmatter.upcoming_event.description || frontmatter.upcoming_event.tagline }}</p>
            </template>

            <ul class="event-meta">
              <li v-if="frontmatter.upcoming_event.date"><strong>Date:</strong> {{ frontmatter.upcoming_event.date }}</li>
              <li>
                <strong>Where & When:</strong>
                {{ frontmatter.upcoming_event.venue || 'Toledo Tech Loft' }} @ {{ frontmatter.upcoming_event.time || '6 PM' }}
              </li>
            </ul>

            <div class="event-button-wrap">
              <LumaRegisterButton
                v-if="frontmatter.upcoming_event.href || frontmatter.upcoming_event.eventId"
                :event-id="frontmatter.upcoming_event.eventId"
                :href="frontmatter.upcoming_event.href || (`https://lu.ma/event/${frontmatter.upcoming_event.eventId}`)"
                :label="frontmatter.upcoming_event.buttonText || 'Register for Event'"
              />
              <a 
                v-else-if="frontmatter.upcoming_event.link"
                class="event-button" 
                :href="frontmatter.upcoming_event.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ frontmatter.upcoming_event.buttonText || 'Register on Luma' }}
              </a>
            </div>
          </div>
          
          <div v-if="frontmatter.survey" class="survey-callout">
            <h2 class="survey-title">{{ frontmatter.survey.title }}</h2>
            <p class="survey-tagline">{{ frontmatter.survey.tagline }}</p>
            <a 
              class="survey-button" 
              :href="frontmatter.survey.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ frontmatter.survey.buttonText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-home-wrapper {
  padding: 0 24px;
  margin: 24px 0;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.main {
  margin: 0 auto;
  max-width: 1080px;
}

.cta-container {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-direction: row;
  align-items: stretch;
}

.survey-callout, .event-callout {
  flex: 1;
  max-width: 500px;
  margin-bottom: 24px;
  padding: 24px;
  color: var(--white);
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.survey-callout {
  background: linear-gradient(135deg, #3a5ccc 0%, #191970 100%);
}

.event-callout {
  background: linear-gradient(135deg, #191970 0%, #3a5ccc 100%);
  margin-top: 24px;
}

.event-heading {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--white);
  opacity: 0.95;
}

.survey-title, .event-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--white);
}

.survey-tagline, .event-tagline {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--white);
}

.event-meta {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  color: var(--white);
}
.event-meta li {
  margin: 4px 0;
}
.event-meta strong {
  font-weight: 600;
}

.event-button-wrap {
  margin-top: auto;
}

.survey-button, .event-button {
  display: inline-block;
  padding: 10px 24px;
  background-color: var(--white);
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-top: auto;
}

.survey-button {
  color: var(--vp-c-brand-1);
}

.event-button {
  color: #191970;
}

.survey-button:hover, .event-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .main {
    max-width: 688px;
  }
  
  .cta-container {
    flex-direction: column;
    align-items: center;
  }
  
  .survey-callout, .event-callout {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 639px) {
  .custom-home-wrapper {
    padding: 0 16px;
  }
}
</style> 