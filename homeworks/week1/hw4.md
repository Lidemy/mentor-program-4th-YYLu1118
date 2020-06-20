## 跟你朋友介紹 Git

### ★ 什麼是 Git 呢？
Git 是幫檔案做版本控制的程式 ; 管理不同的檔案版本。

### ★ 為什麼要用 Git 呢？
因為可以解決多人協作的困難，且 Git 可有效管理多筆檔案。

### ★ Git 的版本控制概念
開資料夾的概念，並以好幾位的亂碼命名資料夾避免資料重複。
1. **需要新版本**：開一個資料夾
2. **不想加入版本控制**：不要加入資料夾
3. **避免版本號衝突**：用看似亂數的東西當作資料夾名稱
4. **知道最新版本**：用一個檔案來存
5. **記住最新版本**：用一個檔案來存
**Git 就是在幫我們做以上的這些事情。**

### ★ Git 最重要的概念有兩個
1. **Commit** （新建版本＝新的資料夾）
2. **Branch** （新開分支）

***

### ★ Git 指令
- **git init**：init 亦為 initial 初始化，指令下去後，電腦就知道這個資料夾要用 Git 去做版本控制。
- **git status**：檢視狀態
![](https://static.coderbridge.com/img/YYLu1118/c0fafce88ee24bf99e44d755277b2b5d.png)
檔案有兩種狀態：
1. **untracked**：沒有加入版本控制的檔案
2. **staged**：要加入版本控制的檔案
- **git rm --cached 檔案**：將檔案移回 untracked 狀態

**新建版本**
- **git add.**：全部檔案加入 Git 版本控制
- **git add 檔案 **：此 檔案 加入版本控制
- **git commit**：新建一個版本
- **git commit - m "xxx(版本敘述)"**：m 亦為 message，新建一個叫“xxx”的版本
- **git commit - am "new file"**：new file 就會被放入版本控制，一起 commit。a 亦為 all 的意思。有在 staged 區的檔案才可用。較方便。

**看歷史紀錄**
- **git log**：看歷史紀錄
- **git diff**：看此次更改了什麼東西（按q可退出）

**回到過去**
- **git checkout 版本名稱**：變回某版本的狀態
- **git checkout master**：回到最新 lastest 的版本
- **git - oneline**：得到簡短版的狀態

**忽略** 
- **.gitignore**：要忽略的版本

***

### ★ 基本指令複習
#### Step 0. 
`git init` 先讓資料夾可被 git 控制
#### Step 1.
`.gitignore` 建立 .gitignore 忽略不要的檔案
（此檔案會被排除在資料夾外）
#### Step 2.
`git add.` 先把所有的資料夾進版本控制 
（把所有移進資料夾）
#### Step 3.
`git commit - am` `"init"` 建立第一個 commit 
（建立一個新版本＝資料夾）

***

### 以資料夾來比喻
1. 加入版本 `git add.`
=> 把東西放入 temp 資料夾
2. 新建立版本 `git commit` `"版本敘述"`
=> 把 temp 資料夾複製並改名為版本名稱
3. 切換版本 `git check` `檔案名稱`
=> 去某一個資料夾下

***

### ★ 什麼是 Branch 分支 呢？
在兩條 branch 上可以平行同時做開發。一邊 debug 一邊做新功能開發，並可將兩個 branch 做合併 merge。
> 分支可以將修改紀錄分開儲存, 不同的分支不會互相影響。在與他人共同開發一個專案的同時, 可能會遇到同時發布多種不同版本的情況, 這時候就可以依照功能使用個別的分支做開發, 完成後再將新功能合併進來。

![](https://static.coderbridge.com/img/YYLu1118/3689e95bfed94405ac8175fa92cb7b63.png)

***

### ★ Master 分支
master 是最主要的分支

***

### ★ Branch 指令
**新建或刪除**
- **git branch - v**：會得到 master 這個分支
- **git branch new feature**：開一個叫 new feature 的分支
- **git bransh - d new-feature**：刪掉 new feature 這個分支。d 亦為 delete。

**切換分支**
- **git checkout branch-name**：切換到後面接的 branch 名稱。

**合併分支**
- **git merge new-feature**：把 new-feature 合併進來，new-feature 是被動被合併進去。

***

### ★ 遇到衝突 Conflict 怎麼辦？
需要**手動**來解決。
終極端會顯示有衝突 conflict。以`git status`去顯示，得到要 merge 的兩個檔案都被 modified 了。
![](https://static.coderbridge.com/img/YYLu1118/6484d39f1733406c83687d9cd2a47e3f.png)
點開檔案，會顯示出兩個檔案衝突的地方。
![](https://static.coderbridge.com/img/YYLu1118/9afc23a324c0418ca6f4724cf359f692.png)
手動去更改檔案，並存檔。
![](https://static.coderbridge.com/img/YYLu1118/555e742057ef418395618b30224ccfec.png)

***

### ★ Git vs GitHub
**Git** 是版本控制的程式
**GitHub** 其中一個功能是放 Git repository的地方，完成多人寫作的地方。
**我們一定會用到 Git，不一定會用到 GitHub ; **
**但用到 GitHub，一定會用到 Git。**

***

### ★ 如何將自己電腦的 git repository 放到 GitHub 上？
到自己的 GitHub 上，按右上的 ＋ 鍵，選擇 New repository。
![](https://static.coderbridge.com/img/YYLu1118/61e23db3b9794d3b9e8fb2bcc5b2756d.png)
設定 repository 名稱及隱私設定，完成後按下綠色 Create repository 按鍵。
![](https://static.coderbridge.com/img/YYLu1118/802599e679ef4f2db7bea9e31afb5e83.png)
跳出此頁面，GitHub 會很貼心地告訴我們要怎麼做。

**加一個叫 origin 的遠端，到 https 這個位置。
再將本地的 origin，push 推上 origin master 的這個 branch。**
![](https://static.coderbridge.com/img/YYLu1118/9b9e2cd817ec4497a90f7f8ae4eba605.png)
到自己的終極端做此兩件事。
![](https://static.coderbridge.com/img/YYLu1118/d2e9d7dab52346b2b310f37de6e1af0a.png)
GitHub 網站重新整理後，會得到新的頁面，並可選取剛剛 push 上去的 master 這個 branch。![](https://static.coderbridge.com/img/YYLu1118/fdb45d5568d347388a629e1f9b7d251c.png)

***

### ★ 介紹 Push 指令，將本地最新的版本 push 到遠端

**狀況 A. 有檔案被更改或更新**：
1. 先將檔案儲存並加入git `commit - am` `"github (版本敘述）"`。
2. 再推上 github 的 master branch `git push` `-u (可省略）``master`
![](https://static.coderbridge.com/img/YYLu1118/2ac576fd1f644e43b7d8e40c987c8077.png)

**狀況 B. 新增 branch 後，push 上 github 同步**
1. 新增 名叫 hey 的 branch 
`git branch` `hey`
2. 切換到 hey branch
`git checkout` `hey`
3. 推到 ｇithub 同步
`git push orgin` `hey`

***

### ★ 介紹 Pull 指令，將遠端最新的版本 拉到本地

GitHub 上可直接更改檔案並 commit 的功能，當 GitHub 上檔案有被改，可使用 `pull` 指令來拉檔案到本機端做同步。
`git pull origin` `master`

**有可能會遇到衝突 conflict**
就一樣以手動解決。

***

### ★ 抓 GitHub 的 repository 到自己電腦
按下 clone，做 download 或是複製 SSH 到自己本機終極端使用 `git clone` `網址` 貼上即可。但因編輯權限且不是原創者，故自己在本機端做檔案的調整時，是不能 push 回原本的地方的。
![](https://static.coderbridge.com/img/YYLu1118/fde23c31900948b8a77f44ca4d78bee3.png)

如果真的很想擁有此檔案，也想做更改，可以改用 GitHub 上的 **Fork** 功能，按了之後選擇要複製到的帳號即可。
![](https://static.coderbridge.com/img/YYLu1118/0eaeca68440e4604b8b28eb9616a24b1.png)

***

### ★ Git 的狀況劇

#### A. commit message 打錯字了怎麼辦
使用 `commit --amend` 指令去做修正

#### B. 我 commit 了可是我又不想 commit 了
**解決方法 1.** `git reset HEAD^` `--hard`
剛剛上一個 commit 的內容，全部洗掉，不要了。

**解決方法 2.** `git reset HEAD^` `--soft`
或 `git reset HEAD^` 直接是預設成soft
會顯示出剛剛上一個 commit 不要了，但修改的東西還是要留著。

#### C. 我還沒 commit，但我改的東西我不想要了
使用 `git checkout -- ` + `<檔案名稱>` 即可回到上一個 commit

#### D. 我想改 branch 的名字
使用 `git branch -m ` + `<新 branch 名稱>` 去做更改

#### E. 想摘下遠端的 branch 給你
使用 `git checkout` `<想要抓的 branch 名稱>` 去下載下來

***

### ★ 什麼是 git hook
什麼是 Hook? ＝發生某事的時候通知我
eg. 當別人 commit 的時候通知我

每個 git 檔案資料夾中都有一個 .git 隱藏資料，在裡面會有一個 hooks 的的資料夾。
通常是用來檢查檔案中是否有一些帳號密碼在程式裡、或有沒有改到不該改的東西、程式碼是否有符合規範。這些規範都可以放進 hooks 裡面，就不用每個人手動一一去做檢查。
![](https://static.coderbridge.com/img/YYLu1118/c27f2c0824b84e909de0667e342799e2.png)
