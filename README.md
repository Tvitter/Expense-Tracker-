AI Expense Tracker

Full-stack personal finance application featuring secure user authentication and comprehensive expense tracking. Built with React, TypeScript, and Node.js, this application helps users monitor spending patterns through intuitive data visualizations while maintaining robust security standards. The frontend utilizes Tailwind CSS for responsive design and Chart.js for interactive financial dashboards, while the backend employs Express.js with JWT authentication and MongoDB for data persistence.

Key features include a complete authentication system with email/password login, "Remember Me" functionality using localStorage, and protected API routes. Users can create, edit, and categorize expenses with date filtering capabilities. The dashboard presents spending analytics through dynamic charts showing monthly trends and category-wise breakdowns. The architecture follows modern best practices with TypeScript interfaces for type safety, React context for state management, and modular Express routes.

The technical stack combines React 18 with Vite for frontend tooling, while the backend uses Node.js 20 with Express middleware for request handling. MongoDB Atlas provides cloud database storage with Mongoose schemas enforcing data structure. Security measures include bcrypt password hashing, HTTP-only cookies for JWT storage, and CORS protection. The codebase is organized with clear separation between client-side components (organized by features) and server-side MVC structure (controllers, models, routes).

Additiona of gen AI in the form of AI advisor is also included in the project , the way user can ask about managing expenses and get advice from AI. It uses API key from open source AI platform 'mistral'. 
