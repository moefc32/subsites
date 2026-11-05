---
title: "From Guesswork to a Standard Web Application Architecture"
date: 2026-06-08 19:39
hook: "We often choose the stack first and figure out the architecture later. I prefer deciding how the system should work before choosing the tools."
image: ""
---

Every new web application used to begin with the same uncertainty. Before writing a single line of code, I had to decide how the project should be structured, which technologies would support it, and whether the architecture would still make sense months later. After repeating that process across multiple projects, I realized I wasn't struggling to choose frameworks. I was repeatedly solving the same architectural problem from scratch.

The uncertainty was never about whether a framework was capable enough. Modern frameworks are remarkably flexible. The real challenge was choosing an architecture that would continue to make sense as the project evolved instead of becoming something I had to continuously work around.

## Moving Beyond "Build First, Fix Later"

One of the most common pieces of advice in software development is to build something quickly and improve it later. While that approach may work for other developers and my own experimentation, I found it increasingly expensive for projects intended to survive beyond their initial release. Architectural decisions made in the first few days often determined how difficult the next few months would become.

Small compromises also tend to accumulate. A shortcut taken to accelerate the first iteration can quietly become a permanent part of the codebase, making future changes more expensive than they should be. What initially feels like rapid progress often turns into unnecessary technical debt once the project begins to grow.

Rather than treating architecture as something that naturally emerges during development, I began treating it as the foundation of the project. Planning the system upfront allowed me to remove unnecessary uncertainty before implementation even began. It also gave me clearer boundaries for deciding what belonged inside the application and what deserved to become an independent service.

## Defining Two Architectural Paths

As I reviewed my previous projects, I noticed they naturally fell into two categories. The first consists of standalone applications where a single codebase is sufficient. For these projects, SvelteKit provides everything I need, from routing, data processing, and rendering to the user interface itself. The architecture remains simple because the application has no reason to be anything else.

The second consists of applications expected to integrate with other systems, scale independently, or expose services beyond their own frontend. Those projects begin with a clear separation between frontend and backend. SvelteKit becomes a dedicated frontend service, while ElysiaJS handles the backend logic and APIs. Although I still maintain Fastify for legacy projects and teaching materials, ElysiaJS has become my preferred foundation for new backend services because of its simplicity and performance.

The database is never chosen independently from the architecture. Relational data naturally leads me toward MySQL for its performance and simplicity, while document-oriented workloads are better suited to MongoDB. The decision follows the problem rather than personal preference.

Looking across those projects, I realized the technologies themselves were remarkably consistent across different projects. What actually changed was the architecture surrounding them and their specific requirements. Once I understood which category a project belonged to, selecting frameworks, libraries, databases, and deployment strategies became far more straightforward than evaluating every available option independently.

## Standardization Creates Better Collaboration

Standardizing my architecture didn't remove complexity, but it made complexity predictable. Every project now begins from a familiar foundation, making documentation easier to maintain and reducing the amount of architectural discussion before development starts.

That consistency also makes collaboration much easier. New contributors spend less time understanding the overall structure because every project follows the same architectural language. Instead of learning a completely different codebase every time, they can focus on the parts that are unique to the project itself. The architecture becomes shared knowledge rather than something that must be rediscovered for every repository.

## Letting the Architecture Make the Decision

Looking back, I no longer spend much time asking which framework I should use for each project. That decision has already been made by the architecture itself.

The first question I ask today is much simpler: _Does this application belong in a single codebase, or should it be separated into services?_ Once that answer becomes clear, almost every technical decision naturally follows. Frameworks, databases, and project structures stop being independent choices and instead become logical consequences of an architecture that was understood before development even began.
