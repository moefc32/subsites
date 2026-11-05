---
title: "Escaping the Project Setup Trap"
date: 2026-04-04 21:47
hook: "I got tired of starting every project from an empty directory, so I built my own foundations and stopped repeating decisions I had already made."
image: ""
---

Have you ever felt completely stuck before a project even begins? Whether it was a freelance project, a hackathon, or a personal experiment, I kept losing valuable time to the exact same setup work. Before writing a single feature, I had to configure the project, organize the folders, install the usual dependencies, and rebuild a foundation I had already created countless times. Eventually, the real obstacle wasn't development itself, but repeatedly preparing to start.

The frustrating part was that none of those early tasks made the project any better. They were necessary things to do, but they rarely produced anything unique. Every hour spent rebuilding the same foundation was an hour not spent solving the actual problem. I always wanted to begin every project with momentum, not with a long checklist of configuration tasks I already knew by heart.

## Why Existing Starters Never Felt Right

The obvious solution was to use existing starter templates. Unfortunately, none of them matched the way I build software. Next.js assumed React, Nuxt assumed Vue, and even the default SvelteKit templates still required me to reshape the project before it reflected how I wanted to work.

Most starter templates are intentionally generic because they need to satisfy thousands of developers with completely different preferences. That flexibility is valuable, but it also means every project begins with another round of customization. I found myself deleting files, reorganizing folders, replacing configurations, and introducing the exact same conventions every single time. At some point, I realized I was spending more effort adapting someone else's foundation than creating my own.

Over time I stopped looking for a perfect template and started building my own. Rather than treating every project as unique, I began identifying the architectural patterns that kept appearing across my work. Those patterns gradually evolved into a collection of custom boilerplates, each designed for a specific type of application instead of a specific technology. Every boilerplate follows the same principles :

- Performance, keeping the application lightweight and responsive
- Human-centered development, making the codebase approachable for both myself and future contributors
- Security, establishing a reliable foundation before features are added

The objective isn't to avoid learning new technologies or to reject existing conventions. It is simply to eliminate decisions that I already know I will make every single time. That way, the first commit of a new project already reflects the standards I intend to follow until the project is complete.

## Designing Recipes Instead of Templates

As the collection grew, I realized I wasn't maintaining a single boilerplate but an ecosystem of architectural recipes. Content-heavy websites, interactive web applications, microservices, and serverless deployments all have different requirements. Forcing them into the same starting point would only recreate the very problem I was trying to solve.

Each recipe therefore became a starting point for a different kind of problem rather than a different technology stack. Instead of asking which framework I wanted to use, I began asking: _What kind of system I was about to build?_ The answer naturally determined which boilerplate made the most sense, making architectural decisions much faster and far more consistent than before.

A developer friend of mine once pointed out how many different stacks I seemed to use. From the outside it looked like constant experimentation. In reality, every boilerplate exists because it solves a recurring problem. The technologies may differ, but the reasoning stays consistent. I choose the foundation that best matches the project instead of forcing every project into the same foundation.

Over time, I also noticed another benefit. Every improvement made to one boilerplate automatically benefited every future project that depended on it. Instead of carrying lessons from project to project manually, I started preserving them directly inside the foundation itself.

## The Price of Personal Standards

The biggest trade-off is that these boilerplates are designed around my workflow rather than someone else's. Anyone joining one of my projects needs time to understand the conventions, folder structures, and architectural decisions that have become second nature to me.

Maintaining the boilerplates also requires discipline. Every new tool, dependency, or architectural idea must be evaluated carefully before becoming part of the standard. Adding unnecessary complexity would only recreate the maintenance burden that the boilerplates were originally designed to eliminate.

That investment has always been worthwhile over time. Once those conventions are understood, every new project begins from a familiar foundation instead of an empty directory. The boilerplates stop being templates and become accumulated experience captured directly in code.

## A Better Place to Begin

Creating my own boilerplates did more than save time. It changed how I approach new projects entirely. Instead of thinking about configuration first, I can immediately focus on the problem the software is supposed to solve.

I also stopped thinking of boilerplates as disposable starter kits. They became living assets that evolve alongside my own experience. Every project either validates an existing recipe or teaches me how to improve it, creating a feedback loop that makes the next project easier to begin than the last.

The collection continues to evolve as my projects and technologies change. Some recipes disappear, others are refined, and new ones occasionally emerge. What remains constant is the principle behind them, where every repeated decision is an opportunity to build a better starting point for the next project.
