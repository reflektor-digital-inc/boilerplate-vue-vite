const pleaseUseYarn = () => {
  const isUsingYarn = process.env.npm_config_user_agent.includes('yarn');
  if (!isUsingYarn) {
    console.info('\n🧶 Please use yarn for this project.\n');
    process.exit(1);
  }
};

pleaseUseYarn();
