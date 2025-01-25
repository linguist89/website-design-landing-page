# Step 1:
In the src/components directory, create a Header.js file and a LandingPage.js file. The header should have three buttons in the right-hand corner: About, Settings and Login. And there should be a cool logo in the left corner.

The landingPage should display in two columns images from unsplash in a fixed square size - 5 images.

# Step 2:
Add the header and the LandingPage to the page.js. Remove everything else from the page.js

# Step 3:

The images should be fetched from the unsplash API and the logos should be svg illustrations. It shouldn't be the unsplash API that requires any API, just the link to publicly available unsplash images.

# Step 4:
All styling should be TailwindCSS, no css files

# Section 2:
# Step 5:
[Add header, hero and styles]
Create pages which can be navigated to in src\app for the variations of headerStyles, HeroStyles and styles together with relevant names of the pages. Just create the pages with the following naming convention for each should be header[option]-hero[option]-style[option] as follows: hd1hr1st1, hd2hr2st2, etc.

# Step 6:
[Add LandingPage]
Make the images navigable to the pages with the page name as the title on the image.

# Step 7:
In each page, create a pageComponents folder and add Header.js and Hero.js files. The Header.js should just display the name of the page as the title. The Hero.js should display the name of the page as the title. The folder structure should be as follows:
src/app/
├── hd1hr1st1/
│   ├── pageComponents/
│   │   ├── Header.js
│   │   └── Hero.js
│   └── page.js
├── hd2hr2st2/
│   ├── pageComponents/
│   │   ├── Header.js
│   │   └── Hero.js
│   └── page.js
├── hd3hr3st3/
│   ├── pageComponents/
│   │   ├── Header.js
│   │   └── Hero.js
│   └── page.js
├── hd4hr4st4/
│   ├── pageComponents/
│   │   ├── Header.js
│   │   └── Hero.js
│   └── page.js
└── hd5hr5st5/
    ├── pageComponents/
    │   ├── Header.js
    │   └── Hero.js
    └── page.js

# Step 8:
In each pageComponents folder add a blank HeaderInstructions.md file, a blank HeroInstructions.md file and a blank StyleInstructions.md file.



