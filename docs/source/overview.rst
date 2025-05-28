Overview
=====================================

The **House Sharing Assistant** is a web-based application designed to support individuals living in shared accommodations. Whether you're managing a flat with friends or a co-living space with multiple residents, this app helps streamline daily responsibilities like assigning tasks and splitting expenses.

This documentation provides everything you need to understand, deploy, and contribute to the project, including system requirements, application structure, setup instructions, testing, and future development.

Core Features
-------------

- **Group Management**: Users can create and join groups using unique IDs, with role distinctions (creator vs. member).
- **Task Assignment**: Share and assign responsibilities across group members, with optional priority and recurrence.
- **Cost Splitting**: Log shared expenses and automatically calculate how much each member owes.
- **Local Data Handling**: Information is stored locally using `localStorage` for simplicity and responsiveness.
- **Validation Layer**: Input validations ensure clean, structured data and prevent user errors.
- **Unit Tested**: Core logic is tested using Jest to ensure correctness and maintainability.

Technical Stack
---------------

- **Frontend**: HTML, CSS, and vanilla JavaScript
- **Backend/Server**: `svr.cjs` (Node.js with Express)
- **Database**: SQLite via `sqlite3` for persistent storage (`house_share_app.db`)
- **Testing**: Jest (configured for ECMAScript Modules with jsdom environment)
- **Documentation**: Written in reStructuredText and hosted on Read the Docs

Target Users
------------

- Students sharing accommodation
- Roommates and flatmates
- Families assigning recurring chores
- Developers looking to extend household management tools

What You'll Find in This Documentation
--------------------------------------

- Project architecture and folder structure
- User and system requirements
- Setup and installation steps
- Testing strategy and validation rules
- Future enhancements and collaboration information
