# StellantAI

![Project Template Preview](stellantai-x-dash.png)

**StellantAI** is a template and framework for building enterprise-level React applications, specifically designed for chat agents and AI-driven components. Built on top of [Ant Design X](https://github.com/ant-design/x), this template is intended for **rapid prototyping** of web applications.

This project integrates dynamic theme switching, cross-device and cross-platform support, design token support, Figma FigSpec API support, and AI-assisted React component generation to create flexible, scalable, and visually appealing enterprise-grade applications that are responsive across devices.

---

## Theme Viewing and Switching ##
In order to provide consistent, quickly customizable theming across the application that can be sourced from your design system, this project template is designed to link to your central design theme for the project, or to your design tokens file, or from a Figma project URL. The goal is to  provide a fast and simple approach to creating customizable themes and layouts. 

**Color Theme Design Tokens** are primarily sourced from two locations:

1. The main theme configuration is defined in`/src/theme/themes.ts` which contains the base theme tokens
   
2. Design tokens can also be imported from`/src/designs/DesignTokens.json` which is meant to sync with design tokens exported from Figma.

These files work together with the ThemeProvider component in`/src/theme/ThemeProvider.tsx` to provide consistent theming across the application. The design tokens include colors, typography, spacing, device layouts and other visual elements that can be customized globally or overridden at the component level.  

**Typography Design Tokens** are sourced from the main theme configuration in`/src/theme/themes.ts` and are used to define the typography styles for the application. The typography tokens include font families, sizes, weights, and line heights that can be customized globally or overridden at the component level.

**Spacing Design Tokens** are sourced from the main theme configuration in`/src/theme/themes.ts` and are used to define the spacing styles for the application. The spacing tokens include margins, paddings, and other spacing elements that can be customized globally or overridden at the component level. 

![Theme and Design Tokens Viewer](StellantAI-themes.png)

## SAI Core Architecture

StellantAI follows the SAI Core project guidelines, a comprehensive architectural framework designed to create scalable, maintainable, and device-optimized applications.

### What is SAI Core?
SAI Core is an architectural pattern that emphasizes device-specific layouts, shared components, and design token integration. It provides a structured approach to building applications that can seamlessly adapt to different devices while maintaining consistent design and functionality.

### Why SAI Core?
- **Device Optimization**: Dedicated layouts for web, mobile, and tablet ensure optimal user experience across all devices
- **Component Reusability**: Shared component architecture reduces code duplication and maintenance overhead
- **Design System Integration**: Seamless integration with design tokens and Figma workflows
- **Scalability**: Modular structure supports easy addition of new features and device-specific optimizations

### When to Use SAI Core?
- During initial project setup to establish a solid architectural foundation
- When migrating existing projects to support multiple device types
- For projects requiring tight integration between design systems and code
- When building enterprise applications that need to scale across different platforms

### Where is SAI Core Implemented?
The SAI Core architecture is implemented throughout the project structure:
- `/src/app/` - Device-specific layouts (web/, mobile/, tablet/)
- `/src/components/` - Shared component library
- `/src/designs/` - Design tokens and assets
- `/src/theme/` - Theme configurations and customizations

### Who Benefits from SAI Core?
- **Developers**: Clear structure and separation of concerns
- **Designers**: Direct integration with design systems and tokens
- **Product Managers**: Easier feature planning across devices
- **End Users**: Optimized experience for their specific device

---

## Key Features

- **Ant Design X Components**: Built-in enterprise-ready React components for rapid UI development.
- **Dynamic Theme Switching**: Tailwind CSS and Ant Design themes integrated with design tokens from Figma for seamless light/dark mode transitions.
- **Figma to Design Theme Workflow**: Supports exporting design tokens from Figma to a Design Tokens JSON file for use in CSS and theme files. 
- **Design Theme to Code Workflow**:  Use Anima and generate React components using the [Anima AI Plugin](https://marketplace.visualstudio.com/items?itemName=AnimaApp.vscode-anima).
- **Next.js Integration**: Fully scaffolded with Next.js, offering server-side rendering (SSR) and static site generation (SSG) for scalable web apps.
- **Modern Tech Stack**: Powered by Next.js, Responsive Web, Ant Design, Ant Design X AI components, along with support for TypeScript.
- **Beginner-Friendly**: Includes lots of docs and details for new developers.

---

## Tech Stack

| **Technology**   | **Description**                                                              |
|-------------------|------------------------------------------------------------------------------|
| **Next.js**       | React framework for building server-rendered web apps.                      |
| **Ant Design X**  | Enterprise-ready React components with dynamic theming.                     |
| **TypeScript**    | Strongly typed JavaScript for more robust development.                      |
| **Figma**         | Design system integration with support for exporting design tokens.         |


---

## Project Structure

The project follows a modular and organized structure to facilitate ease of development:

```plaintext
stellantai-x/
├── core/                 # Core framework specifications and templates
│   ├── deployments/      # Deployment configurations for different platforms
│   ├── public/           # Static HTML templates and styles
│   └── src/              # Core source code and components
├── public/               # Public assets and static files
│   ├── settings/         # Settings-related assets
│   └── static-html/      # Static HTML templates for different devices
├── src/
│   ├── app/             # Next.js application entry (routes/pages)
│   │   ├── dashboard/    # Dashboard-specific components and layouts
│   │   ├── mobile/      # Mobile-specific layouts and components
│   │   ├── tablet/      # Tablet-specific layouts and components
│   │   └── web/         # Web-specific layouts and components
│   ├── components/       # Shared React components
│   │   └── charts/      # Chart and data visualization components
│   ├── designs/         # Design tokens and Figma integration
│   ├── layouts/         # Layout components and styles
│   ├── theme/           # Theme configurations and providers
│   └── utils/           # Utility functions and helpers
├── .gitignore           # Git ignored files
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 16 or later)
- **npm** (or an alternative like Yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/StarServeai/stellantai-x.git
   cd stellantai-x
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Design to Code Workflow

1. **Create Designs in Figma**:
   - Use Figma to design components and pages, or import existing designs.
   - Define design tokens for colors, typography, device layouts, spacing.

2. **Import Figma Design Tokens**:
   - Use a Figma plugin (e.g., [Variables2JSON](https://github.com/mark-nicepants/variables2json-docs)) to export figma design tokens as JSON, then use the `DesignTokens.json` file to import the design tokens into your project CSS file(s).

3. **Link Figma Designs to Development via API**
   - Close the gap between deign and dev with a direct API link from Figma to your development team.  Changes made in the design tool show up in the StellantAI-X platform's design tokens and mainlayout CSS files.

4. **Generate React Components**:
   - Use the [Anima AI Plugin](https://marketplace.visualstudio.com/items?itemName=AnimaApp.vscode-anima) to convert Figma designs into React components.

5. **Integrate JS/TS Components into StellantAI**:
   - Import existing JS/TS Design components or add new components styled through Anima, manually or from reference libs.

---

## Theming and Customization

StellantAI supports **dynamic theme switching** using Ant Design's ConfigProvider theme management system (https://ant.design/docs/react/customize-theme) and design tokens. The `themeConfig.ts` file contains the base theme tokens, and the `DesignTokens.json` file is used to import design tokens from Figma.

- **Light/Dark Modes**:
  - Easily switch between themes using the theme toggler built into the app.
- **Customizing Tokens**:
  - Modify `themeConfig.ts` to update global design tokens such as `colorPrimary` or `fontSize`.

Example snippet for a design token from `themeConfig.ts`:
```typescript
const theme: ThemeConfig = {
  token: {
    fontSize: 16,                // Base font size
    colorPrimary: '#0070f3',     // Primary theme color
    colorTextSecondary: '#595959', // Secondary text color
    colorFillSecondary: '#f0f0f0', // Secondary background fill
  },
};
export default theme;
```

---

## Deployment

### Deploying on Vercel

The easiest way to deploy your app is via [Vercel](https://vercel.com/).

1. Link your GitHub repository to Vercel.
2. Push your changes to the `main` branch.
3. Vercel will automatically build and deploy your app.

For manual deployment, refer to [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## Resources for Learning React & Next.js

- **React Official Documentation**: [React Docs](https://reactjs.org/docs)
- **Next.js Official Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **Ant Design X**: [Ant Design X Docs](https://ant.design/docs/react/introduce)
- **Tailwind CSS**: [Tailwind Docs](https://tailwindcss.com/docs)
- **Figma**: [Figma Learn](https://www.figma.com/resources/learn-design/)

---


# Frequently Asked Questions (FAQ)

<details>
<summary><strong>What is the purpose of the Stellant AI project and what problem does it solve for enterprises?</strong></summary>

Stellant AI is a comprehensive development framework designed to solve the challenges enterprises face when building modern AI applications across multiple platforms and devices. It provides a unified development approach that addresses three key areas:

1. **Cross-Device Development**: Enables seamless development for web, mobile, and tablet interfaces through device-specific layouts and shared components, ensuring consistent user experience across all platforms.

2. **Cross-Framework Integration**: Supports multiple frontend frameworks (React, Next.js, Vue) while maintaining consistent design patterns and code organization, allowing teams to use their preferred tools while ensuring project cohesion.

3. **Cross-Deployment Solutions**: Provides standardized deployment configurations for various platforms (Vercel, Expo, static servers), simplifying the process of deploying AI applications across different hosting environments.

By providing this unified framework, Stellant AI significantly reduces development complexity, improves code reusability, and accelerates the delivery of enterprise AI applications while maintaining high quality and consistency across all platforms.
</details>

<details>
<summary><strong>How do I implement device-specific layouts while maintaining code consistency?</strong></summary>

The project uses a device detection utility (`deviceDetection.ts`) combined with specific layout components for each device type. Create separate components in `/app/mobile/`, `/app/tablet/`, and `/app/web/` directories, then use the device detection utility to render the appropriate layout.
</details>

<details>
<summary><strong>What's the recommended way to implement custom themes?</strong></summary>

Use the `ThemeProvider` context and define custom themes in `DesignTokens.json`. Implement theme switching through the `useTheme` hook and store user preferences in localStorage for persistence.
</details>

<details>
<summary><strong>How can I optimize the application's performance for different devices?</strong></summary>

Utilize dynamic imports for code splitting, implement responsive images using Next.js Image component, and use device-specific breakpoints defined in CSS custom properties.
</details>

<details>
<summary><strong>What's the best practice for managing global state in the application?</strong></summary>

Combine React Query for server state management with Context API for UI state. Use the QueryClient provider at the app root and create specific contexts for features like theme and notifications.
</details>

<details>
<summary><strong>How do I implement real-time notifications across different devices?</strong></summary>

Use WebSocket connections for real-time updates, implementing the notification system through a Context provider that manages subscription and display logic across all device types.
</details>

<details>
<summary><strong>What's the recommended approach for styling components?</strong></summary>

Use CSS Modules for component-specific styles, combined with global variables from `DesignTokens.json`. Implement responsive designs using the predefined breakpoints in the theme system.
</details>

<details>
<summary><strong>How can I extend the existing layout system for new features?</strong></summary>

Extend the `MainLayout` component and use the existing responsive design patterns. Create new components in the appropriate device-specific directories and integrate them with the existing navigation system.
</details>

<details>
<summary><strong>What's the process for implementing new dashboard widgets?</strong></summary>

Create reusable components in the dashboard components directory, implement data fetching using React Query, and use the existing chart and visualization components as templates.
</details>

<details>
<summary><strong>How do I handle authentication and user sessions across devices?</strong></summary>

Implement authentication through the profile management system, storing tokens securely and managing session state through React Query and Context API.
</details>

<details>
<summary><strong>What's the best way to implement custom navigation patterns?</strong></summary>

Extend the existing navigation system using Next.js routing, implement new routes in the appropriate device-specific directories, and update the breadcrumb navigation accordingly.
</details>

<details>
<summary><strong>How can I optimize resource loading for different network conditions?</strong></summary>

Implement progressive loading using dynamic imports, optimize images using Next.js Image component, and use the resource management strategies outlined in the Performance Optimization section.
</details>

<details>
<summary><strong>What's the recommended way to handle form state and validation?</strong></summary>

Use form management libraries compatible with React, implement validation logic in custom hooks, and maintain form state locally unless it needs to be shared across components.
</details>

<details>
<summary><strong>How do I create a new page for web or mobile devices?</strong></summary>

Use the starter templates in `/public/static-html/` as a base. For web pages, create a new file in `/src/app/web/`, and for mobile pages in `/src/app/mobile/`. Implement the page component using the device-specific layout patterns and integrate it with the navigation system.
</details>

<details>
<summary><strong>Is there a default page template I can use?</strong></summary>

Yes, you can find starter templates in `/public/static-html/` directory. Use `dashboard-web.html`, `dashboard-mobile.html`, or `dashboard-tablet.html` as base templates. These include the basic layout structure and necessary imports for each device type.
</details>

<details>
<summary><strong>How do I add charts or other components to a page?</strong></summary>

Import and use existing chart components from `/src/components/charts/`. For data visualization, use React Query for data fetching and pass the data to the chart components. Example:
```typescript
import { LineChart } from '@/components/charts';
const { data } = useQuery('chartData', fetchChartData);
return <LineChart data={data} />;
```
</details>

<details>
<summary><strong>How can I integrate components from UI frameworks like Material UI or ShadCN?</strong></summary>

Install the desired UI framework using npm/yarn, then use the project's theme system to maintain consistent styling. Example with Material UI:
```typescript
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { useTheme } from '@/theme/ThemeProvider';

// Create a MUI theme that matches your app's theme
const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary
    }
  }
});
```
Wrap the components with the framework's provider and maintain consistency with the app's design tokens.
</details>


<details>
<summary><strong>Where can I get AI chat components that I can add to this project?</strong></summary>

There are several sources for AI chat components that integrate well with StellantAI:

1. **Ant Design X Chat Components**:
   - Available directly through the Ant Design X library
   - Pre-styled to match your project's theme
   - Fully compatible with StellantAI's theming system

2. **Community Components**:
   - [Ant Design Pro Components](https://procomponents.ant.design/)
   - [Ant Design Charts](https://charts.ant.design/)
   - Various open-source React chat components

3. **Custom Components**:
   - Build using the `/src/components/` templates
   - Utilize the project's theme system
   - Integrate with your preferred AI backend

To maintain consistency, it's recommended to start with Ant Design X components and customize them according to your needs using the project's theme tokens.
</details>

<details>
<summary><strong>How do I add an AI chat component from Ant Design X to my project?</strong></summary>

To integrate an Ant Design X chat component into your project, follow these steps:

1. **Import the Component**:
```typescript
import { Chat } from '@ant-design/x';
```

2. **Add to Your Page**:
```typescript
const ChatPage = () => {
  return (
    <Chat
      theme={useTheme()} // Uses project's theme system
      messages={messages}
      onSend={handleSend}
      // Add other props as needed
    />
  );
};
```

3. **Style Integration**:
   - Use the project's theme tokens for consistent styling
   - Override styles using the project's CSS modules if needed
   - Maintain responsive design using the device-specific layouts

4. **State Management**:
   - Implement message handling using React Query or Context API
   - Follow the project's state management patterns

Example implementation in a device-specific layout:
```typescript
// src/app/web/chat.tsx
import { Chat } from '@ant-design/x';
import { useTheme } from '@/theme/ThemeProvider';

export default function WebChat() {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    // Implement your message handling logic
  };

  return (
    <div className="chat-container">
      <Chat
        theme={theme}
        messages={messages}
        onSend={handleSend}
        className="custom-chat"
      />
    </div>
  );
}
```
</details>

---

## Contribution Guidelines

Contributions are welcome! Please fork the repository and create a pull request for any features, bug fixes, or enhancements.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Description of changes"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
