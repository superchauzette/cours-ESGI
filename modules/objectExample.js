module.exports = {
  isLoding: true,
  endLoding: () => {
    this.isLoding = false;
  },
  fetchData: () => {
    return setTimeout(() => console.log("success"), 1000);
  }
};
