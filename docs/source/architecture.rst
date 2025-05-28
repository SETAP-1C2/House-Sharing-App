Architecture
=====================================

The House Sharing Assistant follows a modular architecture that separates the system into frontend, backend, and data layers for maintainability and clarity. While designed as a full-stack app, it currently leans heavily on frontend logic due to late-stage database integration.

System Layers
-------------

**1. Frontend Layer (Client-Side)**  
- Built using **HTML**, **CSS**, and **JavaScript**
- Handles all UI rendering, form submissions, and client-side validation
- Interacts with ``localStorage`` and (where implemented) backend routes for data persistence
- Core interfaces include:
  - Dashboard
  - Group View
  - Task Assignment
  - Cost Splitting
  - Validation & Summary Screens

**2. Backend Layer (Server-Side)**  
- Implemented in **Node.js** with **Express**, located in ``svr.cjs``
- Handles HTTP requests and connects with the database when available
- Manages file serving and future support for session-based interactions

**3. Data Layer (Storage)**  
- **SQLite** used for structured persistent storage (``house_share_app.db``)
- Originally designed for full CRUD but only partial integration completed
- Client-side **localStorage** used as a fallback for storing:
  - User data (registration/login)
  - Group membership
  - Tasks and cost summaries

Component Flow
--------------

- User actions on the frontend trigger validations or store/retrieve data via ``localStorage``
- Task and cost forms display live feedback and are rendered instantly post-submission
- Backend routes were introduced but due to time constraints, some features like real-time sync and role-based enforcement remain unimplemented

Design Highlights
-----------------

- Color-coded priority indicators for urgency tracking
- Role distinction (creator vs. member) helps future-proof for permissions
- Modular structure in ``validation.js``, ``svr.cjs``, and individual component files
- Test coverage for core validation logic via Jest

Limitations
-----------

- No real-time sync between group members (data stored per user)
- Backend does not yet support authentication or session tracking
- No edit/delete options for tasks or costs due to limited time

This architecture allows for clear separation of responsibilities while keeping the app simple and extensible for future improvements like shared dashboards and notifications.
