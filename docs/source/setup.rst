Setup Instructions 
=====================================

This section outlines the full setup process for running the House Sharing Assistant App locally, including installing dependencies, launching the database, starting the server, and running tests.

System Requirements
~~~~~~~~~~~~~~~~~~~

Make sure the following are installed before you begin:

- **Node.js** (v18 or higher): https://nodejs.org/
- **npm** (Node Package Manager, comes with Node.js)
- A terminal or command prompt
- A modern web browser (Chrome, Firefox, etc.)

Install Node.js and npm if not already installed, then verify:

.. code-block:: bash

   node -v
   npm -v

Clone the Project
~~~~~~~~~~~~~~~~~

Clone the repository to your machine and navigate into the project folder:

.. code-block:: bash

   git clone <your-repo-url>
   cd House-Sharing-App

Install Dependencies
~~~~~~~~~~~~~~~~~~~~

Use `npm install` to install required packages. If needed individually:

- **Express**: web framework for the server

  .. code-block:: bash

     npm install express

- **nodemon**: auto-restarts the server during development

  .. code-block:: bash

     npm install --save-dev nodemon

- **sqlite** and **sqlite3**: for database operations

  .. code-block:: bash

     npm install sqlite sqlite3

- **Jest**: for unit testing (used in the test plan)

  .. code-block:: bash

     npm install --save-dev jest

- **jest-environment-jsdom**: required by Jest for DOM testing

  .. code-block:: bash

     npm install --save-dev jest-environment-jsdom

- (Optional) **myst-parser**: if you're using Markdown in Read the Docs

  .. code-block:: bash

     pip install myst-parser

Initialize the Database
~~~~~~~~~~~~~~~~~~~~~~~

Before running the app, you must initialize the SQLite database:

.. code-block:: bash

   node database.js

This creates ``house_share_app.db`` with the required tables.

Start the Application
~~~~~~~~~~~~~~~~~~~~~

To start the backend server (``svr.cjs``) with file watching enabled:

.. code-block:: bash

   npm start

This uses ``nodemon`` to monitor changes and serve files at:

.. code-block:: text

   http://localhost:3000

Frontend files are located in the ``frontend/`` directory and will load automatically.

Run the Unit Tests
~~~~~~~~~~~~~~~~~~

Unit tests are implemented using **Jest**. To run all test suites:

.. code-block:: bash

   npm run test

This executes tests from the ``tests/`` folder using the configuration in ``jest.config.mjs``.

Project Structure
~~~~~~~~~~~~~~~~~

- ``frontend/``: HTML, CSS, and JavaScript UI files
- ``svr.cjs``: Express server backend file
- ``database.js``: Script to create and initialize the database
- ``house_share_app.db``: SQLite database file
- ``validation.js``: Contains input validation logic
- ``tests/``: Contains Jest test files
- ``jest.config.mjs``: Jest configuration for ESM and jsdom
- ``docs/``: Documentation files for Read the Docs

.. note::

   After installing dependencies and running ``node database.js``, you must always start the server with ``npm start`` before accessing the app in your browser.
