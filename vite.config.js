import { defineConfig } from 'vite';

const projectName = import.meta.env.PROJECT_NAME || ''; // Access the custom environment variable

export default defineConfig({
  base: `/${projectName}/`,
});
