# Home

ng build --prod --base-href 'https://sheldonchaves.github.io/home/'

git subtree push --prefix dist origin gh-pages

git push origin --delete gh-pages

Step 1

Remove the dist directory from the project’s .gitignore file (it’s ignored by default by Yeoman).

Step 2

Make sure git knows about your subtree (the subfolder with your site).

git add dist && git commit -m "Initial dist subtree commit"
Step 3

Use subtree push to send it to the gh-pages branch on GitHub.

git subtree push --prefix dist origin gh-pages
Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.

If you do this on a regular basis, you could also create a script containing the following somewhere in your path:

#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
Which lets you type commands like:

git gh-deploy path/to/your/site