User Requirement
=====================================

This section outlines the key user requirements that guided the design and development of the House Sharing Assistant application. Each requirement is derived from initial goals and was refined through user feedback, development iterations, and technical feasibility.

Sign-Up and Registration
~~~~~~~~~~~~~~~~~~~~~~~~

- Users must be able to create an account using valid first name, last name, email, and password.
- Email must not contain spaces or invalid formatting.
- The password field must include a visibility toggle icon for usability.
- All inputs must be manually validated using JavaScript.
- Valid user data is stored in local storage and in the database (if connected).

Login Functionality
~~~~~~~~~~~~~~~~~~~

- Registered users must be able to log in using their email and password.
- The system validates credentials against stored data (local storage or database).
- An alert is shown if the login fails due to incorrect credentials.
- The password input has a toggle icon to switch between visible and masked states.

Group Creation
~~~~~~~~~~~~~~

- Users must be able to create a group with a name, optional description, and a 5-digit numeric group ID.
- A “creator” role is assigned to the user creating the group.
- Group data is stored with appropriate metadata and can be retrieved in the “Your Groups” view.

Joining Existing Groups
~~~~~~~~~~~~~~~~~~~~~~~

- Users can join existing groups using a valid 5-digit group ID.
- Role of “member” is automatically assigned to joined users.
- Duplicate joining is prevented and validation errors are displayed if the group ID is invalid or already joined.

Task Creation
~~~~~~~~~~~~~

- Users must assign tasks to at least one member.
- A task must have a deadline that is today or later, and a priority level (Red, Amber, Green).
- Task summaries are shown immediately after creation, with color-coded priority indicators.
- Tooltips such as “Click to Share Tasks” are shown to assist first-time users.

Cost Entry
~~~~~~~~~~

- A cost entry requires an amount, assigned members, a deadline, and a priority.
- Cost is automatically split among selected users and the payer.
- A cost summary with visual indicators and urgency messages is displayed.
- The summary can be exported as a CSV file.

Limitations and Future Enhancements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Editing or deleting tasks/costs is currently not supported.
- Shared views of tasks and costs among group members are not available due to client-side storage constraints.
- Task and cost statuses (e.g., “completed”) and notifications were not implemented.
- Gamification and a point system were considered but excluded in this version.

.. note::

   While many core features are implemented, advanced functionalities like shared group views, edit/delete actions, and role-based access control remain future goals due to time and backend limitations.
