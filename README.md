# Evaluate News Stories with Natural Language Processing (NLP) Project
## Udacity Front End Web Developer Nanodegree Program

The aim of this project is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. NLP functionality is provided by the [Meaning Cloud API](https://www.meaningcloud.com/products/sentiment-analysis).

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, you are introduced to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning to create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. 

This is the Wikipedia definition of Natural language processing (NLP):

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Dependencies
- @babel/runtime
- body-parser
- cors
- dotenv
- express
- node-fetch

## Developer Dependencies
- @babel/core
- @babel/plugin-transform-runtime
- @babel/preset-env
- babel-loader
- css-loader
- css-minimizer-webpack-plugin
- html-webpack-plugin
- jest
- mini-css-extract-plugin
- node-sass
- sass-loader
- style-loader
- terser-webpack-plugin
- webpack
- webpack-cli
- webpack-dev-server
- workbox-webpack-plugin

## Installation instructions
1. Either [clone the repository](https://github.com/AxelPilot/evaluate-news-nlp.git) from Github.com or [download it as a zip file](https://github.com/AxelPilot/evaluate-news-nlp/archive/refs/heads/master.zip).
2. Install the dependencies
	- Open a terminal or command prompt
	- Navigate to the project root folder
	- Run `npm install`

3. Sign up for an API key at [MeaningCloud.com](https://www.meaningcloud.com/developer/create-account).

4. Configure environment variables using the dotenv package
	- Create a new `.env` file in the root folder of your project
	- Store the API key in the `.env` file like this:
	```
	API_KEY=**************************
	```
5. Build project
	- Open a terminal or command prompt
	- Navigate to the project root folder
	- Run the command `npm run build`

6. Start the server
	- Run the command `npm run start`
7. Open the browser at http://localhost:8081/
