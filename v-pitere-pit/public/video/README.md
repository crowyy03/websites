# Видео на главном экране (Hero)

Чтобы фон на главной странице воспроизводился во всех браузерах, нужен файл **MP4 (H.264)**.

## Что сделать

1. **Положи сюда файл** с именем **`hero.mp4`** (в эту же папку `public/video/`).

2. **Если у тебя только .mov**, конвертируй в MP4 **без звука**:

   - **Через терминал (нужен ffmpeg):**
     ```bash
     ffmpeg -i путь/к/твоему/видео.mov -an -c:v libx264 -movflags +faststart -y public/video/hero.mp4
     ```
     Пример для файла на рабочем столе:
     ```bash
     cd /Users/Voronin/Desktop/work/websites/v-pitere-pit
     ffmpeg -i /Users/Voronin/Desktop/work/1.mov -an -c:v libx264 -movflags +faststart -y public/video/hero.mp4
     ```

   - **Без ffmpeg:** установи его (например, `brew install ffmpeg`) или сконвертируй через любой онлайн-сервис (mov → mp4), затем сохрани результат как `hero.mp4` в папку `public/video/`.

После этого перезапусти dev-сервер или пересобери проект — видео будет подхвачено автоматически.
