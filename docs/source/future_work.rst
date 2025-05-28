Future Work
=====================================

While the House Sharing Assistant App meets its core goals, there are several improvements and features planned for future versions to enhance collaboration, usability, and scalability.

Shared Data Across Members
~~~~~~~~~~~~~~~~~~~~~~~~~~

Currently, each user's tasks and costs are stored locally using ``localStorage``. In the future, these will be synced through a central database so that:

- All group members can see the same task and cost lists
- Updates made by one user reflect in real time for others
- Centralized group dashboards become possible

Edit and Delete Functionality
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Tasks and costs are currently immutable once added. Future work includes:

- Allowing users to edit or delete existing tasks and costs
- Logging history or timestamps for changes
- Enforcing edit permissions based on group roles

User Roles and Permissions
~~~~~~~~~~~~~~~~~~~~~~~~~~

Although the app distinguishes between group "creators" and "members," this has no functional impact yet. Planned improvements:

- Restrict certain actions (e.g., delete group) to creators only
- Enable role-based task assignment and management
- Add a group admin panel for better control

Notifications and Reminders
~~~~~~~~~~~~~~~~~~~~~~~~~~~

To support better task management and accountability:

- Email or in-app reminders for upcoming deadlines
- Alerts for overdue tasks or pending cost contributions
- Real-time notifications when changes are made to the group

Gamification and Progress Tracking
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To encourage participation and shared responsibility:

- Introduce a point-based system for completing tasks
- Leaderboards or reward badges for consistent contributors
- Visual progress bars or completion stats

Mobile Optimization
~~~~~~~~~~~~~~~~~~~

Although responsive to some extent, the app is currently optimized for desktop use. Future enhancements:

- Full mobile responsiveness
- Progressive Web App (PWA) features for offline access
- Touch-friendly UI adjustments

Deployment and Hosting
~~~~~~~~~~~~~~~~~~~~~~

The app is currently designed for local use. Planned deployment goals include:

- Hosting on a cloud platform (e.g., Heroku, Render, Vercel)
- Environment variable support for secure credentials
- Domain registration and HTTPS setup

.. note::

   These improvements aim to transform the app from a personal helper tool into a truly collaborative, real-time, and cross-device platform for house sharing and group living.

