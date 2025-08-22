---
title: Putting the 'You' in User Research
date: 2024-05-16
description: Usability Lessons for Young Software Developers featuring Blade Frisch, a PhD candidate in Computational Science and Engineering at Michigan Technological University.
slides:
  - title: Putting the 'You' in User Research - Usability Lessons for Young Software Developers
    url: https://www.slideshare.net/slideshow/putting-the-you-in-user-research-usability-lessons-for-young-software-developers/279197120
    author: Blade Frisch
---

# Putting the 'You' in User Research

**Date: May 16, 2025**

Toledo Codes recently hosted "Putting the 'You' in User Research: Usability Lessons for Young Software Developers," featuring an engaging presentation by Blade Frisch, a PhD candidate in Computational Science and Engineering at Michigan Technological University. The event was a tremendous success, bringing together our local tech community for an evening of learning, networking, and collaboration.

## About the Presentation

Blade shared his journey from software developer to user researcher, drawing on his diverse background in music education, computer science education, special education, Android development at Ford, and his experience founding an assistive technology startup called Frischly Made Tech.

His presentation addressed a critical aspect of software development that often goes overlooked: understanding the end users of our products. The talk wasn't designed to transform attendees into user researchers (as Blade noted, it's "truly a specialized skillset"), but rather to introduce key concepts and convince developers of the value of basic user research.

## Key Approaches Covered

The presentation covered four main approaches to user research:

1. **Read Up (Research)**: Looking at what's currently being done through Google searches, company websites, and industry events—understanding that "lived experience is NOT the same as research!"

2. **Talk to People (Interviews)**: Both casual conversations and structured interviews with actual users (specifically NOT other developers) to gain perspective and context.

3. **Observe People (Ethnography)**: Watching users in their natural environments to see what they actually do versus what they say they do.

4. **Test with People (Usability Testing)**: Having users complete specific tasks to identify where designs break down—which Blade emphasized with, "If you do nothing else, do this!"

## Interactive Format

What made the evening particularly special was the interactive format. Instead of just lecturing, Blade incorporated four hands-on activities throughout the presentation:

- **Activity 1**: Asking neighbors about their desk or workstation setup (casual talks)
- **Activity 2**: Answering structured interview questions about workspace setup and essential tools
- **Activity 3**: Observing Blade as he presented (ethnography in action)
- **Activity 4**: A practical usability test using Amazon.com to find a book's table of contents

## Key Takeaways

Blade concluded with three essential points:
1. "Being a developer is not enough to make usable software"
2. "Any developer can learn basic usability skills"
3. "Work with usability experts to take your idea from code to product"

He emphasized the importance of diverse teams that include UX/UI designers, graphic designers, content designers, and researchers—not just developers. And he shared valuable resources, including several recommended books on user research and experience design.

## Recommended Resources

Blade recommended several excellent resources for those interested in learning more about user research:

- ["Just Enough Research" by Erika Hall](https://abookapart.com/products/just-enough-research)
- ["Validating Product Ideas" by Tomer Sharon](https://rosenfeldmedia.com/books/lean-user-research/)
- ["The User Experience Team of One" by Leah Buley](https://rosenfeldmedia.com/books/the-user-experience-team-of-one/)
- ["Interviewing Users" by Steve Portigal](https://rosenfeldmedia.com/books/interviewing-users/)
- ["Observing the User Experience" by Elizabeth Goodman, Mike Kuniavsky, and Andrea Moed](https://www.elsevier.com/books/observing-the-user-experience/goodman/978-0-12-384869-7)
- ["User Research" by Stephanie Marsh](https://www.koganpage.com/product/user-research-9780749481049)
- [User Interviews Platform](https://www.userinterviews.com/) (the research participant recruitment platform shown in the presentation)

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
