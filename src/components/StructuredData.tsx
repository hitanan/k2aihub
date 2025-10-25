'use client';

import React from 'react';

interface StructuredDataProps {
  data: object;
}

/**
 * A component to inject JSON-LD structured data into the page head.
 * This is crucial for LLM SEO as it provides a clear, machine-readable
 * format for search engines to understand the content.
 * @param {StructuredDataProps} props The props for the component.
 * @param {object} props.data The JSON-LD data object.
 * @returns A script tag with the JSON-LD data.
 */
export default function StructuredData({ data }: StructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
