// Allow importing CSS and common asset types in TypeScript files
declare module '*.css'
declare module '*.scss'
declare module '*.sass'

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.webp'

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
