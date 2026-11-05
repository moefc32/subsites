---
title: "Frameworks Shouldn't Come First"
date: 2026-05-16 13:08
hook: "I stopped asking which framework to use, and started asking what kind of system I was actually trying to build before deciding how to build it."
image: ""
---

Starting a new web project used to be the hardest part of the entire development process. Before writing a single line of code, I had to decide which framework, runtime, and architecture would best support the project. Whether it was a content-heavy website, a full web application, or a serverless service, I found myself evaluating the same technologies and repeating the same setup work over and over again. Eventually, I realized the problem wasn't choosing a framework. It was making the same architectural decisions from scratch every time.

What made the process frustrating was that those decisions rarely changed the project itself. They simply delayed it. Instead of focusing on the problem I wanted to solve, I spent the first few days comparing technologies, revisiting old notes, and questioning decisions I had already made countless times before. I wanted a process that began with understanding the project rather than debating the tools.

## Chasing the Universal Framework

Like many developers, I initially searched for a single framework that could solve every problem. It seemed like the most efficient approach, but reality quickly proved otherwise. Every project came with different priorities, and no technology was equally good at everything. Using the same stack simply because it was familiar often introduced compromises that only became obvious once the project started growing.

The more projects I completed, the clearer the pattern became. Some projects revolved around publishing content, while others demanded rich interactions, distributed services, or lightweight serverless functions. Although they all belonged to web development, they behaved like entirely different kinds of systems. Expecting one framework to satisfy every scenario was unrealistic from the very beginning.

That realization also forced me to rethink how I approached technology. Rather than following industry trends or popularity rankings, I began evaluating every framework through the same lens. As someone whose background is rooted in design, I care less about what is fashionable and more about whether a technology helps me build systems that are performant, maintainable, and enjoyable to work with. Those priorities gradually became more valuable than choosing whatever happened to dominate the latest developer survey.

I also stopped treating frameworks as identities. They became tools with clearly defined strengths and limitations rather than communities to belong to. That small shift in mindset made it much easier to evaluate new technologies objectively instead of feeling obligated to defend the ones I already knew.

## Designing Recipes Instead of Picking Frameworks

As I looked back on years of different projects, I noticed something interesting. Although every project solved a different problem, the architectural decisions behind them were surprisingly repetitive. I wasn't inventing a new foundation every time. I was simply making the same decisions over and over again.

That realization completely changed how I approached new projects. Instead of choosing technologies from scratch, I began documenting recurring architectural patterns and turning them into reusable recipes. Each recipe defines the kind of system it is meant to solve, the constraints it accepts, and the trade-offs that come with those decisions. They are intentionally simple, not detailed implementation guides or rigid engineering standards, but a collection of decisions that repeatedly proved effective across different kinds of projects.

Rather than asking which framework I should use, I now ask a much simpler question: _What kind of system am I building?_ The answer determines almost everything that follows. Instead of beginning with technology, I begin with the characteristics of the project itself. Its users, deployment model, maintenance requirements, and long-term goals all shape the architectural recipe before a single framework is even considered.

## Accepting That Every Recipe Has Boundaries

Creating these architectural recipes didn't eliminate difficult decisions. It simply moved them earlier in the process. The hardest part is resisting the temptation to stretch an existing recipe beyond what it was designed to handle. A content-heavy website can gradually become an application, while a standalone application can eventually require independent services. Those transitions often happen so gradually that it becomes easy to justify one more feature instead of reconsidering the architecture. When that happens, forcing the original design to accommodate new requirements usually creates more problems than it solves.

Another challenge is deciding when a project has genuinely outgrown its original recipe. Replacing an architecture too early creates unnecessary complexity, while waiting too long often leads to compromises that become increasingly difficult to untangle. Finding that balance still depends on experience rather than a fixed set of rules. The recipes aren't rules, but starting points that help me make consistent architectural decisions. Their real value comes from recognizing when they still fit the problem and, more importantly, when they no longer do.

## Architecture Comes First

The biggest lesson was realizing that frameworks were never the real decision. Every successful project begins by understanding the problem it is trying to solve. The architecture exists to answer that problem, while technologies, libraries, and frameworks simply become tools that support those architectural decisions.

Ironically, having more architectural recipes means I spend less time thinking about technology. The recipes narrow the available choices before I even begin evaluating frameworks, allowing me to focus on designing the system instead of comparing implementation details. Today I no longer begin a project by comparing frameworks. I begin by identifying the kind of system I want to build, and once the architecture is clear, choosing the technology becomes one of the easiest decisions in the entire process.
