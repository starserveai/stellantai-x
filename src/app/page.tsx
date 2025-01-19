"use client";

import { useState } from "react";
import { Button, ConfigProvider, theme, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1677ff", // Customize the primary color if needed
          borderRadius: 4,
          fontSize: 16,
        },
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "24px",
          backgroundColor: isDarkMode ? "#141414" : "#f0f2f5",
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        <Title level={2}>Welcome to StellantAI</Title>
        <Paragraph>
          This is a sample page using Ant Design components with dynamic theme
          switching.
        </Paragraph>
        <Button
          type="primary"
          onClick={handleThemeToggle}
          style={{ marginTop: "16px" }}
        >
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
      </main>
    </ConfigProvider>
  );
}