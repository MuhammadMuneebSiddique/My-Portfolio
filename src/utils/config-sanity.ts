import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "e7v9fici",
  dataset: "production",
  apiVersion : "2025-04-16",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
