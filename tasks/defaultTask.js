module.exports = {
  schedule: 'every 5 mins',
  type: 'text', // cron, recur (http://bunkat.github.io/later)
  task: function() {
    console.log('Hello World');
  }
};
