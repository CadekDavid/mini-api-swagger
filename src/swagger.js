import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveSwagger(app) {
  const docPath = path.join(__dirname, '..', 'docs', 'openapi.yaml');
  const file = fs.readFileSync(docPath, 'utf8');
  const swaggerDocument = YAML.parse(file);

  // Pozn.: Swagger UI dostupný na /api
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
