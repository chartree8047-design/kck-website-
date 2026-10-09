import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({base:'./',publicDir:'../../assets/forest-story',build:{outDir:'dist'},plugins:[react()]});
