<!-- markdownlint-disable MD014 MD033 MD034 MD036 MD041 -->

![Strangestarter](./pyramid.jpg)

# Strangestarter

[Next.js](https://nextjs.org) + [Chakra UI](https://chakra-ui.com) + [Turborepo](https://turborepo.org) boilerplate for [Strangelove Ventures](https://www.strangelove.ventures/)' projects

---

**Table of contents**

- [Features](#features)
- [Using template](#using-template)
- [Setup repository](#setup-repository)
- [Scripts](#scripts)
- [GitHub Workflows](#github-workflows)
- [Directory structure](#directory-structure)
- [Notes](#notes)
- [References](#references)
- [License](#license)

---

## Features

- Monorepo structure (scoped `eslint` and `prettier` configs)
- Flat structure inside `website/` directory
- Integrated git hooks with [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged)
- Premade [issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) and [pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)
- Lint on latest push via [GitHub Actions](https://docs.github.com/en/actions)

## Using template

**via GitHub templates**

- Click ["Use this template"](https://github.com/strangelove-ventures/strangestarter) on this project's GitHub page
- [Or click here to create a GitHub repository based on this template](https://github.com/strangelove-ventures/strangestarter/generate)

**via CLI using degit**

```console
$ npx degit strangelove-ventures/strangestarter new-project
$ cd new-project
```

## Setup repository

- Install dependencies by running `yarn install`
- Update website information in `website/config/favicons.json` and `website/config/metadata.json`
- Change website icon and social image in `website/public/icon.png` and `website/public/social.png`
- Generate favicons assets by running `yarn website favicons`

## Scripts

- `yarn build` - build website
- `yarn dev` - run website dev instance
- `PORT=12345 yarn dev` - run website dev instance on custom port (non-windows, for windows use [`cross-env`](https://github.com/kentcdodds/cross-env))
- `yarn website tokens` - generate Chakra UI [theme token typings](https://chakra-ui.com/docs/styled-system/theming/advanced#theme-typings)
- `yarn website [...args]` - run website scoped commands

## GitHub Workflows

- Lint on latest push ([view workflow schema](./.github/workflows/lint.yml))
- Manually trigger upgrade dependencies ([view workflow schema](./.github/workflows/dependencies.yml))

## Directory structure

```sh
├── packages/             # local packages
│   ├── eslint-config/    # project eslint configuration
│   ├── prettier-config/  # project prettier configuration
│   └── types/            # shared types
├── patches/              # package patches
└── website/              # main website entrypoint
    ├── config/           # various configuration files
    ├── hooks/            # custom react hooks
    ├── lib/              # 3rd party imports/exports (mdx, prisma, etc.)
    ├── pages/            # main next.js pages
    ├── public/           # static assets
    │   └── assets/       # favicons assets
    ├── scripts/          # runnable scripts
    ├── store/            # application state providers/stores
    ├── styles/           # stylesheets and theme definitions
    ├── ui/               # components directory
    └── utils/            # various utility declarations
```

## Notes

- Make sure the root directory is `website/` and not `/` ([read more](https://vercel.com/docs/concepts/git/monorepos#step-3:-set-the-root-directory))

## References

- https://chakra-ui.com/docs
- https://nextjs.org/docs
- https://turborepo.org/docs
- https://vercel.com/docs

## License

[MIT License, Copyright (c) 2022 Strangelove Ventures](./LICENSE)
