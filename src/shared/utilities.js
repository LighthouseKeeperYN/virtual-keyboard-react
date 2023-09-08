export const applyKeyModifiers = (def, alt, shiftKey, capsLock) => {
  let key = shiftKey ? alt : def;
  if (capsLock) key = shiftKey ? key.toLowerCase() : key.toUpperCase();
  return key;
};
