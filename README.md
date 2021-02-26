# Personal Portfolio Website

Created with [Gatsby](https://www.gatsbyjs.org)

## Features

- One Page Layout with
- programmatically created sections from .mdx files
- extensible
- color theme
- language selection
- responsive design

## Technologies used

- Gatsby
- GraphQL
- React
- typography.js
- Markdown

## Live example

- [here](https://www.tobias-moeller.de) you can see how i use this project customized for my own portfolio.

---

# Structure

Short Description how it all plays together

```
📦src
 ┣ 📂components           # all functional components
 ┃ ┣ 📂Content
 ┃ ┣ 📂Context            # context component for language and theme toggles
 ┃ ┣ 📂FluidImage         # component to insert bigger pictures without big load time impact
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┣ 📂Layout
 ┃ ┣ 📂NotFoundSection
 ┃ ┣ 📂ProjectImage       # used to get matching image by order for your project slideshow
 ┃ ┣ 📂Projects           # project slideshow containing your projects markdown files content
 ┃ ┣ 📂SEO                # automated meta tags with Open Graph Meta Tags and Twitter Cards
 ┃ ┗ 📂SkillList          # automated display option for skill-icons
 ┣ 📂images
 ┃ ┣ 📂icons              # put the Icons for your SkillList here
 ┃ ┣ 📂images             # put the images you want to use with FluidImage here
 ┃ ┗ 📂projects           # put your project picures here
 ┃   ┣ 📜project1.jpg     # one picture for each project, matching your project order
 ┃   ┗ 📜project2.jpg
 ┣ 📂pages
 ┣ 📂projects             # put your projects here
 ┃ ┣ 📜project1_de.mdx
 ┃ ┣ 📜project1_en.mdx
 ┃ ┣ 📜project2_de.mdx
 ┃ ┗ 📜project2_en.mdx
 ┣ 📂sections             # website sections (can be reduced or expanded)
 ┃ ┣ 📜about_de.mdx
 ┃ ┣ 📜about_en.mdx
 ┃ ┣ 📜contact_de.mdx
 ┃ ┣ 📜contact_en.mdx
 ┃ ┣ 📜projects_de.mdx
 ┃ ┣ 📜projects_en.mdx
 ┃ ┣ 📜skills_de.mdx
 ┃ ┗ 📜skills_en.mdx
 ┗ 📂utils
   ┣ 📜personal.css       # for additional css tweaking
   ┗ 📜typography.js      # sitewide typography theme
```

## gatsby-config.js

In the `gatsby-config.js` file you can set some meta information for your site which gets used by a `<SEO />` component and con be individually changed for each page.
The _personal_ variable enables working on this project as a blank template and have personal information in seperate folders (they also get ignored by git): _false_ uses `images, projects, sections`, _true_ uses `pers_images, pers_projects, pers_sections`.

```javascript
const personal = false;

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Showcase of some of Tobias Möller's recent work`,
    titleTemplate: "Tobias Möller's %s",
    url: `https://www.tobias-moeller.de`,
    image: `/images/tobiasmoeller.png`,
  },
  plugins: [],
};
```

## Pages

You can add additional pages to the `pages`folder, but there is no automated navigation for it and the project is build with a one page layout in mind.

This however is the place where you can change pagespecific Metainformation by adding some of the following possible props to the `<SEO />` component: _title, description, image, article_.

## Sections

You can add sections to the site by adding .mdx Markdown files to the `sections` folder. They get automatically generated onto your `index.js` page.
This Automation uses frontmatter to set the following things:

- title: defines the Navigation link and the section id for smooth scrolling
- lang: used to switch between languages (atm only de / en)
- order: defines the order in which the sections are displayed

```markdown
---
title: about
lang: en
order: 1
---

import FluidImage from "../components/FluidImage/FluidImage";

<FluidImage imageName="generic_profile.jpeg" imageClass="profile-picture" imageAlt="Profile Picture" />

# Hello World,

## this ist a basic structure for a section

Content
```

### FluidImage

As we work with .mdx files we can write JSX and use the `<FluidImage />` component to make use of the `gatsby-image` plugin which helps us optimize loading times with larger images.
This Component takes an _imageName_ which has to be the exact file name of a file that sits inside the `src/images/images` folder. The _imageClass_ and _imageAlt_ define the html class- and alt-tag and can be chosen individually.

## Special Sections

The components `<SkillList />` and `<Projects />` are there to add additional functionality to a potential skills and projects section.

### SkillList

The `<SkillList />` component automatically generates a list of icons inside a section. The icons have to be inside the `src/images/icons` folder.

It expects an Array of filenames inside the _skills_-property. Additionally you can add an Array of Captions (property: _skillCaptions_) for each icon (has to be the same order) and an _iconWidth_ to determine its size.

Here is an example of how to use it inside a section markdown file:

```markdown
---
title: skills
lang: en
order: 2
---

import SkillList from "../components/SkillList/SkillList";

export const skills = [
"javascript",
"react",
];
export const skillCaptions = [
"JavaScript",
"React",
];

<SkillList skills={skills} skillCaptions={skillCaptions} iconWidth={64} />
```

### Projects

The `<Projects />` component creates a slideshow of all the markdown files (seperated by language) inside the `projects` folder.

Here is an example of how it gets used inside a section markdown file.

```markdown
---
title: projects
lang: en
order: 3
---

import Projects from "../components/Projects/Projects";

## Here are some of my projects

Feel free to ask me about anything.

<Projects />
```

### Projects markdown files

The projects markdown files are built in a similar pattern to the section files:

```markdown
---
title: Schoolproject 1
order: 1
lang: en
projectWebsite: "#"
---

import ProjectImage from "../components/ProjectImage/ProjectImage";

<h2>
  <a href={props.projectWebsite}>{props.projectTitle}</a>
</h2>

<ProjectImage
  currentProject={props.currentProject}
  projectWebsite={props.projectWebsite}
  projectTitle={props.projectTitle}
/>

### Descriptionheader

Content
```

The example above uses the frontmatter to make things like the _title_ and _projectWebsite_ available as variables and pass them dynamically to the header and the `<ProjectImage />` component.
_order_ once again defines the displayed order of the projects inside the slideshow and _lang_ makes it possible to define different markdowns for different languages and toggle between them.
