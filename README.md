# LHG Mining Website

Este proyecto es una recreación de la página web de LHG Mining utilizando React, TypeScript, Vite y Tailwind CSS.

## Características

- Diseño moderno y responsive basado en la web original de LHG Mining
- Desarrollado con React y TypeScript para una mejor calidad de código
- Utiliza Tailwind CSS para un diseño flexible y consistente
- Optimizado para rendimiento con Vite
- Componentes interactivos como galería de imágenes con lightbox
- Navegación intuitiva y experiencia de usuario optimizada

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Icons

## Estructura del proyecto

```
lhg_web/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewsSection.tsx
│   │   ├── OperationsSection.tsx
│   │   └── SustainabilitySection.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Instalación

1. Clona este repositorio
2. Navega al directorio del proyecto
3. Instala las dependencias:

```bash
cd lhg_web
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en http://localhost:3000

## Producción

Para construir la versión de producción:

```bash
npm run build
```

Para previsualizar la versión de producción:

```bash
npm run preview
```

## Personalización

- Los colores principales y la tipografía se pueden modificar en `tailwind.config.js`
- Para cambiar las imágenes, actualiza las URLs en los componentes respectivos
- Puedes agregar o modificar secciones editando el archivo `App.tsx` y los componentes correspondientes

## Licencia

Este proyecto es solo para fines educativos y de demostración.

## Autor

[Tu nombre aquí]
