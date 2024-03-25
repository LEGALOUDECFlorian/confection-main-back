import expressJSDocSwagger from "express-jsdoc-swagger";

const options = {
  info: {
    version: "1.0.0",
    title: "Confection-Main",
    description: "Documentation API d'un site e-commerce pour les petits créateurs",
  },
  baseDir: import.meta.url.substring(7, import.meta.url.lastIndexOf("/")),
  // On analyse tous les fichiers du projet
  filesPattern: "../**/*.js",
  // URL où sera disponible la page de documentation
  swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE || "/api-docs",
  // Activation de la documentation à travers une route de l'API
  exposeApiDocs: true,
  apiDocsPath: "/api/docs",
};

/**
 * Swagger middleware factory
 * @param {object} app application Express
 * @returns {object} middleware Express JSDoc Swagger pour la création de la documentation web
 */
export default (app) => expressJSDocSwagger(app)(options);
