# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
})
```

# 🌐HealTech API
The ultimate solution for virtual medical consultations.\
🔗 Fast and secure appointments from the comfort of your home.

✨ Main Features\
🗓️ Online Scheduling of Medical Appointments:\
Schedule your virtual consultations with ease.

📂 Access to Medical Records:\
Complete information for accurate diagnoses.

🔄 Appointment Management:\
Administrators have full control to assign available physicians.

🎯 User Stories\
👩‍⚕️ Patient: Schedule virtual consultations without leaving home.

👨‍⚕️ Doctor: Access to patients' medical records during consultations.

👨‍💼 Administrator: Manages appointments and assigns doctors according to availability.


## Technologies Used

- **Express.js**: Web framework for Node.js.
- **JWT (JSON Web Tokens)**: Authentication management.
- **PostgreSQL**: Relational database.
- **Railway**: Deployment platform.
- **dotenv**: Management of environment variables...
- **Sequelize**: ORM to interact with PostgreSQL.
- **Bcrypt**: Password encryption.
- **Cookie-Parser**: Handling of cookies in HTTP requests.
- **Swagger**: API Documentation.

## Installation

1. Clone the repository:

   git clone https://github.com/No-Country-simulation/C22-27-ft-webapp.git

   cd healtech-api/server

**Install dependencies:**

npm install

**Create an .env file in the root of the project and set the following environment variables**

envs

DB_HOST=tu_db_host\
DB_PORT=5432\
DB_USER=tu_usuario\
DB_PASSWORD=tu_contraseña\
DB_NAME=healtech\
JWT_SECRET=tu_secreto\
PORT=3000\

**Start the server:**

npm start

**Endpoints**

Método----------Endpoint--------Descripción

**Authentication**

POST	/auth/login Log in and generate a JWT token. \
POST	/auth/register a new user.

**Patients**

POST	/patients	Create a new patient.\
PUT	/patients/:id	Updates a patient's information.\

**Medical Appointments**

GET	/appointments	List all medical appointments.\
POST	/appointments	Schedule a new appointment.\
PUT	/appointments/:id	Updates an existing appointment.\
DELETE	/appointments/:id	Cancel an appointment.

**Doctor**

POST	/doctors	Register a new doctor.\
PUT	/doctors/:id	Updates a doctor's information.

**Admins**

GET	/admin	List all admin.\
GET	/admin/:id	Displays information for a specific admin.\
POST	/admin	Register a new doctor.\
PUT	/admin/:id	Updates the information of an admin.\
DELETE /admin/:id	Delete an admin.

GET	/admin/doctors	List all doctors.\
GET	/admin/doctors/:id	Displays information from a specific doctor.\
DELETE	/doctors/:id	Eliminates a doctor.

GET	/admin/patients	List all patients.\
GET	/admin/patients/:id	Displays information for a specific patient.\
DELETE	/admin/patients/:id	Delete a patient.

**Swagger**

To access the documentation:

GET /api-docs

**Testing**

Supertest is used for integration testing. Run the tests with:

npm test

**Deployment**

HealTech is deployed on Railway. Set the required environment variables on the platform to match those in the .env file.

**Contribution**

Create a fork of the project.
Create a branch for your feature: git checkout -b feature/new-feature.
Make your changes and commit: git commit -am 'Add new feature'.
Upload your changes: git push origin feature/new-feature.
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For more information or support, please contact:

Email: zapatacamilo86@gmail.com -- valdesmartin@gmail.com
GitHub: https://github.com/Martin-Valdes -- https://github.com/ZapataCamilo

This `README.md` is designed to be clear and useful for both developers and users.