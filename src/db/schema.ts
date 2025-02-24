import { int, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('posts_table', {
  id: serial().primaryKey(),
  createdAt: text().notNull(),
  deletedAt: text().default("NULL"),
  description: text().notNull(),
  fileName: text().notNull(),
  postName: varchar({length: 255}).notNull(),
  updatedAt: text().notNull(),
  view: int().notNull().default(0),
});
