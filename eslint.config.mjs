import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'semi': ['error', 'never'], // No semicolons allowed
      'eol-last': ['error', 'always'], // Ensure a newline at the end of the file
      'quotes': ['error', 'single', { 'avoidEscape': true }]
    }
  }
]

export default eslintConfig
