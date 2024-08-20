"use client";

import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/customTheme";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
