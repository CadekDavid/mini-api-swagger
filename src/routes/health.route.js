import { Router } from 'express';
const router = Router();

/**
 * Jednoduchý healthcheck
 */
router.get('/', (req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() });
});

export default router;
