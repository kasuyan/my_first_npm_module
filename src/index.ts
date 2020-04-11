const okng = (flg?: boolean): boolean => {
  if (flg) {
    const ran: number = Math.floor(Math.random() * 2);
    return ran % 2 === 0 ? true : false;
  } else if (flg) {
    return true;
  }

  return false;
};

module.exports = okng;
