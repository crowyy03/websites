# Инструкция по деплою Green 28

## Шаги для публикации на GitHub:

1. **Создайте репозиторий на GitHub:**
   - Перейдите на https://github.com/new
   - Название: `green28` (или любое другое)
   - Сделайте репозиторий публичным (для GitHub Pages)
   - НЕ добавляйте README, .gitignore или лицензию (они уже есть)

2. **Подключите удаленный репозиторий и загрузите код:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/green28.git
   git push -u origin main
   ```

3. **Настройте GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Сохраните

4. **Соберите проект для продакшена:**
   ```bash
   npm run build
   ```

5. **Деплой через GitHub Actions (опционально):**
   - Создайте файл `.github/workflows/deploy.yml`
   - При каждом пуше в main будет автоматически собираться и деплоиться сайт

## Альтернативный вариант - Vercel/Netlify:

### Vercel:
```bash
npm install -g vercel
vercel
```

### Netlify:
- Перетащите папку `dist` на https://app.netlify.com/drop

## URL после деплоя:
- GitHub Pages: `https://YOUR_USERNAME.github.io/green28/`
- Vercel: автоматически сгенерируется
- Netlify: автоматически сгенерируется

