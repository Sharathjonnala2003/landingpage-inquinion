AI Friend is a fullstack web application that enables users to create proactive AI-powered "buddies" that don't just respond to queries but actively initiate meaningful conversations. These buddies autonomously engage users with personalized insights, web search updates, and timely reminders using Google Gemini AI and Serper (internet search) APIs. The app revolutionizes AI interaction by combining proactive engagement with learning, productivity, and personal assistance features.

Core Features
1. Proactive AI Buddies
- Users create "buddies" with custom personalities, expertise areas, and goals
- Each buddy actively initiates conversations and shares relevant updates
- Buddies learn from interactions to provide increasingly personalized engagement
- Autonomous monitoring of topics you care about with proactive updates
2. Interactive Chat & Smart Responses
- Buddies don't just respond - they actively engage in meaningful conversations
- AI responses are generated using Google Gemini API (user supplies their own API key)
- System maintains context and conversation history for natural interactions
3. Autonomous Web Search & Updates
- Buddies proactively search the web to keep you informed about your interests
- Real-time information gathering and sharing without being asked
- Automatic news and updates on topics you care about
4. Calendar & Reminders
Users can create tasks and reminders.
The app can help with productivity by managing to-dos and scheduling.
5. Settings & API Key Management
Users must enter their own Gemini and Serper API keys in the Settings page.
API keys are stored in the browser (localStorage) and sent with each request as needed.
No sensitive keys are stored on the server.
6. Notifications
Optional background notifications for updates from buddies.
7. Data Persistence
Buddies, chat histories, and API keys are saved in the browser (localStorage).
No backend database is required; all persistent user data is client-side.
8. Rate Limiting & Error Handling
The backend includes rate limiting to prevent abuse of external APIs.
Friendly error messages are shown for invalid/missing API keys, quota exceeded, etc.
Tech Stack
Frontend:
React (with TypeScript)
Vite (for fast builds)
Styled Components for UI
LocalStorage for persistence
Backend:
Node.js + Express
Serves static frontend and provides REST API endpoints
Handles requests to Gemini and Serper APIs
No database; uses in-memory and file-based caching for some features
APIs:
Google Gemini (for AI chat and generation)
Serper (for Google search/news)
How the App Works (Flow)
User visits the app and creates buddies.
User enters their own Gemini and Serper API keys in Settings.
User chats with buddies; AI responses are generated using the provided keys.
User can ask for news or web search; results are fetched via Serper API.
All personal data (buddies, keys, chat history) is saved in the browser.
The backend acts as a secure proxy for API calls and serves the frontend.
Security & Privacy
No sensitive data or API keys are stored on the server.
All user data is local to the browser.
Backend only proxies requests to Gemini/Serper using user-supplied keys.
Intended Audience
Students, professionals, or anyone who wants a customizable AI assistant for learning, productivity, or personal use.
Users comfortable providing their own API keys for advanced AI features.
Unique Points
Users can create multiple specialized AI buddies.
Real-time web search and news integration.
No server-side user database; privacy-focused design.
