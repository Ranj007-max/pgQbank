# PgQbank

Part 1: Core Structure, Layout & Features
This part covers the application's purpose, high-level architecture, user-facing features, and UI/UX philosophy.

1.1. Application Purpose & Philosophy
The application is a sophisticated, all-in-one NEET PG Syllabus and QBank Tracker. It's designed for medical students preparing for their postgraduate entrance exams, acting as a personal digital assistant to manage their study plan, practice questions, and analyze performance.

The core philosophy is built on three pillars:

Data Sovereignty & Offline First: All user data is stored locally in the browser's IndexedDB. This ensures privacy, full offline functionality, and snappy performance without reliance on a backend server.
Actionable Analytics: Inspired by leading prep platforms, the app doesn't just show data; it transforms it into actionable insights, readiness scores, and personalized recommendations.
Intelligent Automation: Leverages the Gemini API for powerful features like parsing unstructured syllabus text, generating MCQs from PDFs, and creating optimized study plans, significantly reducing manual data entry and planning overhead.
1.2. Overall Architecture & Layout
The application is a Single Page Application (SPA) built with React and TypeScript, utilizing TailwindCSS for styling.

Main Layout (App.tsx): The primary UI is a responsive two-pane layout:
Sidebar: A fixed navigation sidebar on the left (on desktop) provides access to all major sections. It features dynamic notification badges for actionable items like due-for-review questions.
Header: A sticky header at the top displays the current page title and houses the global Command Palette trigger (⌘K) and a dark/light theme toggle.
Content Area: The main view where the content for the currently selected route is rendered.
Routing (App.tsx): react-router-dom with HashRouter is used for client-side routing, making it compatible with simple static file hosting.
Styling (index.html): The foundation is TailwindCSS for utility-first styling. The main index.html file includes a comprehensive <style> block for:
Global styles, typography (Inter font), and theme variables (e.g., accent colors).
A full dark/light theme implementation.
Accessibility features like a high-contrast mode and a compact mode for denser information display.
Custom animations, UI element styles (e.g., engraved tags for MCQs), and a visual breathing guide for focus modes.
Full-Screen "Zen Mode": During focused activities like a Study Session (MCQGenerator.tsx) or an Exam (ExamSimulator.tsx), the sidebar and header are hidden to provide an immersive, distraction-free environment.
1.3. Core Feature Components (Pages)
Each major feature is encapsulated in its own component, corresponding to a navigation route.

Dashboard: The central hub providing an at-a-glance overview of key metrics (syllabus coverage, QBank accuracy, day streak), a study activity heatmap, and an AI-powered "Today's Briefing" that gives a motivational summary and suggests a key action for the day.
Subjects: This is the syllabus management core. It features a main grid view of all subjects with their progress. Clicking a subject opens a detailed Kanban-style view where lectures (topics) can be dragged between "To Do", "In Progress", and "Done" statuses. It supports full CRUD (Create, Read, Update, Delete) for subjects, chapters, and topics, and includes an AI Syllabus Parser to automatically structure pasted text.
Notes: A complete note-taking system with a two-pane layout (note list and editor). It supports real-time search, tagging, and a powerful feature to link notes directly to specific items in the syllabus (subjects, chapters, or topics).
QBank: The command center for the entire question bank, organized into four tabs:
Explorer: A high-level view to browse and filter the QBank by subject, platform, or tags.
Library: A detailed, searchable list of all MCQs for granular review, editing, and deletion.
Add Questions: A powerful ingestion engine with multiple modes: AI PDF Assistant (parses text and images), Paste Text (with a smart parser), Import JSON, and Manual Entry.
Match Images: A unique drag-and-drop workspace to efficiently pair uploaded images with questions that have been marked as requiresImage.
Study Session (MCQGenerator.tsx): A dedicated, full-screen environment for focused practice. It includes "Quick Start" modes for adaptive sessions, spaced repetition (SRS), and mistake review, as well as a custom session builder with advanced filters.
Exam Simulator: A feature to create and take mock tests under timed conditions. It provides a realistic test interface, a question palette for navigation, and saves a detailed performance report upon completion.
Strategy Centre: An "autopilot" for study planning. It features an AI Smart Planner that generates an optimal weekly schedule based on user goals and performance data. It also includes pace analysis to track progress against long-term MCQ targets.
Reports: The primary analytics hub, featuring a tabbed interface for:
Performance Overview: High-level scores, accuracy trends over time.
Subject Deep Dive: Detailed statistical breakdown and trend charts for each subject.
Mistake Analysis: Visual charts breaking down mistakes by type and topic.
Profile: Displays user details, achievements/badges, and the calculated PG Readiness Score—a key metric aggregating performance across syllabus coverage, QBank accuracy, and study consistency.
Settings: Allows users to configure appearance (theme, accent color, font size), manage QBank custom tags, select AI models, and perform data management tasks like Import/Export and factory reset.
Part 2: Data & Its Handling
This part details the application's data structures, state management, persistence layer, and how data is processed.

