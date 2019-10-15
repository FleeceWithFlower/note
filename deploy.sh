set -e
git add .
git commit -m"new"
git push origin master
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:FleeceWithFlower/note.git master:gh-pages
cd -
git add -A
git commit -m 'new'
git push origin master
cd -
cd docs/blog/My
git commit -a -m"new"
git push
