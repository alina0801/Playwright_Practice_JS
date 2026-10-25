# Playwright Practice with JavaScript

My hands-on practice project for learning browser test automation with Playwright and JavaScript as part of my AI SDET coursework. The exercises cover locating elements, interacting with pages, organizing tests, and checking application behavior with assertions.

This is a learning project, not a production-ready test framework. Some exercises intentionally demonstrate failures, and others are placeholders or work in progress.

## Tools

- JavaScript and Playwright Test
- Node.js and npm
- Chromium browser
- dotenv for local environment variables
- Playwright HTML reports and traces

Most tests use JavaScript. The project also contains one TypeScript starter test.

## What I am practicing

- Locators: role, label, placeholder, text, CSS, and chained locators
- Browser navigation, form input, clicks, hovering, and keyboard actions
- Test groups with `test.describe()` and setup/cleanup hooks
- Smoke, sanity, and regression filtering
- Visibility, text, value, count, and URL assertions
- Hard and soft assertions, including intentional failure examples
- Working with lists of elements and JavaScript loops
- Handling alerts, confirmation dialogs, prompts, and iframes

The Day 14 assignment includes mouse, keyboard, and web-table exercises; it currently exists as assignment text rather than runnable tests.

## Project structure

```text
Playwright_Practice_JS/
├── tests/
│   ├── day_09/              # Navigation, forms, and basic interactions
│   ├── day_10/              # Tags, groups, and hooks
│   ├── day_12/              # Element assertions and hard/soft assertions
│   ├── day_13/              # Element collections, dialogs, and iframes
│   ├── day_14/Tasks         # Assignment instructions, not runnable tests
│   ├── locator_practice/   # Locator exercises
│   ├── example.spec.js     # Playwright starter examples
│   └── test-1.spec.ts      # TypeScript starter placeholder
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Setup

Install Node.js and npm compatible with the Playwright version in `package-lock.json`. Open a terminal in this project folder, then run:

```bash
npm ci
npx playwright install chromium
```

Tests visit public practice websites, so an internet connection is required. No local application server is configured.

### Environment variables

Create a `.env` file in the project root. The configuration loads it with dotenv. Use the following variable names and replace the credential placeholders with the public demo credentials supplied by the practice sites or course:

```dotenv
SAUCEDEMO_URL=https://www.saucedemo.com
SAUCEDEMO_USERNAME=your_demo_username
SAUCEDEMO_PASSWORD=your_demo_password
HEROKUAPP_URL=https://the-internet.herokuapp.com
HEROKUAPP_USERNAME=your_demo_username
HEROKUAPP_PASSWORD=your_demo_password
```

Keep `HEROKUAPP_URL` as the root URL without a trailing slash, because several tests append paths such as `/javascript_alerts` and `/iframe`. Check individual exercises when troubleshooting navigation; not every exercise uses the base URL consistently.

**Before publishing:** the current `.gitignore` does not exclude `.env`. Add `.env` to `.gitignore` before committing, and never commit real passwords, tokens, client data, or private environment files. The values above are placeholders, not a copy of the local `.env` file.

## Run tests

Start with a single file while working through the lessons:

```bash
# Run the starter examples
npx playwright test tests/example.spec.js

# Run one lesson folder
npx playwright test tests/day_13

# Run all discovered tests
npx playwright test

# Open the interactive test runner
npx playwright test --ui

# Debug a single test file
npx playwright test tests/day_13/TC5.test.js --debug

# List tests without executing browser actions
npx playwright test --list
```

### Filter by tag

```bash
npx playwright test --grep @smoke
npx playwright test --grep @sanity
npx playwright test --grep @regression
npx playwright test --grep "@regression|@smoke"
```

Filters match implemented tags and test titles, not comments describing the homework. Not every exercise has a tag.

### Existing npm scripts

| Command | Current behavior |
| --- | --- |
| `npm run tests-all-headless` | Runs all tests, but currently opens a browser because the configuration sets `headless: false` |
| `npm run tests-all-headed` | Runs all tests with a visible browser |
| `npm run "smoke test"` | Filters by `@smoke` |
| `npm run "sanity test"` | Filters by `@sanity` |
| `npm run "regres test"` | Filters by `@regression` |
| `npm run report` | Opens the HTML report |

The existing `test-regres-or-smoke` script spells the regression tag as `@regresion`. Use the direct combined-filter command above until that script is corrected.

## Current configuration

- **Browser:** Chromium only; Firefox and WebKit projects are commented out.
- **Display:** headed mode with a maximized browser window and no fixed viewport.
- **Execution:** files and tests are configured for full parallel execution.
- **Retries:** none locally; two retries when `CI` is set.
- **CI workers:** one worker when `CI` is set.
- **Safety:** focused tests (`test.only`) are rejected when `CI` is set.
- **Reports:** HTML reporter.
- **Traces:** collected on the first retry. With no local retries, a normal local failure will not create a retry trace.

The project contains CI-aware configuration, but it does not include a CI pipeline. Headless CI execution would also require adjusting the current headed browser configuration.

## View results

After running tests:

```bash
npm run report
```

Generated reports are stored in `playwright-report/`, with test artifacts in `test-results/`. These folders are already excluded by `.gitignore`.

## Learning notes

- Run one exercise at a time and compare its behavior with the assignment comments.
- Some assertion exercises deliberately fail to demonstrate hard and soft assertions.
- A passing placeholder test does not prove that an application feature works.
- Public websites can change or show bot checks, which may affect the exercises.
- Prefer meaningful assertions and reliable locators over fixed delays.
- Review failures before changing an expected result; the failure may identify a real mistake in the test.

## Next improvements

- Complete the Day 14 exercises as runnable test files.
- Add `.env` to `.gitignore` and provide a safe `.env.example`.
- Correct the combined regression/smoke script and clarify headed/headless execution.
- Separate intentional failure demonstrations from the regular practice suite.
- Improve reusable setup and keep test data separate from test steps.
