const connection = require('./config/connection');

const api = app => {
  if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  // route to get all tasks
  app.get('/api/', (req, res) => {
    connection.query(
      `SELECT 
      tasks.id AS id,
      tasks.completedAt AS completedAt,
      tasks.taskName AS task,
      groups.groupName AS \`group\`,
      GROUP_CONCAT(task_dependencies.dependencyId) AS dependencyIds
    FROM tasks 
    JOIN groups on tasks.group_id = groups.id
    LEFT JOIN task_dependencies ON task_dependencies.taskId = tasks.id
    GROUP BY tasks.id`,
      (err, data) => {
        const formattedJson = data.map(entry => {
          let { completedAt, dependencyIds } = entry;
          if (completedAt === '0000-00-00 00:00:00') completedAt = null;
          if (dependencyIds === null) dependencyIds = [];
          else dependencyIds = dependencyIds.split(',').map(str => parseInt(str, 10));
          return { ...entry, completedAt, dependencyIds };
        });
        res.json(formattedJson);
        // console.log('getting all tasks');
      }
    );
  });
  // route to update tasks
};

module.exports = api;
