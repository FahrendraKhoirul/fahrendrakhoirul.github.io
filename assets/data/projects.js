window.projectDetails = {
  medicare: {
    initials: "MC",
    eyebrow: "Case study / healthcare",
    title: "Medicare",
    category: "Healthcare platform",
    summary: "A healthcare mobile ecosystem connecting clinic management, home nursing, payments, pharmacy, and teleconsultation workflows.",
    context: "Work - Penawar Medical Supply",
    role: "Mobile developer",
    period: "Sep 2024 - Present",
    surface: "#bfe8db",
    linkUrl: "",
    linkLabel: "Company project",
    overview: "Medicare is a group of mobile products that helps healthcare operations move between patients, clinicians, care teams, and supporting services.",
    problem: "Healthcare workflows often cross several people and systems. The product needed to make those handoffs understandable without hiding the operational detail teams depend on.",
    contribution: "I work across mobile product development, feature implementation, state and data flow, realtime communication, payments, and the engineering decisions that keep the ecosystem maintainable.",
    flow: [
      { label: "Care request", detail: "A patient or care team starts the workflow." },
      { label: "Care coordination", detail: "People, availability, and status stay visible to the right participants." },
      { label: "Completed care", detail: "Payment, notes, and follow-up actions close the loop." }
    ],
    challenges: [
      "Keep several healthcare workflows coherent across mobile surfaces.",
      "Make realtime status changes useful without making the interface noisy.",
      "Handle payment and care states as explicit product rules."
    ],
    decisions: [
      "Treat each workflow as a clear state transition.",
      "Keep product rules close to the application layer that owns them.",
      "Prefer shared patterns over duplicated behaviour across apps."
    ],
    architecture: "The approach separates the mobile experience from domain rules and supporting services, so new care workflows can evolve without making every screen responsible for the whole system.",
    features: [
      { title: "Clinic management", detail: "Operational tools for healthcare teams." },
      { title: "Realtime communication", detail: "Status and coordination across participants." },
      { title: "Payment and care", detail: "A clearer path from service to settlement." }
    ],
    stack: ["Flutter", "Dart", "Realtime APIs", "Payment integrations", "Healthcare workflows"],
    outcome: "The work contributes to a broader healthcare product ecosystem rather than a single isolated app. The main learning is how much clarity matters when a product crosses roles, services, and sensitive states.",
    next: "doclocum"
  },
  doclocum: {
    initials: "DL",
    eyebrow: "Case study / healthcare staffing",
    title: "DocLocum App",
    category: "Healthcare staffing",
    summary: "A staffing workflow connecting substitute doctors with healthcare facilities that need them.",
    context: "Work - Penawar Medical Supply",
    role: "Mobile developer",
    period: "Sep 2024 - Present",
    surface: "#dbe8f5",
    linkUrl: "",
    linkLabel: "Company project",
    overview: "DocLocum focuses on the coordination layer between healthcare facilities and locum medical staff, from finding the right opportunity to keeping the engagement visible.",
    problem: "Temporary staffing is time-sensitive and dependent on trust. People need to understand availability, assignment details, and next actions without working through scattered communication.",
    contribution: "I contribute to the mobile experience and the application behaviour behind staffing flows, with attention to state, communication, and the operational edge cases that appear after the happy path.",
    flow: [
      { label: "Opportunity", detail: "A facility creates or publishes a staffing need." },
      { label: "Matching", detail: "A doctor reviews the work and responds." },
      { label: "Assignment", detail: "Both sides share a clear status and next step." }
    ],
    challenges: [
      "Represent availability and assignment states without ambiguity.",
      "Design for two audiences with different responsibilities.",
      "Keep communication attached to the work it belongs to."
    ],
    decisions: [
      "Make the current state visible before the next action.",
      "Use one vocabulary across facility and doctor views.",
      "Keep the flow resilient when people respond asynchronously."
    ],
    architecture: "The technical approach gives the mobile client explicit models for opportunities, responses, and assignments, while leaving integrations and communication details behind stable boundaries.",
    features: [
      { title: "Staffing opportunities", detail: "A focused view of available work." },
      { title: "Assignment status", detail: "Clear progress from interest to confirmation." },
      { title: "Role-based views", detail: "The same workflow adapted to each participant." }
    ],
    stack: ["Flutter", "Dart", "REST APIs", "State management", "Realtime communication"],
    outcome: "The project reinforced a useful product lesson: when a workflow involves multiple parties, status is part of the experience, not merely a backend field.",
    next: "medicare-mover"
  },
  "medicare-mover": {
    initials: "MM",
    eyebrow: "Case study / logistics",
    title: "Medicare Mover",
    category: "Delivery and tracking",
    summary: "A delivery and tracking experience supporting the movement of healthcare products through the wider ecosystem.",
    context: "Work - Penawar Medical Supply",
    role: "Mobile developer",
    period: "Sep 2024 - Present",
    surface: "#ffb743",
    linkUrl: "",
    linkLabel: "Company project",
    overview: "Medicare Mover extends the healthcare product ecosystem into delivery, making movement and status easier to follow for the people responsible for it.",
    problem: "When a delivery is part of a larger care operation, uncertainty is expensive. The product needs to make location, status, and responsibility legible at a glance.",
    contribution: "I worked on the mobile product surface and the underlying flow needed to turn delivery events into a useful operational view.",
    flow: [
      { label: "Dispatch", detail: "A delivery enters the operational queue." },
      { label: "Movement", detail: "Progress and responsibility remain visible." },
      { label: "Arrival", detail: "The delivery closes with a clear handoff." }
    ],
    challenges: [
      "Show operational status without overwhelming the user.",
      "Account for movement that does not happen in a perfect sequence.",
      "Keep delivery state aligned with the wider healthcare workflow."
    ],
    decisions: [
      "Use status as the primary navigation cue.",
      "Separate tracking information from actions that change the delivery.",
      "Keep the model ready for more delivery partners and routes."
    ],
    architecture: "The system treats delivery events as a sequence of meaningful states, with the mobile client presenting the current state and the next useful action instead of exposing raw operational data.",
    features: [
      { title: "Delivery queue", detail: "A view of what needs attention now." },
      { title: "Tracking state", detail: "Progress that can be understood quickly." },
      { title: "Handoff details", detail: "The information needed to complete delivery." }
    ],
    stack: ["Flutter", "Dart", "Location data", "REST APIs", "Operational workflows"],
    outcome: "The project made the relationship between product design and operations especially visible: a good tracking interface gives teams confidence about what happens next.",
    next: "iqka-pos"
  },
  "iqka-pos": {
    initials: "IQ",
    eyebrow: "Case study / SaaS",
    title: "IQKA POS",
    category: "POS SaaS",
    summary: "A multi-tenant point-of-sale platform exploring tenant management, subscriptions, payments, and a SaaS control centre.",
    context: "Personal",
    role: "Product engineer",
    period: "Ongoing",
    surface: "#e8dff2",
    linkUrl: "",
    linkLabel: "Personal project",
    overview: "IQKA POS is an exploration of what it takes to turn a point-of-sale product into a product platform: multiple tenants, shared infrastructure, and a control plane for the business behind it.",
    problem: "A POS product becomes more complicated when it has to serve many businesses without mixing their data, billing, configuration, or operational concerns.",
    contribution: "I shaped the product model, tenant boundaries, subscription and payment concepts, and the architecture needed to keep the platform understandable as it grows.",
    flow: [
      { label: "Tenant setup", detail: "A business is created with its own workspace." },
      { label: "Daily operation", detail: "The team uses the POS surface for real work." },
      { label: "Platform control", detail: "The system supports billing, configuration, and oversight." }
    ],
    challenges: [
      "Keep tenant isolation understandable in every layer.",
      "Separate business operations from platform administration.",
      "Avoid turning early product decisions into permanent architecture."
    ],
    decisions: [
      "Model tenant ownership explicitly.",
      "Keep the SaaS control centre separate from tenant operations.",
      "Build for clarity before adding more platform features."
    ],
    architecture: "The architecture is organised around tenant boundaries, with platform-level concerns such as subscriptions and administration kept distinct from the daily POS domain.",
    features: [
      { title: "Tenant management", detail: "A clear boundary around each business." },
      { title: "Subscription model", detail: "Platform billing as a first-class concern." },
      { title: "SaaS control centre", detail: "Operational visibility beyond one tenant." }
    ],
    stack: ["Flutter", "Backend APIs", "Multi-tenancy", "Subscriptions", "Payments"],
    outcome: "IQKA is an architecture and product-thinking exercise. It keeps teaching the same lesson: multi-tenancy is not only a database decision; it changes the product vocabulary everywhere.",
    next: "whats-new-kit"
  },
  "whats-new-kit": {
    initials: "WN",
    eyebrow: "Case study / open source",
    title: "whats_new_kit",
    category: "Flutter package",
    summary: "A reusable Flutter package for in-app release notes and What's New experiences.",
    context: "Open source - pub.dev",
    role: "Maintainer",
    period: "Published - ongoing",
    surface: "#1d2330",
    linkUrl: "https://pub.dev/packages/whats_new_kit",
    linkLabel: "View on pub.dev",
    overview: "whats_new_kit started with a practical problem: product changes are easy to ship but difficult to explain inside the app. The package turns release notes into a reusable surface.",
    problem: "A changelog is useful to a team, but users need a readable explanation of what changed and why it matters to them.",
    contribution: "I took the problem from a product observation to a package design, implementation, documentation, and public release on pub.dev.",
    flow: [
      { label: "Release", detail: "A product version introduces a meaningful change." },
      { label: "Explain", detail: "The app presents the change in context." },
      { label: "Understand", detail: "Users can see what is new without leaving the product." }
    ],
    challenges: [
      "Keep the package flexible without making the API vague.",
      "Design for repeated use across different apps.",
      "Make documentation part of the product, not an afterthought."
    ],
    decisions: [
      "Keep the public API small and composable.",
      "Separate content from the presentation surface.",
      "Treat package documentation and examples as part of the release."
    ],
    architecture: "The package keeps release-note content and presentation concerns separate so teams can adapt the experience without rebuilding the underlying flow.",
    features: [
      { title: "Release note surface", detail: "A consistent in-app place for updates." },
      { title: "Reusable content model", detail: "A package shape that can fit different products." },
      { title: "Public documentation", detail: "Examples that help the package travel beyond one codebase." }
    ],
    stack: ["Flutter", "Dart", "pub.dev", "Package design", "Documentation"],
    outcome: "The package became a public artifact from a product problem. It is a reminder that small developer tools can be valuable when they remove a recurring piece of friction.",
    next: "tadaa"
  },
  tadaa: {
    initials: "TD",
    eyebrow: "Case study / personal product",
    title: "Tadaa",
    category: "Productivity app",
    summary: "A personal productivity app built around focus, daily reset, and a calmer relationship with unfinished work.",
    context: "Personal",
    role: "Product builder",
    period: "Ongoing",
    surface: "#f4cbca",
    linkUrl: "",
    linkLabel: "Personal project",
    overview: "Tadaa explores a smaller, more deliberate productivity loop: focus on what matters now, then reset without carrying every unfinished task forward.",
    problem: "Many productivity tools accumulate pressure. The product question was whether a daily reset could make planning feel lighter while keeping useful continuity.",
    contribution: "I shaped the product concept, interaction model, mobile implementation, local data model, and the system behind the daily reset.",
    flow: [
      { label: "Choose", detail: "Select the work that deserves attention today." },
      { label: "Focus", detail: "Stay with a small, visible set of actions." },
      { label: "Reset", detail: "Close the day and begin again with intention." }
    ],
    challenges: [
      "Make the product feel useful without becoming another source of pressure.",
      "Persist enough history without making the experience heavy.",
      "Keep the daily reset meaningful instead of merely destructive."
    ],
    decisions: [
      "Use a focused daily model rather than an infinite backlog.",
      "Keep local data behaviour predictable and inspectable.",
      "Let the interaction carry the product idea."
    ],
    architecture: "The technical approach keeps the core daily state local and explicit, with a small set of domain concepts that can evolve without hiding the product rules inside the UI.",
    features: [
      { title: "Focus system", detail: "A smaller surface for today's work." },
      { title: "Daily reset", detail: "A deliberate transition between days." },
      { title: "Local-first data", detail: "A responsive experience with clear persistence." }
    ],
    stack: ["Flutter", "Riverpod", "Drift", "Local-first product design", "Mobile UX"],
    outcome: "Tadaa is both a product experiment and a practice in finishing a coherent idea. It keeps the focus on how a small system can change the feeling of a daily workflow.",
    next: "jlpt-mini-game"
  },
  "jlpt-mini-game": {
    initials: "JP",
    eyebrow: "Case study / experiment",
    title: "JLPT Mini Game",
    category: "Learning experiment",
    summary: "A small game for JLPT practice, built from curiosity about Japanese and playful repetition.",
    context: "Personal",
    role: "Builder",
    period: "Independent experiment",
    surface: "#ffb743",
    linkUrl: "",
    linkLabel: "Personal project",
    overview: "JLPT Mini Game is a compact learning experiment: turn a study routine into a short interaction that is easy to return to.",
    problem: "Practice can feel abstract when it is separated from feedback. The experiment was to make repetition feel more immediate and approachable.",
    contribution: "I explored the interaction, game loop, mobile implementation, and the balance between useful practice and a lightweight experience.",
    flow: [
      { label: "Prompt", detail: "The player receives a small language challenge." },
      { label: "Answer", detail: "The interaction keeps the response quick." },
      { label: "Feedback", detail: "The result reinforces the next repetition." }
    ],
    challenges: [
      "Keep the game small enough to finish and easy enough to revisit.",
      "Give feedback without interrupting the learning rhythm.",
      "Make the experience playful without hiding the practice goal."
    ],
    decisions: [
      "Prioritise a short repeatable loop.",
      "Use immediate feedback as the main reward.",
      "Keep the interface focused on one decision at a time."
    ],
    architecture: "The implementation favours a compact state model so the game loop stays understandable and the learning interaction remains the centre of the product.",
    features: [
      { title: "Practice loop", detail: "A quick interaction designed for repetition." },
      { title: "Immediate feedback", detail: "The result arrives while the question is still fresh." },
      { title: "Small session size", detail: "A low-friction way to return to practice." }
    ],
    stack: ["Flutter", "Dart", "Game loop", "Interaction design"],
    outcome: "The project is a useful reminder that a small experiment can still have a complete product shape: a clear user, a short loop, and a reason to come back.",
    next: "tarkam"
  },
  tarkam: {
    initials: "TK",
    eyebrow: "Case study / community platform",
    title: "Tarkam.id",
    category: "Community platform",
    summary: "A digital platform for Indonesian grassroots football communities.",
    context: "Work project",
    role: "Software engineer",
    period: "Selected work",
    surface: "#cfe2d0",
    linkUrl: "",
    linkLabel: "Work project",
    overview: "Tarkam.id brings the energy of grassroots football into a digital platform, giving communities a more visible place to organise and participate.",
    problem: "Local football communities are active but often depend on fragmented communication and informal coordination.",
    contribution: "I contributed to the product and engineering work needed to turn that community activity into a clearer digital experience.",
    flow: [
      { label: "Discover", detail: "A player or supporter finds a local activity." },
      { label: "Participate", detail: "The community organises around a shared event." },
      { label: "Continue", detail: "The platform keeps the relationship alive beyond one match." }
    ],
    challenges: [
      "Design for communities with different levels of digital organisation.",
      "Make local activity visible without making it feel corporate.",
      "Keep the product useful between events, not only during them."
    ],
    decisions: [
      "Let community activity lead the information hierarchy.",
      "Use simple participation flows before adding complexity.",
      "Keep the platform language close to how people already talk about the game."
    ],
    architecture: "The product approach treats community activity as the central domain, with supporting features organised around discovery, participation, and continuity.",
    features: [
      { title: "Community discovery", detail: "A way to find the local game." },
      { title: "Participation flow", detail: "The steps from interest to involvement." },
      { title: "Ongoing connection", detail: "A platform that lasts beyond one event." }
    ],
    stack: ["Web", "Product design", "Community workflows", "Backend APIs"],
    outcome: "Tarkam.id shows a different side of product work: the challenge is not only building a system, but making the system feel natural to the community it serves.",
    next: "medicare"
  }
};
