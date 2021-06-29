Быстрая настройка Tailwind CLI

echo node_modules/ >> .gitignore
npm init -y 
npm i -d tailwindcss@latest postcss@latest autoprefixer@latest cssnano@latest

mkdir src
touch src/styles.css
npx tailwindcss init

вставить в tailwind.config.js:
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.jsx',
    './dist/**/*.vue',
  ],

npx tailwindcss -i ./src/styles.css -o ./dist/tailwind.css --watch
touch dist/index.html


Продакшн в GitBash
NODE_ENV=production npx tailwindcss -i ./src/styles.css -o ./dist/compiled.css --minify

Продакшн в PowerShell
$env:NODE_ENV="production"
npx tailwindcss -i ./src/styles.css -o ./dist/compiled.css --minify