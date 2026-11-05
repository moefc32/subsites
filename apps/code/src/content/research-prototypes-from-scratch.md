---
title: "Research Prototypes Don't Have to Start From Scratch"
date: 2026-04-01 21:39
hook: "Research prototypes change constantly, but the foundation beneath them rarely does. Rebuilding it from scratch only slows down the work that actually matters."
image: ""
---

As web developers, planning, programming, and testing are part of our daily routine. But have you ever felt like you are doing the exact same tedious setup work every time you start a new project? For me, building web prototypes for research felt like running on a treadmill. Every project had different objectives, yet the first few days were almost always spent recreating the same foundation. After repeating that cycle for years, I realized the real bottleneck was never the prototype itself. It was how we started every project.

Research projects are naturally experimental. Requirements change frequently, hypotheses evolve, and prototypes often exist only to validate a single idea. Ironically, despite all those differences, the engineering work before writing the first feature barely changed at all. That contradiction was what eventually convinced me that something needed to change in the way we approached every new project.

## The Bottleneck

Working in a small research team meant several prototypes were often developed simultaneously. Each person had a clear responsibility, allowing everyone to work in parallel instead of waiting for another task to finish. My role focused on frontend development while my colleagues handled the backend. Once I completed my part, I couldn't simply jump into backend tasks. Instead, I spent that time refining our frontend practices, experimenting with new technologies, and gradually questioning why every prototype still began with the same repetitive setup.

The more projects we built, the more obvious the pattern became. We repeatedly created identical folder structures, configured the same development tools, organized the same routing patterns, and established similar frontend and backend boundaries. None of these activities contributed directly to the research itself. They were necessary, but they were also predictable. Treating every prototype as a completely fresh project no longer made sense.

Looking back, the wasted time was never measured in days. It was measured in interruptions. Every repetitive decision broke the team's momentum before we had even started solving the actual research problem. Instead of discussing the prototype itself, we often found ourselves discussing project structures, package selections, or deployment strategies that had already been decided dozens of times before.

## The Turning Point

Rather than optimizing individual projects, we decided to standardize everything that surrounded them. We gradually established common project structures, coding conventions, development workflows, and boilerplates that could serve as the starting point for almost any research prototype. The objective wasn't to eliminate flexibility, but to remove repetitive work so we could focus on solving the actual research problem.

That decision also changed how we viewed software architecture. Instead of treating every prototype as an isolated project, we started treating it as another variation built on top of a shared foundation. Every improvement we made to that foundation immediately benefited the next project instead of remaining trapped inside a single repository.

That standardization was guided by three principles that eventually became the foundation of every project we built :

- Performance, so prototypes remained responsive without unnecessary overhead
- Human-focused development, making the codebase approachable for both developers and future contributors
- Security, ensuring every project started from a reliable baseline instead of treating it as an afterthought

Those principles naturally shaped our technology choices. We adopted Fastify over Express because it offered a cleaner and lighter foundation for the applications or services we typically built. On the frontend, we standardized on SvelteKit instead of React. The decision had very little to do with popularity and everything to do with readability and learnability. New team members and interns could understand the code much faster, allowing them to contribute without spending weeks learning framework-specific concepts.

Just as importantly, those decisions reduced unnecessary discussions. Instead of debating frameworks whenever a new project appeared, we could immediately begin solving the problem that made the prototype necessary in the first place. The architecture had already been agreed upon, leaving the team free to focus on research rather than infrastructure.

Of course, those choices came with trade-offs. Less popular frameworks offered smaller ecosystems, fewer third-party libraries, and occasionally required us to implement our own utilities instead of relying on existing packages. We accepted that cost because every line of code we added remained understandable, intentional, and aligned with our own standards rather than someone else's assumptions.

Building more of our own solutions also forced us to understand every part of the system we were creating. While that occasionally meant spending more time implementing features that larger ecosystems already provided, it eliminated much of the uncertainty that comes with relying on abstractions we didn't fully understand.

## Looking Back

Looking back, I don't think the biggest improvement came from choosing Fastify or SvelteKit. It came from recognizing that every prototype shared the same foundation. Once that foundation became standardized, starting a new project no longer meant rebuilding the same environment from scratch. It meant spending our time where it actually mattered, like solving the research problem instead of repeatedly preparing for it.

The experience also changed how I think about software architecture in general. Good architecture isn't only about making a single project easier to maintain. It is about making future projects easier to start. Every time I can remove a repeated decision from tomorrow's workflow, I know today's effort has already paid for itself.

Those experiences continue to shape how I approach software today. Every architectural recipe I develop begins with the same question: _What can be standardized so I can focus more on the problems that are genuinely unique?_
