# Reiss Designer Wear 3D Frontend

This project is a React + Vite frontend for a 3D fashion customization website. It allows users to browse dress models, open a live 3D customizer, adjust colors and textures, upload artwork, and save their personalized design through a backend API.

## Overview

The application is built around a 3D frock customization workflow powered by React Three Fiber and Drei. Users can:

- browse available 3D frock designs
- preview models directly in the browser
- customize multiple dress parts with live color updates
- upload images and apply them as decals or repeating textures
- register, log in, and manage their saved custom design

## Main Features

- 3D product gallery with interactive model previews
- Real-time frock customization
- Separate controls for top, belt, buckle, and bottom colors
- Front decal image upload for the top section
- Bottom texture upload with repeat scaling
- Customer registration and login flow
- Profile management with profile picture upload
- Shared client state using Valtio
- API-driven persistence for customers and frock designs

## Tech Stack

- React 18
- Vite
- React Router DOM
- React Three Fiber
- Drei
- Three.js
- Valtio
- Axios
- React Hook Form
- Bootstrap and Bootstrap Icons
- SweetAlert2
- Framer Motion

## Project Structure

```text
src/
	canvas/          3D scene setup, camera rig, backdrop, and models
	components/      UI controls, gallery, uploads, and customizer panels
	pages/           Route-level pages such as Products, Login, Register, Profile, Manage
	store/           Global app state with Valtio
```

## Routes

- `/` - landing page with brand intro and 3D product gallery
- `/login` - customer login
- `/register` - customer registration
- `/profile` - customer profile and profile image updates
- `/manage` - frock customization and save flow

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm
- A running backend server on `http://localhost:8080`

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will start with Vite, usually at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Backend Requirements

This frontend expects a backend API at `http://localhost:8080` with endpoints used by the current implementation, including:

- `GET /frock` to load available frock designs
- `POST /frock` to save a customized frock
- `POST /auth` to authenticate users
- `POST /customer` to register or update a customer
- `POST /upload` to upload images
- `GET /proxy/:id` to serve uploaded images and textures for the 3D scene

If the backend is not running or these endpoints differ, the gallery, authentication flow, uploads, and saved customization features will not work correctly.

## 3D Customization Flow

1. Open the products page.
2. Hover a 3D frock card and choose Customize.
3. Log in if required.
4. Use the control panels to update colors, upload images, and adjust image scale or repeat.
5. Finalize the design to save it through the backend.

## Notes

- The current implementation is focused mainly on frock customization.
- Shirt customization appears to be scaffolded but not completed yet.
- Some uploaded assets are currently handled through backend-driven Google Drive style IDs.

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Future Improvements

- Complete the shirt customization flow
- Add admin/customer/order pages for the unfinished navigation items
- Move API base URLs into environment variables
- Add loading, empty, and error states for API requests
- Add tests for routes, forms, and customizer behavior

## Authoring Note

This README reflects the current frontend implementation in this repository and its present backend assumptions.
