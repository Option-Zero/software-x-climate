# Software X Climate

This is a utility and demo site supporting the [Software For Climate](https://www.terra.do/climate-change-courses/software-for-climate/) course by [Option Zero](optionzero.co) and [Terra.do](terra.do).

The site hosts various frontends used during the class and referring to the class.

# Developing

## Prerequesites

- Node
- [nvm](https://github.com/nvm-sh/nvm) - recommended to install and manage node versions. See .nvmrc for current node version.
- [pnpm](https://pnpm.io/installation) - node package manager

```bash
nvm use
```

## Install dependencies

```bash
pnpm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```bash
AIRTABLE_API_KEY=your_api_key_here
```

### Getting an Airtable API Key

1. Visit https://airtable.com/create/tokens
2. Create a new personal access token
3. Grant it access to the following bases:
   - `appiTlFyRhnNrKlLh` (Projects - used by `/showcase`)
   - `app97sUZfBc4P5fgr` (Companies - used by `/frameworks`)
4. Copy the token and add it to your `.env` file

## Run server

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
