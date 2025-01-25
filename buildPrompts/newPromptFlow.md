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
In each pageComponents folder add a blank HeaderInstructions.md file, a blank HeroInstructions.md file and a blank StyleInstructions.md file. The structure should be as follows:
src/app/
├── hd1hr1st1/
│   └── pageComponents/
│       ├── Header.js
│       ├── HeaderInstructions.md
│       ├── Hero.js
│       ├── HeroInstructions.md
│       └── StyleInstructions.md
├── hd2hr2st2/
│   └── pageComponents/
│       ├── Header.js
│       ├── HeaderInstructions.md
│       ├── Hero.js
│       ├── HeroInstructions.md
│       └── StyleInstructions.md
├── hd3hr3st3/
│   └── pageComponents/
│       ├── Header.js
│       ├── HeaderInstructions.md
│       ├── Hero.js
│       ├── HeroInstructions.md
│       └── StyleInstructions.md
├── hd4hr4st4/
│   └── pageComponents/
│       ├── Header.js
│       ├── HeaderInstructions.md
│       ├── Hero.js
│       ├── HeroInstructions.md
│       └── StyleInstructions.md
└── hd5hr5st5/
    └── pageComponents/
        ├── Header.js
        ├── HeaderInstructions.md
        ├── Hero.js
        ├── HeroInstructions.md
        └── StyleInstructions.md

# Section 3:
# Step 9:
Add the instructions from from the styles json files located in utils to their appropriate instruction markdown files in the relevant pages.

# Step 10:
Do it for all the other pages.

# Section 4:
# Step 11:
Create the Hero.js and Header.js files in each pageComponents folder for hd1hr1st1, hd2hr2st, hd3hr3st3, hd4hr4st4, hd5hr5st5 with the instructions from the instructions.md files following the style instructions in the styleInstructions.md file. 

# Step 12:
Make sure all images are fetched from unsplash and the logos are svg illustrations.

# Step 13:
Error: Invalid src prop (https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80) on `next/image`, hostname "images.unsplash.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
    at defaultLoader (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/shared/lib/image-loader.js:51:27)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/shared/lib/get-img-props.js:100:36)
    at Array.map (<anonymous>)
    at generateImgAttrs (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/shared/lib/get-img-props.js:100:24)
    at getImgProps (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/shared/lib/get-img-props.js:405:27)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/image-component.js:276:82)
    at react-stack-bottom-frame (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:23610:20)
    at renderWithHooks (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:4646:22)
    at updateForwardRef (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:7776:19)
    at beginWork (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:10020:18)
    at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:544:16)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15064:22)
    at workLoopSync (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:14888:41)
    at renderRootSync (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:14868:11)
    at performWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:14394:44)
    at performWorkOnRootViaSchedulerTask (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15955:7)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:44:48)





