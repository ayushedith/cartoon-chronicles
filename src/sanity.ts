import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '98fe31m8', // Replace with your Sanity project ID
  dataset: 'production',        // or the dataset you selected
  useCdn: true,                 // `true` for faster, cached responses in production
  apiVersion: '2025-08-12',     // use YYYY-MM-DD format of today's date or later
});

export default client;
