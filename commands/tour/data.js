module.exports = (rows) => {
  return {
    count: rows[0].count,
    locked: rows[0].locked==='FALSE'?false:true,
    groups: rows[0].groups.split(','),
  };
};
