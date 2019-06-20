module.exports = app => {
  require('./start')(app);
  require('./about')(app);
  require('./count')(app);
  require('./source')(app);
};
