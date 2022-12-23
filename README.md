# Process

The process was quite straightforward in this project. There were no big obstacles, I would just get the data from the API and then display it. API I used was [https://documenter.getpostman.com/view/10808728/SzS8rjbc](https://documenter.getpostman.com/view/10808728/SzS8rjbc). I would get every country and then data for that country. I was thinking of how to represent every country and found a react NPM package that can display a country flag by the country code. The NPM package was called [react-country-flags](https://www.npmjs.com/package/react-country-flags).

I also wanted there to be a searching ability so I added a search bar that matches the searched string with the country name and filters all of the unnecessary countries. I also added the ability to switch from a dark theme to a light theme. That was possible by adding color variables for dark and light colors and then just switching them in the styled-components based on which mode we are in.

---

### Example
![Covid-19-app](https://user-images.githubusercontent.com/9008571/117864744-6cca4a80-b295-11eb-88d1-0d1a25ea664c.gif)
