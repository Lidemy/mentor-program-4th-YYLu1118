## 解釋前後端的差異

**前端**是我們看得到的畫面，主要由html (網頁內容）css (頁面美觀）javescript（頁面功能）所組成。

**後端**是我們看不到的地方，處理request存到database、server回傳response等運作的程序。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 我透過瀏覽器，在 Google 首頁的搜尋框內搜尋 JavaScript

2. 我按 Enter 後，我的作業系統交由網路卡，送出這個 request 到 Google 的 server （伺服器）

3. Google 會把此 request 存到 database（數據庫）

4. 存完成功後，server 會透過作業系統交由網路卡回傳一個 HTML 格式的 response 給瀏覽器

5. 瀏覽器去解析後，再由作業系統呈現出有 CSS (頁面美觀）JaveScript（頁面功能） 的樣貌給我們

## 3 個「課程沒有提到」的 command line 指令並且說明功用

- **less file**：使用分頁的方式顯示檔案內容
- **bell**：響鈴開關，意思是檔案傳輸完成後是否有鈴聲提醒 ; 默認是關閉的
- **mput**：使用當前檔案傳輸類型,將檔案複製到遠端電腦
