What was the most challenging Git step?

- For me, the most challenging part of this Git workflow was dealing with the "non-fast-forward" error. It's a tricky one because it means the branch on the remote server has been updated with new commits, and your local copy is now "behind." You can't just push your changes and hope for the best; you have to first pull the other person's changes, which merges them into your branch, and then push the combined history back up

How did Vue components show reusability?

- Vue components are awesome because they're like a reusable stamp for your web page. You create a single, perfect stamp for something like a StudentCard, and then you can stamp it as many times as you want, just passing in different information for each student. This saves you from having to build the same thing from scratch over and over again.

How would you extend this app?
- I would extend this app by adding features that make it more dynamic and interactive. The first thing would be to add a search or filter bar above the student cards. This would involve creating a new component just for the search input, which would then communicate with the main app component to filter the list of students displayed. This way, users could quickly find a specific student by typing their name. Another great next step would be to introduce routing. Right now, the app is just one page, but with a router, we could make each student card clickable. Clicking on a card would take you to a brand new "Student Details" page that shows more in-depth information. This would make the app feel more like a full-fledged website, all while building on the foundation of reusable components we've already created.
