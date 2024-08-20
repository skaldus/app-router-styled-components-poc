# Next.js App with Styled-Components - Proof of Concept

This repository demonstrates a proof of concept for using styled-components in a Next.js project configured with the new App Router. The App Router in Next.js allows for more flexible routing options and better organization of your application, and styled-components offers a robust way to manage component-level styles in a React application.

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed
- **pnpm**: or use any other package manager

### Installation

1. Clone the repository to your local machine

```bash
git clone https://github.com/skaldus/app-router-styled-components-poc.git
cd app-router-styled-components-poc
```

2. Install all dependencies

```bash
pnpm install
```

### Running the dev server

To start the development server, run:

```bash
pnpm dev
```

The server should be running at [http://localhost:3000](http://localhost:3000). You can now view the application in your browser.

### Folder Structure

- **`/src/app`**: Contains the main pages and layout for the app router.
- **`/src/components`**: Contains the reusable styled-components and theme provider.
- **`/src/lib`**: Contains styled-component global registry to collect all CSS style rules
- **`/src/styles`**: Global styles and theme configuration.

### Features

- **Next.js App Router**: Demonstrates the usage of the App Router in Next.js.
- **Styled-Components**: Integrated `styled-components` for component-scoped styling.
- **Server-Side Rendering (SSR) Support**: Ensures styles are properly rendered on the server side.

### Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn more about Next.js features and API.
- [Styled-Components Documentation](https://styled-components.com/docs) - Learn more about styled-components and how to use them effectively.

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
