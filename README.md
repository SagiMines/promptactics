# Promptactics

<a href="https://promptactics.vercel.app/">
<div align=center>
<img src="https://lh3.googleusercontent.com/pw/AIL4fc9PFy3D_o--_JEZZB6_aHjnTOMEvvrLYiUsBU6-79KozKk2acQywDeas4s3ofbPA0iQoaLLQrDNYlke07H_5KUKkwkZpGC-gbvIWRB6aC5vss2E8ZRcYmzMQ5vGp8XElWwhTsgd3C3_zFOaweip4CeZ=w752-h387-s-no?authuser=3" width=500/>
</div>
</a>
Welcome to Promptactics, an open-source AI prompting tool designed for the modern world. With Promptactics, users can discover, create, and share creative prompts. This platform allows users to sign in, share their prompts with the community, and manage their prompts by editing or deleting them. Promptactics is built using React with Next.js 13 and uses a MongoDB database for data storage. API calls are made using the serverless features of Next.js.

#### **[Live Demo](https://promptactics.vercel.app/)**

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Overview

Promptactics is a creative platform that harnesses the power of AI to provide users with prompts for various creative endeavors, such as writing, art, or brainstorming. Whether you're a writer looking for inspiration or an artist seeking new ideas, Promptactics can spark your creativity.

### Technology Stack

- **Front-end:** Promptactics is developed using React with Next.js 13. This choice of technology ensures a responsive, fast, and SEO-friendly user interface.

- **Database:** The project uses MongoDB to store user-generated prompts and related data, providing scalability and flexibility.

- **API Calls:** API calls are made using the serverless features of Next.js, allowing for efficient and dynamic interactions with the database.

### Features

- **Prompt Discovery:** Users can browse and discover a wide range of creative prompts contributed by the community.

- **Prompt Creation:** Users can create their own prompts and share them with others on the platform.

- **User Authentication:** Secure user authentication system to sign in and manage personal prompts.

- **Prompt Management:** Users can edit or delete their prompts as needed.

## Getting Started

Use the [Live Demo](https://promptactics.vercel.app/)

**Or, install locally:**

To set up Promptactics locally or deploy a similar platform, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/SagiMines/promptactics.git
cd promptactics
```

2. Install the necessary dependencies.

```bash
npm install
```

3. Configure your environment variables for MongoDB & Google connection using - [Environment Variables Guidence](#environment-variables).

4. Run the application locally.

```bash
npm run dev
```

5. Customize the content, styling, and AI prompt generation as per your requirements.

## Environment Variables

To run this project, you will need to add an `.env.local` file to the root of the project with the following environment variables included:

**Google Sign-in:**

`GOOGLE_ID` - Your Google Developers Console ID.  
`GOOGLE_CLIENT_SECRET` - Your Google Developers client ID.

**MongoDB:**

`MONGODB_URI` - Your MongoDB provider URI (e.g ElephantSQL).

## Usage

Once Promptactics is set up, users can:

- Browse and discover creative prompts contributed by the community.
- Create and share their own prompts with others.
- Sign in to manage their prompts, including editing or deleting them.

Start sparking creativity with Promptactics!
