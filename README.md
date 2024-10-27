# Scrolling Navigation and Section Highlighter App

This project is a simple DOM manipulation app that dynamically builds a navigation menu, highlights sections on scroll, and includes various UI enhancements like smooth scrolling and an auto-hiding navbar. The app also includes a "Scroll to Top" button and slider animations powered by jQuery and AOS (Animate on Scroll) library.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Features
- **Dynamic Navigation Menu**: Builds a navigation menu based on the sections present in the HTML document.
- **Smooth Scrolling**: Smoothly scrolls to sections when clicking navigation links.
- **Active Section Highlighting**: Highlights the active section and updates the navigation link styles as you scroll through the page.
- **Scroll to Top Button**: Shows a button to scroll back to the top when the user scrolls down.
- **Auto-Hide Navbar**: The navbar hides automatically after a period of inactivity while scrolling.
- **Animated Slider and Scroll Animations**: Uses Owl Carousel for sliders and AOS library for scroll animations.

## Getting Started

1. **Clone the Repository**:
   ```bash
- clone https://github.com/your-username/scrolling-nav-highlighter.git
   cd scrolling-nav-highlighter
2. **Open index.html**:
- Simply open index.html in your browser to run the app. No additional setup is needed for a basic run.

## Dependencies
**The app requires**:

- jQuery
- Owl Carousel
- AOS Library
- These dependencies are already included in the project’s index.html file.

## Usage
- Navigation: Click on navigation links to scroll smoothly to the respective sections.
- Scroll to Top Button: Appears when you scroll past the first viewport height. Click it to scroll back to the top.
- Auto-Hide Navbar: The navbar is hidden if there is no scroll activity for 1.5 seconds, helping maximize screen space.
Customization
- Styling: Update CSS classes like .active-link and .navbar-scrolled in the CSS file to customize the look and feel.
- Scroll Offset: Adjust the scrollToSection function's offset to match your navbar's height.
- Animation Timing: Change the AOS animation settings or slider speed in the $(document).ready function for different effects.