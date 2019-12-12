## What's this blog about?
I'm not sure yet, but I hope it can be a place for people to read articles or stories that encourage them to see life in more positive ways.

## What's this about narwhals?
I like narwhals a lot and I'm sad there's no emoji for them.

## Why is the code so poorly written?
I don't know how to make websites.

## Contributing
Open a pull request to the public/articles folder with your post.

The post should be a text file with the following format:
```
Link for feedback
Title
Name
Date
<whitespace>
Blog body text
```
The text filename needs to be your article title lowercased, with spaces replaced by dashes. For example: "A Cool Story" -> a-cool-story.txt.
You'll also need to include your article title in articles-list.txt.

Merges to master will automatically update https://www.decodingthenarwhal.com.

## What is a pull request?
It's a way to suggest changes to code (or in this case, writing). If you want to open one, follow these steps:
1. Install git on mac: https://www.atlassian.com/git/tutorials/install-git#mac-os-x
2. Go to your terminal.
3. Type `git clone https://github.com/6peterlu/decodingthenarwhal.git` and hit enter.
4. Type `cd decodingthenarwhal` and hit enter.
5. Type `git checkout -b "insert-your-story-title-here"` and hit enter.
6. Open the `decodingthenarwhal` folder in Finder and add your story file, and modify articles-list.txt as well.
7. Go back to terminal.
8. Type `git add .` and hit enter.
9. Type `git commit -m "story"` and hit enter.
10. Type `git push -u origin "insert-your-story-title-here"` and hit enter.
11. Come back to this page, and you should see a highlighted box near the top that has a button that says "Open pull request".
12. Click that button and follow the instructions on the next page to submit the pull request.

## That sounds really hard.
I'll make a better way to submit articles, I promise.

## Why is it called a pull request if it's pushing code?
I don't know.
