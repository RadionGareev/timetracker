const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Импорт роутов
const userRoutes = require('./api/users');
const taskRoutes = require('./api/tasks');
const reportRoutes = require('./api/reports');
const fileRoutes = require('./api/files');
const geolocationRoutes = require('./api/geolocation');

const app = express();
const PORT = process.env.PORT || 3000;

// Базовые middleware
app.use(cors()); // Для управления кросс-доменными запросами
app.use(bodyParser.json()); // Для парсинга JSON-запросов
app.use(morgan('dev')); // Логирование запросов в режиме разработки

// Роуты
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/geolocation', geolocationRoutes);

// Обработка несуществующих маршрутов
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
