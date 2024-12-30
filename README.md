# GenKit - Full Stack Monorepo Project

This is a full-stack monorepo project using Node.js for the backend and React for the frontend. The project demonstrates a simple greeting application where the backend serves a greeting message and the frontend displays it.

## Project Structure
├── backend/ │ ├── node_modules/ │ ├── src/ │ │ ├── index.js │ │ ├── routes/ │ │ │ └── greeting.js │ │ ├── controllers/ │ │ │ └── greetingController.js │ │ ├── models/ │ │ ├── middlewares/ │ ├── package.json │ ├── .env │ ├── .gitignore │ ├── frontend/ │ ├── node_modules/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ │ └── Greeting.js │ │ ├── App.js │ │ ├── index.js │ ├── package.json │ ├── .env │ ├── .gitignore │ ├── README.md └── .gitignore

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/pankaj2k16/GenKit.git
   cd GenKit
```
#Running the Project
Start both the backend and frontend servers: Navigate to the root directory of the project and run:

This will start both the backend server on http://localhost:3000 and the frontend server on http://localhost:3001.

# Usage
Open your browser and navigate to http://localhost:3001.
The frontend will fetch the greeting message from the backend and display it.
Author
Pankaj Kumar
Personal Website: https://epankaj.com
LinkedIn https://www.linkedin.com/in/pankaj-kumar-it/
Feel free to reach out if you have any questions or suggestions! ```
