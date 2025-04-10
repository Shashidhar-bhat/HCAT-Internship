# 🚀 Internship Progress Summary – Weeks 1 to 3

Welcome to my internship progress overview! This document outlines the topics covered, tools used, and hands-on tasks completed during the first three weeks of the program. It demonstrates my journey in setting up the development environment, understanding key software principles, and building practical web development skills.

---

## 📅 Week 1: Introduction & Environment Setup

### 🔹 Topics Covered:
- Introduction to **Health Catalyst**
- Introduction to **SWAT Team Squad**
- Overview of the Internship Program
- Setting professional and technical expectations

### 🛠 Tools Installed and Configured:
- IDE (Visual Studio Code)
- **Git** for version control
- **Node.js** runtime environment
- GitHub account setup and project cloning

---

## 📅 Week 2: Software Fundamentals & Web Basics

### 🔹 Concepts Learned:
- **SOLID Principles** – Writing maintainable and scalable code
- **OOP Concepts** – Classes, Objects, Inheritance, Polymorphism, Encapsulation, Abstraction

### 🔧 Git & Version Control:
- Branching and merging
- Creating and reviewing pull requests (PRs)
- Collaborating using GitHub workflows

### 🌐 HTML Fundamentals:
- Structure of a webpage using semantic elements
- Creating **forms** and **tables**
- Tags: `form`, `input`, `label`, `table`, `thead`, `tbody`, `tr`, `td`, etc.

### 📜 JavaScript Essentials:
- Variables and data types
- Functions and scopes
- Basic DOM manipulation
- Event handling using `addEventListener`

---

## 📅 Week 3: Styling & Interactivity

### 🎨 CSS Topics:
- Styling Basics: `color`, `font-family`, `background`, `padding`, `margin`
- CSS **Box Model**: Content → Padding → Border → Margin
- Selectors: Element, ID, Class, Combinators
- **Positioning**: `static`, `relative`, `absolute`, `fixed`, `sticky`
- **Flexbox** and **CSS Grid** for responsive layouts

### 🧠 JavaScript DOM & Debugging:
- Selecting and modifying DOM elements
- Validating user inputs using JS
- Using browser tools for debugging: Console, Breakpoints, Inspect Elements

---

## 🛠 Hands-On Assignment

### 🔧 Project: Contact Us Form

**Objective:**  
Build a functional contact form with validation and interactivity.

**Features Implemented:**
- Form with fields: Name, Email, Message
- Input validation using JavaScript (e.g., required fields, valid email)
- Interactive behaviors: show/hide messages, button click effects
- Styling using Flexbox and Grid

**Sample Code:**
```html
<form onsubmit="return validateForm()">
  <input type="text" id="name" placeholder="Your Name">
  <input type="email" id="email" placeholder="Your Email">
  <textarea id="message" placeholder="Your Message"></textarea>
  <button type="submit">Submit</button>
</form>
<p id="success" style="display: none;">Form submitted successfully!</p>
