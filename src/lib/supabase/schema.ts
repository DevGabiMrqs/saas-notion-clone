import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspaces = pgTable('workspaces', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string'
    }),
    workspaceOwner: uuid('workspace_')
});
