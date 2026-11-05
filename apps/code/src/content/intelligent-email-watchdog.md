---
title: "Setting Up My Own Intelligent Email Watchdog"
date: 2026-10-07 17:22
hook: "Incoming emails need different levels of scrutiny, so I combined predefined rules with AI-based assessment and a separate interface for managing protection activity."
image: ""
---

I've been interested in exploring what AI agents could bring to application development for a while now, but AI HackFest 2026 was my first opportunity to actually build something around one. Organized by IDwebhost, the hackathon challenged participants to develop a project using either OpenClaw or Hermes Agent. I chose Hermes, partly because I wanted to get hands-on experience with its capabilities and see how an agent could fit into an application beyond simply responding to prompts.

I didn't want the agent to merely become the "application" itself. I wanted to explore how it could work alongside conventional services, taking responsibility for tasks that benefit from contextual interpretation while leaving predictable operations to the application. That idea eventually took shape as an email watchdog, combining predefined sender rules with AI-based assessment, a web application, and Telegram bot to manage and monitor its activity.

## Designing the Pipeline

One of the first things I considered was whether every incoming email actually needed an AI model. If a sender was already on a whitelist or blacklist, there was no reason to spend additional computation asking an AI to make a decision that could be handled by a simple rule. I wanted those cases to remain straightforward and predictable, reserving Hermes for messages that needed more contextual interpretation.

That decision shaped how I divided the system. Cloudflare Workers handle incoming emails and check the sender lists, while the web application provides the operational interface and maintains the associated records. The agent handles the assessment of unknown senders and provides the conversational interface through Telegram. For the application itself, I used SvelteKit as my usual choice, while Cloudflare D1 stores the sender lists used by the Workers.

When an email arrives, the Worker first checks whether its sender is whitelisted or blacklisted. Blacklisted senders are discarded, while whitelisted senders are forwarded directly to the recipient. Neither path involves Hermes, which means the system can handle these routine decisions without waiting for an AI response.

Unknown senders take a different route. The application retrieves any available history associated with the sender and passes it to Hermes alongside the incoming email. This gives the agent more context than the message alone, allowing it to consider previous activity from the same address when assessing whether the new message is legitimate, spam, or a scam. The assessment also includes a confidence score and reasoning, which become part of the protection record.

The result then goes back to the Worker, which remains responsible for the actual email disposition. It forwards messages classified as legitimate and places the others in quarantine for further inspection. I wanted to keep this processing pipeline independent of the agent because email delivery still needs a clear and predictable execution path. Workers handle interception and execution, Hermes provides contextual assessment when needed, and the application maintains the operational records without having to make or execute delivery decisions itself.

## Making Protection Activity Accessible

The web application is primarily where I manage and inspect the system. Its dashboard provides an overview of protection activity, while dedicated sections let me maintain the sender lists, review quarantined messages, and inspect protection logs. I deliberately kept these operations in a conventional interface because managing lists and examining individual email records are much more practical with a proper dashboard than through a conversation.

Telegram serves a different purpose. Every morning, Hermes sends a summary of the previous 24 hours, showing how many emails passed through the whitelist or legitimate AI assessment, how many were discarded because of the blacklist, and how many ended up in quarantine. This gives me a quick overview of the system's activity without having to open the dashboard just to check whether anything happened.

I can also ask Hermes for more specific information whenever I need it. For example, I can request the latest protection summary, inspect what is inside the current quarantine vault, or ask about a particular sender address. This makes the agent useful beyond classifying incoming messages. It can also retrieve and explain information from the application's protection records, giving me a conversational way to inspect what the system has been doing.

## Working with an Agent

This project gave me my first practical experience integrating an AI agent into an application with its own services and operational requirements. One thing I took away from it was how much the usefulness of an agent depends on the context and responsibilities we give it. In this case, Hermes could make more informed assessments because it had access to information accumulated by the application, rather than having to interpret every incoming email as an isolated event. This also allowed its assessments to improve over time.

That also changed how I thought about the relationship between an agent and the application around it. The application provides the data, maintains the records, and handles predictable operations. Hermes uses that context to interpret less straightforward cases and makes the system's information accessible through conversation. Each part contributes something different, without requiring the agent to take ownership of the entire workflow.

I found this division more interesting than simply putting an AI model in charge of email classification. It gave me a chance to explore how an agent could participate in a larger application, where its capabilities become more useful through the services and information available to it. For this project, that meant combining rule-based filtering, historical sender context, and conversational interaction into one email protection workflow.
