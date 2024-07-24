# React + TypeScript User List App

## Features

- User listing with pagination
- Gender filtering
- Search functionality
- User profile with Google Maps and nationality flag

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-app
   npm install
   npm run dev
   ```

Developer Notes:

Component Structure
UserCard: Displays individual user details.
UserList: Renders a list of UserCard components.
Pagination: Handles pagination controls.
Filter: Allows filtering users by gender.
SearchBar: Provides search functionality for users.
UserListPage: Main page displaying the user list with pagination, filter, and search.
UserProfilePage: Displays detailed information for a specific user including a map and nationality flag.

Thought Process:

The application is structured to have reusable and separate components, enhancing maintainability and scalability.
TypeScript types are defined and used across the project to ensure type safety.
Tailwind CSS is used for styling to maintain a consistent and responsive design.
The project includes a service for API calls to hide logic and improve readability.
Pagination, filtering, and search state are managed at the page level to optimize re-renders and maintain performance.
