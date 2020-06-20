## 交作業流程

### 從 Github 複製一份作業 到自己的電腦裡

1. 到 github 網站中，按下 **clone or download** 去複製作業
![](https://img.onl/RTOVek)

2. 再到自己電腦端的Terminal中貼上
使用`git clone`指令 + 複製好的網址
如：`git clone` `https://github.com/Lidemy/mentor-program-4th-YYLu1118.git`
等待跑完就完成複製到自己的電腦上


### 開一個新 **branch**

1. 剛複製到自己電腦上的會是 **master** (最主要的分支）的 branch，需另開一個新 **branch** 去寫作業或做任何的改動。
使用 `git branch` 指令，後面加上新branch的名稱，即可開新分支。
如：`git branch` `week1`

2. 可使用 `git status` 指令，來**檢視目前位置**位於哪一個 branch上，或是有無檔案**尚未被 commit**

3. 使用 `git checkout` 指令，後面加上要去的分支名稱，即可切換分支。 
如：`git checkout` `week1`


### 做作業 及 推回 Github 上

1. 在 week1 分支下使用 `open. hw1` 打開作業1，開始做作業。

2. 寫完後，在 terminal 上使用指令 `git commit-am`＋`對檔案的敘述`，來加入 git
如：`git commit-am` `week1 完成`

4. **檢查作業**，到 Github 上的 **example** 檢查
![](https://img.onl/7mUAKy)

3. 再將自己電腦上的 week1 推到遠端 Github 上。
如：`git push` `orgin week1`

4. 到 Github 上，發起 **Pull Request**
到 Pull Request 分頁上，按下 **Compare & Pull Request**
或 按下 **New Pull Request**
![](https://img.onl/DfIZDz)

5. 選擇要合併的 branch，選擇 **week1**
增加標題敘述及留言，檢查後，按下 **Create Pull Request** 送出
![](https://img.onl/ER8EYE)

6. 到 learning.lidemy.com **新增作業**
選擇 **week1**
![](https://img.onl/l1jiDO)

7. 回到 Github 複製 PR 連結，並貼上，送出
![](https://img.onl/Nem0xH)

### **同步**遠端及本地端的 master

1. 等作業改完並且 merge 以後，切換到本地端的 master
使用 `git checkout` `master` 作切換

2. 從遠端 Github 把 origin master 拉下來到地端同步
因為遠端 Github 是最新的了
使用 `git pull` `origin master`

3. 再來把本地端的 hw1 刪掉
使用 `git branch -d` `hw1`

### 完成交作業
