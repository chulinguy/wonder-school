DROP DATABASE if exists wonder_school;
CREATE DATABASE wonder_school; 
USE wonder_school;

CREATE TABLE groups (
  id INT(5) auto_increment,
  groupName VARCHAR(255) NOT null,
  PRIMARY KEY (id)
);

CREATE TABLE tasks (
  id INT(5) auto_increment,
  group_id INT,
  completedAt TIMESTAMP DEFAULT 0,
  taskName VARCHAR(255) NOT null,
  PRIMARY KEY (id),
  FOREIGN KEY (group_id)
    REFERENCES groups(id)
);

CREATE TABLE task_dependencies (
  id INT(5) auto_increment,
  taskId INT NOT null,
  dependencyId INT NOT null, 
  PRIMARY KEY (id),
  FOREIGN KEY (taskId)
    REFERENCES tasks(id),
  FOREIGN KEY (dependencyId)
    REFERENCES tasks(id)
);
