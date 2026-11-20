const { Pool } = require('pg');

module.exports = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    (process.env.CI
      ? 'postgres://test:test@localhost:5432/testdb'
      : 'postgres://test:test@localhost:5434/testdb'),
});
