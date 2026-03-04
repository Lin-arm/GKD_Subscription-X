# 以防忘记,记录一下在VScode终端执行的一些命令

# 克隆官方模板
# git clone https://github.com/gkd-kit/subscription-template.git
# cd subscription-template
# npm install






# 检查gkd规则语法
pnpm exec tsx scripts/check.ts
# 生成汇总规则(建议留到 github-Actions 那里运行'build_release')
# pnpm exec tsx scripts/build.ts



# 提交github
git add .
# git add src/apps/com.ss.android.ugc.aweme.lite.ts    # 提交单个文件

git commit -m "feat: 123云盘 局部广告"
# git commit -m "perf: 123云盘 减少代码冗余"
# git commit -m "fix: 123云盘 全屏广告-弹窗广告 #1788"  # 在commit内关联issue
# 提PR时可填   resolves #1774   关联issue

# Git 提交类型及其含义
# git commit -m "feat: 新功能：给项目增加一个新功能"
# git commit -m "fix: 修复 bug"
# git commit -m "perf: 性能优化：提升代码执行效率"
# git commit -m "docs: 文档更新：如 README、注释等"
# git commit -m "style: 代码风格调整：不影响代码逻辑"
# git commit -m "refactor: 代码重构：不新增功能、不修 bug"
# git commit -m "test: 测试相关：添加或修改测试用例"
# git commit -m "chore: 杂务：如构建工具、依赖更新等"
# git commit -m "ci: CI 配置：如 GitHub Actions 修改"
# git commit -m "revert: 回滚：撤销之前的提交"


# 从github拉取并合并
# git pull origin main
git pull --rebase origin main


git push
# 推送到指定分支feature-1
git push origin feature-1

# 查看提交历史
git log --oneline
# 执行撤销 (f8e9d7c)
git revert f8e9d7c
# 按 i 进入插入模式(不需要)
# Esc → :wq → Enter 保存并退出

# 彻底回退
git reset --hard f8e9d7c


# 强制同步Fork仓库与上游仓库一致的步骤：
# 1. 克隆你的 Fork（如果还没克隆）
git clone https://github.com/你的用户名/GKD_subscription.git
cd GKD_subscription

# 2. 添加上游仓库
git remote add upstream https://github.com/AIsouler/GKD_subscription.git

# 3. 获取上游所有更新
git fetch upstream

# 4. 切换到你的 main 分支, (不要用main分支提交AIsouler/GKD_subscription的PR)
git checkout main
# 查看本地分支及其最后一次提交信息
git branch -v
# 强制删除分支`feature-1`
# git branch -D feature-1

# 从上游最新代码创建第一个功能分支`feature-1`
# git checkout -b feature-1 upstream/main


# 5. 强制合并上游更新（这会覆盖你的本地更改）
git reset --hard upstream/main

# 6. 强制推送到你的 Fork
# git push --force origin main
git push --force origin feature-1



# 在分支上改完后,如果要推送到远程分支,需要先拉取远程分支的更新,检查差异,然后再 rebase,最后推送. 下面是具体命令: 
# 先刷新远程引用
git fetch origin

# 然后再检查差异 (docs/refactor-guide 是分支名)
git log --oneline HEAD..origin/docs/refactor-guide

# 然后再 rebase
git rebase origin/docs/refactor-guide

# 最后推送
git push origin docs/refactor-guide



