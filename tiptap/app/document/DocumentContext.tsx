'use client';
import { useMemo, useEffect, useState, useRef } from 'react';

/**
 * This documentId logic using URL parameters is for demo sharing purposes.
 *
 * IN YOUR REAL APPLICATION:
 * - Use your own document ID system (e.g., from your database, CMS, or file system)
 * - Simply pass your existing document identifier to Velt
 */

// [Velt] Minimal hard-coded current document hook
export type CurrentDocument = {
  documentId: string | null;
  documentName: string;
};

export function useCurrentDocument(): CurrentDocument {
  const [documentId, setDocumentId] = useState<string | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization (React Strict Mode, HMR, etc.)
    if (isInitialized.current) return;

    // 1. Check URL for documentId parameter first
    const urlParams = new URLSearchParams(window.location.search);
    let docId = urlParams.get('documentId');

    if (docId) {
      // Use document ID from URL (shareable link)
      setDocumentId(docId);
      localStorage.setItem('velt-tiptap-document-id', docId);
    } else {
      // 2. Check localStorage for existing document
      const stored = localStorage.getItem('velt-tiptap-document-id');
      if (stored) {
        docId = stored;
      } else {
        // 3. Generate new document ID
        docId = `doc-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        localStorage.setItem('velt-tiptap-document-id', docId);
      }

      // Update URL with document ID for shareability
      const newUrl = `${window.location.pathname}?documentId=${docId}`;
      window.history.pushState({}, '', newUrl);

      setDocumentId(docId);
    }

    isInitialized.current = true;
  }, []);

  return useMemo(
    () => ({
      documentId: documentId,
      documentName: "My Document",
    }),
    [documentId]
  );
}