2.1. Core Data Model (store/schema.ts)
The application's data is strictly typed and organized into a clear schema. Key data structures include:

Subject, Chapter, Topic: A nested structure representing the syllabus hierarchy.
CustomMCQ: A rich object for each question, containing not just the content but also metadata for spaced repetition (FSRS properties like stability, nextReviewDate) and adaptive learning (IRT properties like irt_b for difficulty).
MCQBatch: A container for a group of CustomMCQs, typically from a single import session, linked to a specific subject.
McqAttemptLog: Records every single question attempt with details like time taken, correctness, and the user's ability score (thetaAtAttempt) at that moment.
TestResult: Stores the complete result of a simulated exam.
Note, Profile, AppSettings: Structures for managing notes, user profile information, and application settings.
2.2. State Management (store/index.ts)
Zustand: A single, centralized Zustand store serves as the single source of truth for the entire application state.
Immer: The store uses immer for all state updates, which allows for writing simple, mutable-style code while ensuring state immutability and preventing bugs.
Actions: All state modifications are handled through a unified actions object within the store. This provides a clear, organized API for all data operations (e.g., actions.addSubject, actions.logMcqAttempt).
2.3. Data Persistence & Offline Functionality
The application is designed to be fully offline-capable.

IndexedDB: The primary storage mechanism is IndexedDB, which is robust and can handle large amounts of data. The Zustand store is configured with a custom persist middleware that uses an IndexedDB adapter (store/indexedDB.ts) to automatically save and rehydrate the entire application state.
Image Storage: Images associated with MCQs are not stored in the main state object. They are processed (optimized and compressed) on the client and stored as Blobs in a separate IndexedDB object store (mcqImages). The CustomMCQ object only stores a reference imageId.
Backup & Restore: The "Export Data" function creates a complete, portable .zip backup. This archive contains a data.json file (a snapshot of the Zustand store) and an images folder with all the raw image Blobs from IndexedDB, ensuring no data is ever lost.
2.4. Data Processing & Analytics
To prevent complex calculations from freezing the user interface, the app offloads analytics to a separate thread.

Web Worker (workers/analytics.worker.ts): The application uses a Web Worker for all heavy analytical computations.
useAnalytics Hook: UI components use this custom hook to get performance data. The hook sends the current raw state (MCQs, attempts, logs) to the worker and listens for the computed results.
Off-thread Computation: The worker calculates all derived metrics, including:
Syllabus completion percentages.
QBank accuracies (overall, clinical, PYQ).
Study streaks and heatmap data.
PG Readiness Score: A weighted formula combining accuracy, question volume, and consistency.
Subject/Chapter strength and weakness analysis.
Performance Quadrant analysis (Fluid, Hesitant, Slips, Gaps).
This architecture ensures the main UI thread remains responsive and smooth, even with a large amount of user data.
2.5. AI Data Handling (Gemini API)
The application intelligently interfaces with the Gemini API for its AI features.

Client-Side Prompting: UI components gather relevant context from the local state to construct highly specific prompts.
Structured Responses: For features like MCQ parsing and study plan generation, the app sends a responseSchema along with the prompt. This instructs the Gemini API to return a structured, predictable JSON object, which eliminates flaky text parsing on the client side.
On-Demand & Cached: AI features are user-initiated (e.g., clicking "Generate AI Insight") to control API usage. The results are then cached in the Zustand store (aiInsights) to prevent identical, repeated calls.
API Key: The application assumes the Gemini API key is securely provided as an environment variable (process.env.API_KEY) and does not include any UI for users to enter or manage keys.
