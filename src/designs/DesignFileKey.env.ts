/**
 * Configuration object for Figma specifications.
 * Placeholder for your project's 'Figma Spec' API key, URL, and file key.
 *
 * Future Feature:
 * This configuration can be extended to generate JSON design tokens,
 * CSS files, and layouts automatically.
 */
const figmaSpec = {
    /**
     * The unique Figma API key used for authentication.
     * Note: Store sensitive keys in environment variables for security!
     * Replace "your-figma-api-key" with your actual Figma API key if not using environment variables.
     */
    apiKey: process.env.FIGMA_API_KEY || "your-figma-api-key",

    /**
     * The URL for the Figma project.
     * Add your Figma project URL between the quotes below.
     * Example: "https://www.figma.com/file/<fileKey>/Your-Project-Name"
     */
    projectUrl: "https://www.figma.com/file/your-project-id",

    /**
     * The unique file key for the Figma project.
     * This key can be extracted from the Figma project URL.
     * Example: If the URL is "https://www.figma.com/file/abc123/ProjectName",
     * the file key is "abc123".
     */
    fileKey: "your-project-id",

    /**
     * Documentation or resource description.
     * Optional: Add a brief description of the Figma project for reference.
     */
    description: "This configuration links to the Figma design specifications for the project."
};

export default figmaSpec;