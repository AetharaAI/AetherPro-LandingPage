export const lessons = [
  {
    id: 'renting-vs-controlling',
    title: 'Renting AI vs. controlling AI',
    summary: 'Separate access to a service from control over the environment that runs it.',
    sections: [
      ['What you are buying', 'A subscription gives your team access to a provider’s product under its terms. A hosted agent adds a workflow and connected tools that someone operates for you. In a private deployment, processing runs inside a defined boundary, such as a dedicated hosted environment or your cloud account. Customer-owned infrastructure can give you physical control of the equipment, along with responsibility for operating it.'],
      ['Hardware and model rights', 'Buying a server gives you ownership of equipment. Model weights and runtime software have their own licenses. Check commercial use, modification, redistribution, and support terms for the exact versions you plan to run. Downloadable weights can still have restrictions. Export rights for your data and workflow definitions are separate questions.'],
      ['Business scenario', 'A distributor uses a subscription to rewrite public product descriptions. For an assistant that searches confidential supplier agreements, it separately reviews retention, approved processors, and who can access documents. It can keep the subscription for public work while evaluating a tighter boundary for contracts.'],
    ],
    exercise: 'List who controls the model choice, credentials, data export, and shutdown for one tool you already use.',
  },
  {
    id: 'what-agents-do',
    title: 'What AI agents actually do',
    summary: 'Follow an agent from an incoming request through a decision and an action.',
    sections: [
      ['From text to action', 'An agent is software that can use a model to choose or draft steps toward a goal. The surrounding application supplies tools and context, checks whether an action is allowed, and handles failures. A chatbot may answer from a help page. An agent with calendar access may also look up availability and propose a booking.'],
      ['Keep the workflow bounded', 'Start with a trigger, an allowed set of tools, a stop condition, and a route to a human. Validate tool inputs independently of the model. Use time and retry limits. If a booking request times out, check whether it succeeded before trying again so a retry cannot create a duplicate.'],
      ['Business scenario', 'A repair company’s intake agent reads public service policies and retrieves open slots. It drafts a booking or hands off unclear cases to the dispatcher. The dispatcher approves after-hours exceptions before any confirmation goes out. The team measures correct bookings, corrections, and time saved against its manual process.'],
    ],
    exercise: 'Draw one workflow as trigger, lookup, proposed action, approval, and recorded outcome.',
  },
  {
    id: 'cloud-local-hybrid',
    title: 'Cloud vs. local vs. hybrid AI',
    summary: 'Decide where data travels and who keeps each part of the system running.',
    sections: [
      ['Cloud and local tradeoffs', 'Managed cloud can shorten setup and absorb changes in demand. Check pricing, model changes, outages, and contract terms. Local servers can provide a tighter network boundary or serve sites with unreliable connections, but capacity is finite. Budget for power, cooling, patches, monitoring, backups, and someone to respond when the service fails. Private hosting can also run on rented infrastructure.'],
      ['Residency and operational security', 'Data residency concerns where data is stored and processed. Map prompts, retrieved documents, outputs, logs, replicas, backups, and third-party tools. Ask where remote support can access the system. A chosen region is one control alongside network rules, access reviews, encryption, and tested recovery.'],
      ['Business scenario', 'A manufacturer might answer public product questions in a managed service and search internal work instructions on a private system. The routing policy prevents internal snippets from appearing in cloud prompts or logs. If the private system is down, staff use manual search instead of rerouting confidential requests to the public service.'],
    ],
    exercise: 'Map one record from collection to deletion, including backups and every service that sees it.',
  },
  {
    id: 'agent-authority',
    title: 'Agent identity, permissions and private data',
    summary: 'Give each agent a distinct identity and enforce its authority at the point of action.',
    sections: [
      ['Identity and permissions', 'Identity tells you which workload is acting. Authorization determines which records it may read or change and under what conditions. Use distinct service identities, scoped credentials, and short lifetimes where possible. Enforce access in the connected system or tool gateway. Treat instructions found in emails and documents as untrusted data.'],
      ['Approvals and evidence', 'Show a reviewer the exact action, target, and material inputs before approval. Bind approval to that action and expire it if those inputs change. Record who requested and approved the action, the applicable policy version, when it ran, and the outcome. Restrict log access and avoid copying secrets or full private records into evidence. Test revocation and manual recovery.'],
      ['Business scenario', 'A purchasing agent can read approved supplier records and draft an order. Only a buyer can approve the order, and tool policy checks the approved amount and supplier before sending it. An email that requests a new payment destination goes to a separate verification process.'],
    ],
    exercise: 'Pick one tool and write its allowed reads, allowed writes, approval rule, and emergency disable step.',
  },
  {
    id: 'choose-ai',
    title: 'Choosing AI for your business',
    summary: 'Compare complete operating costs and prove value with a small pilot.',
    sections: [
      ['Start with a measurable job', 'Pick a repeatable task with an owner, a manual fallback, and an observable outcome. Measure current time, error rate, and handoff volume. Use approved samples for a pilot. Agree on what counts as an acceptable result and when the team will stop or roll back.'],
      ['Compare total cost of ownership', 'Over the same period and workload, include setup, integrations, seats or usage, hardware replacement, licenses, power, network, backups, downtime, monitoring, and staff time. Estimate ordinary and peak usage. Identify who answers support requests, patches systems, covers absences, and restores service. Include the cost of exporting or rebuilding workflows if you switch.'],
      ['Business scenario', 'A landscaping firm needs more completed quote requests. It first pilots a website FAQ and clear callback form using approved service descriptions. The firm measures qualified requests and staff corrections before connecting scheduling or customer records. A company with a strict private processing requirement would establish that boundary before testing with real records.'],
    ],
    exercise: 'Write a one-sentence pilot goal, a success metric, a cost ceiling, and a named owner for support.',
  },
] as const
