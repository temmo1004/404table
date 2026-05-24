# 視覺插圖文生圖 Prompts

> 專案：行政不只是雜事：AI 工作價值整理小班實作  
> 目標：補足「這就是我每天遇到的情境」的真實感，提高報名意願與轉換率。  
> 建議風格：台灣職場日常、暖米色、深森林綠、暖金、珊瑚點綴。不要科技藍紫、不要機器人、不要過度卡通。

## 共用視覺規範

- 色彩：warm cream #F7F1E7、deep forest green #1F3A36、warm gold #F4C95D、soft coral #D96B4C
- 人物：台灣女性行政 / 秘書 / 主管助理，25-38 歲，專業但親切
- 場景：台灣中小企業或現代辦公室，桌面有筆電、手機、名片、便利貼、文件夾
- 表情：不要崩潰，要是「有點卡住，但準備整理好」或「鬆一口氣」
- 畫面：乾淨、可放進 landing page，不要過多小字
- 禁止：機器人、科幻 UI、藍紫霓虹、誇張卡通、歐美 stock photo 感、亂手指、亂文字

## 圖 1：主管臨時問資料，行政在 LINE / 名片 / Email 中找資料

用途：痛點區情境圖  
建議檔名：`scenario-search-contact.webp`  
比例：16:10 或 4:3  

Prompt:

```txt
Premium semi-realistic editorial illustration for a Taiwanese landing page. A Taiwanese female administrative assistant sitting at a warm office desk, searching for a contact across her laptop, phone messages, email, name cards, and sticky notes. The scene should feel familiar and slightly pressured but not chaotic: she is focused, not panicking. On the desk: silver laptop with a clean search screen, smartphone with abstract chat bubbles, organized and slightly scattered name cards, notebook, pen, warm coffee cup. Add a small speech bubble from off-screen boss direction with abstract lines only, no readable text. Warm cream background, deep forest green accents, warm gold highlights, soft coral small accent. Modern Taiwanese office, natural window light, premium but approachable, clean composition, no brand logos, no readable text, no distorted hands, no extra fingers.

Style: warm professional editorial illustration, soft semi-realistic, not overly cute, not futuristic, not stock photo, not blue-purple tech style.
Aspect ratio: 16:10
```

替換位置：目前 `index.html` 痛點區的 `scenario-art` SVG。

## 圖 2：整理後的五個工作模板 / 資料夾 mockup

用途：帶走成果區，強化「下課真的有東西」  
建議檔名：`mockup-five-work-templates.webp`  
比例：4:3 或 16:10  

Prompt:

```txt
Premium UI mockup illustration for a Taiwanese course landing page. A clean laptop and smartphone desk scene showing five neatly organized work folders for an administrative assistant. Folder labels in Traditional Chinese: 人脈名片, 主管偏好, 工作紀錄, 履歷素材, AI提問包. The UI should look simple, warm, and practical, like Google Sheet / document / folder organization, not a SaaS dashboard. Desk includes notebook, pen, small plant, name cards, and coffee. Warm cream background, deep forest green interface, warm gold folder highlights, soft coral accent. High readability, elegant and professional, no brand logos, no random text, no messy background.

Style: warm editorial UI mockup, Taiwanese workplace feeling, organized and calm, no futuristic neon, no robot.
Aspect ratio: 4:3
```

替換位置：成果區右側手機 mockup，可替換目前 `.mockup-card` 裡的內嵌手機 SVG/CSS。

## 圖 3：履歷前，把雜事改寫成成果

用途：整理前後範例旁，打中轉職 / 加薪 / 面談受眾  
建議檔名：`resume-value-translation.webp`  
比例：16:10 或 4:3  

Prompt:

```txt
Premium warm desk illustration for a Taiwanese administrative career course landing page. A close-up desk scene showing a resume draft being transformed into a clearer achievement card. Left side: grey messy bullet list represented by abstract lines, not readable text. Right side: clean green achievement card with a few abstract line blocks and checkmarks, suggesting improved resume language. Include a pen, notebook, sticky note, and laptop edge. No real readable text except optional large simple Traditional Chinese title on a card: 成果轉譯. Warm cream paper, deep forest green, warm gold, soft coral accents. Calm hopeful mood, professional, clean, high-end editorial style.

Style: semi-realistic editorial illustration, elegant Taiwanese office, not cartoonish, no brand logos, no random text.
Aspect ratio: 16:10
```

替換位置：整理前後範例區，可新增在 `before-after` 旁或放在 Final CTA 前。

## 圖 4：交接不再把人生重演一次

用途：新增「更輕鬆的 3 件事」或後續廣告圖  
建議檔名：`handover-organized-notes.webp`  
比例：4:3  

Prompt:

```txt
Premium semi-realistic illustration for a Taiwanese workplace course landing page. Two Taiwanese office workers at a desk during a calm handover conversation. One person points to an organized folder system on a laptop while the other takes notes. The mood is relaxed and relieved, not stressful. On the desk: labeled folders represented by simple abstract blocks, notebook, pen, name cards, tea cup. Warm cream office, deep forest green and warm gold accents, soft coral detail, natural light. Show the feeling of "handover is finally clear and easy." No readable small text, no brand logos, no distorted hands.

Style: warm professional editorial illustration, modern Taiwanese office, approachable, not childish, not futuristic.
Aspect ratio: 4:3
```

替換位置：可放在「上完課後，你會更輕鬆的 3 件事」段落下方，或作為社群宣傳圖。

## 圖 5：Hero 主視覺替換版

用途：取代目前內嵌 SVG 主視覺，讓第一屏更有真實感  
建議檔名：`hero-admin-ai-value.webp`  
比例：1:1  

Prompt:

```txt
Premium realistic editorial image for a Taiwanese landing page. A 30-year-old Taiwanese female administrative professional or executive assistant sitting at a clean office desk, using AI on a laptop to organize her work value. She wears a warm beige blazer and white blouse, natural makeup, calm confident expression, looking relieved as if her scattered work finally has structure. On the desk: silver laptop, phone with abstract chat bubbles, organized name cards, notebook, pen, sticky notes, small plant, coffee cup. Warm natural window light, soft cream background, deep forest green accents, warm gold highlights. Leave some clean negative space for landing page layout. Professional but approachable, high-end editorial photography or semi-realistic illustration, no brand logos, no readable text, no distorted hands, no extra fingers.

Style: premium Taiwanese workplace, warm, calm, feminine professional, not overly corporate, not stock photo cheesy, not futuristic AI neon.
Aspect ratio: 1:1
```

替換位置：Hero 右側 `.portrait-card`。

## 設計交付建議

優先產圖順序：

1. `scenario-search-contact.webp`：最能打中痛點，先放痛點區。
2. `mockup-five-work-templates.webp`：最能提高成果可信度。
3. `resume-value-translation.webp`：最能提高轉職 / 履歷受眾轉換。
4. `hero-admin-ai-value.webp`：如果時間足夠，再替換首屏主視覺。
5. `handover-organized-notes.webp`：可作為後續社群素材或頁面補圖。

網頁替換方式：

- 大圖輸出 WebP，建議寬度 1200-1600px。
- 放入 `images/` 資料夾。
- 對應 `<img src="images/檔名.webp" alt="...">` 替換目前內嵌 SVG。
- 保留 `border-radius: 8px`、柔和陰影與暖米色底，維持頁面一致性。
