Components
=====================================


This section outlines the core components that make up the **House Sharing Assistant App**, organized by functionality and layer.

---

Frontend Components
-------------------

These are implemented in JavaScript, HTML, and CSS, and handle user interactions and UI rendering.

- **Dashboard**
- Displays all joined or created groups.
- Allows users to create or enter rooms.

- **Group View**
- Shows group name, members, and available actions.
- Entry point to cost splitting and task assignment features.

- **Task Assignment**
- Form for assigning recurring tasks with deadlines and priority.
- Task summary is rendered and saved using local storage.

- **Cost Splitting**
- Allows users to log shared expenses.
- Calculates per-person amounts and flags priority levels.

- **Validation Layer**
- Real-time input validation (e.g. email, password, group ID).
- Logic stored in `validation.js` and tested with Jest.

---

Backend Components
------------------

.. note:: 
    The backend is implemented using Node.js (`svr.cjs`) and SQLite.

