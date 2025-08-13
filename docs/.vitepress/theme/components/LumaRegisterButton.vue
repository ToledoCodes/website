<template>
  <a
    :href="href"
    class="luma-btn"
    :aria-label="ariaLabel"
    rel="noopener noreferrer"
    data-luma-action="checkout"
    :data-luma-event-id="eventId"
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<script setup lang="ts">
import { onMounted, computed, defineProps } from 'vue'

const props = defineProps<{
  eventId: string
  href: string
  label?: string
  ariaLabel?: string
}>()

const label = computed(() => props.label ?? 'Register for Event')
const ariaLabel = computed(() => props.ariaLabel ?? label.value)

function ensureLumaScript() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  const existing = document.getElementById('luma-checkout') as HTMLScriptElement | null
  if (existing) return

  const s = document.createElement('script')
  s.id = 'luma-checkout'
  s.src = 'https://embed.lu.ma/checkout-button.js'
  s.async = true
  document.head.appendChild(s)
}

onMounted(() => {
  ensureLumaScript()
})
</script>

<style scoped>
.luma-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.06s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  background: #191970; /* Toledo Codes primary */
  color: #ffffff;
  font-family: var(--vp-font-family-base, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji");
  box-shadow: 0 2px 8px rgba(25, 25, 112, 0.25);
}
.luma-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(25, 25, 112, 0.28);
}
.luma-btn:active {
  transform: translateY(0);
}
.luma-btn:focus-visible {
  outline: 3px solid rgba(25, 25, 112, 0.6);
  outline-offset: 2px;
}
</style>
