System Requirement
=====================================

This section outlines the system-level requirements necessary to support the development, deployment, and execution of the House Sharing Assistant App. These include both functional capabilities and technical constraints based on the final implementation.

The system must allow:
- New users to register and log in with valid credentials.
- Users to create and join groups using 5-digit numeric IDs.
- Tasks and costs to be assigned to selected members within a group.
- All actions (create/join group, assign task, split cost) to be validated before submission.
- Group members to view task and cost summaries immediately after form submission.
  - CSV export of task and cost summaries for record-keeping.

- Each created group must store:
  - Group name and ID
  - Description (optional)
  - Creator role metadata

- Task and cost entries must store:
  - Assigned users
  - Title and description
  - Deadline
  - Priority level (with color-coded indicator)
  - Amount (for costs only), calculated per user

Technical Requirements
~~~~~~~~~~~~~~~~~~~~~~

- **Frontend Stack**: HTML5, CSS3, JavaScript
- **Backend Environment**: Node.js with Express (via ``svr.cjs``)
- **Database**: SQLite (via ``sqlite3`` package), used for persistent group/user data
- **Data Storage**: Primarily ``localStorage`` for client-side persistence, with optional SQLite integration
- **Testing Framework**: Jest with jsdom for unit testing logic
- **Documentation**: reStructuredText rendered via Read the Docs

Browser Compatibility
~~~~~~~~~~~~~~~~~~~~~

- Fully functional on latest versions of:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

Device Compatibility
~~~~~~~~~~~~~~~~~~~~

- Designed for desktops and tablets
- Responsive layout tested for small screens, but optimized for medium+ viewports

Performance Expectations
~~~~~~~~~~~~~~~~~~~~~~~~

- Quick form validation and instant feedback without server round-trips
- Minimal external dependencies to reduce load time
- Smooth transitions between sections using vanilla JavaScript and dynamic DOM manipulation

Known Limitations
~~~~~~~~~~~~~~~~~

- No real-time updates or cross-user visibility due to lack of shared backend sync
- No authentication/session handling to persist user identity across sessions/devices
- Features like edit/delete, status tracking, notifications, and gamification are excluded due to time and tool constraints

.. note::

   The system prioritizes a smooth user experience through manual validation and fast feedback. While currently relying on localStorage for simplicity, the backend and database structure allows for scalable upgrades in future versions.

