"use client";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>QueryProvider</div>;
};

export default QueryProvider;
