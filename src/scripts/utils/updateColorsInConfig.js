export default function updateColorsInConfig(
  source,
  customConfig = {},
  defaultColorMap = null,
  customColorMap = null,
) {
  const defaultColors = defaultColorMap || source.colorMap;
  if (!defaultColors) {
    return source;
  }

  const customColors = customColorMap || customConfig.colorMap || {};
  const config = {
    ...source,
  };

  Object.keys(source)
    .filter((key) => key.endsWith('Name'))
    .forEach((key) => {
      const colorName = customConfig[key] || source[key];
      if (!defaultColors[colorName]) return;

      const styleName = key.substr(0, key.length - 4);
      if (source[styleName]
        && !customConfig[styleName]
      ) {
        config[styleName] = customColors[colorName]
          || defaultColors[colorName];
      }
    });

  return config;
}
