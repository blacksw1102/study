module.exports = {
  apps: [
    {
      script: "app1.js",
      instance: 2,
      exec_mode: "cluster",
    },
  ],
};
