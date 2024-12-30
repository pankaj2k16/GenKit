// filepath: /d:/Project/NodeJS/GenKit/backend/src/controllers/greetingController.js
exports.getGreeting = (req, res) => {
  const userName = req.query.userName;
  res.send(`${userName} Hello World!`);
  
};