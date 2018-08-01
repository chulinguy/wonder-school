INSERT INTO groups (groupName) VALUES ('Purchases');
INSERT INTO groups (groupName) VALUES ('Build Airplane');

INSERT INTO tasks (group_id, taskName) VALUES (1, 'Go to the bank');
INSERT INTO tasks (group_id, taskName) VALUES (1, 'Buy hammer');
INSERT INTO tasks (group_id, taskName) VALUES (1, 'Buy wood');
INSERT INTO tasks (group_id, taskName) VALUES (1, 'Buy nails');
INSERT INTO tasks (group_id, taskName) VALUES (1, 'Buy paint');
INSERT INTO tasks (group_id, taskName) VALUES (2, 'Hammer nails into wood');
INSERT INTO tasks (group_id, taskName) VALUES (2, 'Paint wings');
INSERT INTO tasks (group_id, taskName) VALUES (2, 'Have a snack');

INSERT INTO task_dependencies (taskId, dependencyId) VALUES (2, 1);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (3, 1);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (4, 1);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (5, 1);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (6, 2);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (6, 3);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (6, 4);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (7, 5);
INSERT INTO task_dependencies (taskId, dependencyId) VALUES (7, 6);
