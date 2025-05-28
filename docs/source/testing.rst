Testing 
=====================

This section outlines the testing strategy used for the House Share App, with a focus on validation logic and frontend reliability. Unit testing was selected to ensure that input checks across forms behave as expected and protect against invalid or malformed data.

Testing Approach
~~~~~~~~~~~~~~~~

- **Testing Framework**: [Jest](https://jestjs.io/)
- **Test Type**: Unit tests (no end-to-end or integration tests)
- **Environment**: DOM-based environment simulated with ``jest-environment-jsdom``

The tests were written for the most critical functions in the app—specifically, input validation logic contained in `validation.js`. This includes checks for:

- Email formatting
- Password length and complexity
- Group ID and name structure
- Task and cost field constraints (e.g., deadlines, amounts)

Test Execution
~~~~~~~~~~~~~~

To run the tests:

.. code-block:: bash

   npm run test

This command runs all `.test.js` files under the `tests/` directory using the configuration defined in `jest.config.mjs`.

Testing Results
~~~~~~~~~~~~~~~

As of the latest test run:

    | **Test Suites**: **1 passed**, 1 total
    | **Tests**: **21 passed**, 21 total
    | **Snapshots**: 0 total
    | **Time**: 1.791 s
    | **Time**: 1.791 s

This indicates that the app's validation logic is functioning correctly under all expected input scenarios.

.. note::

   All validation-related edge cases (e.g. invalid emails, short passwords, overdue deadlines) were tested. Future work may include integration tests, cross-browser testing, and automated UI tests to cover more complex flows.


