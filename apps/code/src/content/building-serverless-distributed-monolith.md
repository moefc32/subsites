---
title: "Building a Serverless Distributed Monolith"
date: 2026-08-28 17:23
hook: "One website can represent many disciplines, but forcing them into the same structure eventually makes every part harder to understand."
image: ""
---

As someone working across design, software engineering, and research, I found that the traditional approach simply couldn't capture the breadth of my work. I needed more than a portfolio or a personal blog. I wanted a digital ecosystem where each discipline could stand on its own while still contributing to a unified identity. More importantly, the website itself had to demonstrate the same architectural thinking that I apply when building software.

That realization completely changed how I viewed personal websites. Instead of how I should present my work, I started asking: _How I should organize it?_ The challenge was no longer visual design or frontend development. It became an architectural problem about structuring information, separating responsibilities, and allowing the entire ecosystem to grow without becoming increasingly difficult to navigate.

## When One Website Was No Longer Enough

Like many people, I started with WordPress as a practical choice. It was an obvious choice at the time, but performance quickly became a concern for me. Customizing the platform also felt increasingly restrictive because I rarely worked within the PHP ecosystem directly. Rather than investing more effort into fighting the platform, I decided to move toward static site generation using Jekyll and deploy the site on GitHub Pages instead.

That transition solved the performance problems, but it exposed a different one. As my portfolio and my skillsets continued to grow, I found myself forcing unrelated content into the same navigation, the same information architecture, and the same user journey. Research, programming, design, and writing all competed for attention even though they served completely different audiences. The limitation was no longer the technology. It was the assumption that everything belonged in one website.

I also noticed another consequence. Every time I introduced a new type of content, I had to rethink the entire navigation. Categories became increasingly ambiguous, menus grew longer, and unrelated topics started competing for the same space. The website was trying to answer too many different questions at once, making it harder for visitors to find the information they actually came for.

## Splitting the Experience Without Splitting the Identity

Instead of continuously expanding a single website, I designed an ecosystem consisting of one central portal and several dedicated subsites. Each subsite focuses on a single discipline while remaining connected through a shared visual language and navigation. Visitors interested in software architecture can immediately access technical content, while those looking for research or design aren't forced to navigate through unrelated material first.

This separation also changed how I approached content itself. Rather than organizing everything into categories, each subsite developed its own purpose, audience, and publishing strategy. Together they form a complete representation of my work, yet every site remains valuable on its own.

More importantly, every subsite gained the freedom to evolve independently. I could experiment with new layouts, publishing workflows, or information structures without worrying about how those decisions would affect the rest of the ecosystem. The relationship between the sites became architectural rather than hierarchical. They complement one another instead of depending on one another.

## Connecting Independent Systems

Separating the frontend introduced another architectural challenge. Every subsite relied on external platforms to display dynamic information, including GitHub repositories, Behance projects, and ORCID publications. Allowing each frontend to communicate directly with those services would create unnecessary duplication and tightly couple every website to multiple third-party APIs.

To avoid that, I introduced a dedicated BFF (Backend-for-Frontend) layer for every subsite. Each serverless service is responsible only for collecting, transforming, and exposing the data required by its corresponding frontend. This separation keeps the presentation layer focused on content, while isolating external integrations behind purpose-built services designed for each specific website.

That separation also made the ecosystem much easier to maintain. Whenever an external service changes its API or introduces a new feature, only the corresponding BFF service needs to adapt. The frontend continues consuming the same data structure, allowing each website to evolve independently without constantly chasing changes introduced by the third-party platforms.

As the ecosystem matured, another architectural shift naturally followed. Because most subsites became heavily content-driven, I migrated their frontends from SvelteKit to Astro. Static generation proved to be a much better fit for long-form articles, documentation, and portfolios, while the serverless BFF layer continued handling the dynamic pieces behind the scenes. The result is what I now describe as a Serverless Distributed Monolith, which is a collection of independent websites that behave as one coherent ecosystem.

## Living with Clear Boundaries

The architecture solved the technical problems, but it introduced an organizational one. As new projects emerge, deciding where they belong is rarely straightforward. Software engineering overlaps with design, research often influences development, and many projects naturally span multiple disciplines.

Unlike a traditional blog, I cannot simply assign multiple categories and call the problem solved. Every article, project, or publication contributes to the identity of a specific subsite. Placing content in the wrong place gradually weakens that identity, making the boundaries between disciplines increasingly difficult to understand.

Maintaining the ecosystem therefore requires more than technical consistency. It requires protecting the identity of every subsite and resisting the temptation to place content wherever it happens to fit. Those boundaries are what allow the ecosystem to grow without collapsing back into the single website it was designed to replace.

I expect those boundaries to continue evolving as my work changes over time. New disciplines may eventually deserve their own space, while existing ones may merge as my interests shift. The architecture was never designed to be permanent. It was designed to remain flexible enough that the ecosystem can continue growing without losing the clarity that made separating it worthwhile in the first place.
