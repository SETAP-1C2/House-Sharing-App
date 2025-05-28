Components
=====================================


This section outlines the core components that make up the **House Sharing Assistant App**, organized by functionality and layer.

---

Frontend Components
-------------------

These are implemented in JavaScript, HTML, and CSS, and handle user interactions and UI rendering.

**Dashboard**
- Displays all joined or created groups.
- Allows users to create or enter rooms.

**Group View**
- Shows group name, members, and available actions.
- Entry point to cost splitting and task assignment features.

**Task Assignment**
- Form for assigning recurring tasks with deadlines and priority.
- Task summary is rendered and saved using local storage.

**Cost Splitting**
- Allows users to log shared expenses.
- Calculates per-person amounts and flags priority levels.

**Validation Layer**
- Real-time input validation (e.g. email, password, group ID).
- Logic stored in `validation.js` and tested with Jest.

---

Backend Components
------------------

.. note:: 

    The backend is implemented using Node.js (`svr.cjs`) and SQLite.


**Server (``svr.cjs``)**
  - Handles HTTP requests and serves frontend files.
  - Can connect to database if extended for persistent storage.

**Database (``house_share_app.db``)**
  - SQLite-based local database for persistent data.
  - Used for storing user, group, and activity data efficiently.

---

Supporting Files
----------------

- ``validation.js``: Contains all frontend validation logic.
- ``jest.config.mjs``: Configuration for running Jest tests with ESM and jsdom support.
- ``.readthedocs.yml``: Configuration for Read the Docs build.
- ``README.md``: Basic developer guide and quickstart.

.. note::

Each of these components plays a role in delivering a smooth, modular, and maintainable user experience.
