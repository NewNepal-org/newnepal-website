# Development

## GitLab CI/CD

This project's static Pages are built by [GitLab CI/CD](https://about.gitlab.com/product/continuous-integration/),
following the steps defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```yaml
image: node:18-alpine3.20

stages:
  - test
  - deploy

test:
  stage: test
  script:
    - yarn install
    - yarn build
  rules:
    - if: $CI_COMMIT_REF_NAME != $CI_DEFAULT_BRANCH

create-pages:
  stage: deploy
  script:
    - yarn install
    - yarn build
    - mv ./build public
  pages: true
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
```

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project.
1. Install Docusaurus:

   ```sh
   yarn install
   ```

1. Preview your project:

   ```sh
   yarn start
   ```

   Your site can be accessed under http://localhost:3000.

1. Add content.
1. Generate the website (optional):

   ```sh
   yarn build
   ```

   The website will be built under `build/`.

Read more at the [Docusaurus documentation](https://docusaurus.io).

## Internationalization (i18n)

**All content changes must be translated to Nepali.** This project uses Docusaurus i18n support.

### Translation Requirements

- Default locale: English (`en`)
- Required translation: Nepali (`ne`)
- All new content must include Nepali translations
- Follow [Docusaurus i18n guide](https://docusaurus.io/docs/i18n/introduction)

### Translation Workflow

1. Add content in English
2. Run `yarn write-translations --locale ne` to generate translation files
3. Translate content in `i18n/ne/` directory
4. Test with `yarn start --locale ne`

## Set url and baseUrl in docusaurus.config.js

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.