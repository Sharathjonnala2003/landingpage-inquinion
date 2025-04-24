const theme = {
  colors: {
    primary: "#6366F1", // Indigo for primary actions and branding
    secondary: "#8B5CF6", // Purple for secondary elements
    accent: "#000000", // Teal/sky blue for accents and highlights (was pink)
    background: "#FFFFFF", // White background for clean look
    darkBackground: "#111827", // Dark gray for dark sections
    text: "#1F2937", // Dark gray for text
    lightText: "#6B7280", // Light gray for secondary text
    white: "#FFFFFF", // White for text on dark backgrounds
    success: "#10B981", // Green for success states
    error: "#EF4444", // Red for error states
    warning: "#F59E0B", // Amber for warnings
    info: "#3B82F6", // Blue for info
  },
  fonts: {
    body: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading:
      "'Plus Jakarta Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    monospace: "'SF Mono', 'Roboto Mono', Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  // Fix: Convert space from an object to an array to match styled-components DefaultTheme
  space: [
    "0", // 0
    "0.25rem", // 1
    "0.5rem", // 2
    "0.75rem", // 3
    "1rem", // 4
    "1.25rem", // 5
    "1.5rem", // 6
    "1.75rem", // 7
    "2rem", // 8
    "2.25rem", // 9
    "2.5rem", // 10
    "3rem", // 11
    "3.5rem", // 12
    "4rem", // 13
    "5rem", // 14
    "6rem", // 15
    "8rem", // 16
    "9rem", // 17
    "10rem", // 18
  ],
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  zIndices: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },
  transitions: {
    default: "all 0.2s ease-in-out",
    fast: "all 0.1s ease-in-out",
    slow: "all 0.3s ease-in-out",
  },
};

export default theme;
