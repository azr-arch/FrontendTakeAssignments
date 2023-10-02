# City Tabs Project

## Description
This project is a web application that displays property listings. The properties are organized under city tabs, with each tab representing a different city. The application is designed to show only four tabs at a time. By default, the first tab is active and its respective properties are rendered. When a user clicks on any other tab, it becomes active and its respective properties are displayed.

The properties are displayed as cards, with three cards in each row. Each property card is designed to look similar to the image provided in the project specifications (not pixel-perfect but should look similar). 

There is a "Show More" button that, when clicked, loads three new properties under the active tab. 

When a property card is clicked, the application navigates to the property page at `/property/:id`, where `:id` is the unique identifier of the property. The same property card is reused on this page.

## Demo

[here](https://frontend-take-assignments-ehgq.vercel.app/)

## Technology Stack
- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

## Setup and Installation

1. Clone the repository.
2. Change directory using `cd sellerapp2`.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Usage

1. Open the application in your web browser.
2. Click on a city tab to view properties from that city.
3. Click on "Show More" to load more properties.
4. Click on a property card to view more details about that property.

Please note that this is a basic structure of your README file, you might need to add or modify sections according to your project requirements.
