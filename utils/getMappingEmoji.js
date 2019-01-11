export default (mood) => {
  switch (mood) {
  case 'Work Out':
    return '🏋️';
  case 'Party Animal':
    return '🎉';
  case 'Relaxing':
    return '😎';
  case 'Working Time':
    return '💻';
  case 'Romantic':
    return '🌹';
  case 'Vacation':
    return '🏖';
  case 'Chill Out':
    return '☕';
  case 'Tipsy Night':
    return '🥂';
  case 'Acoustic Pop':
    return '🎻';
  case 'Hardcore':
    return '🎸';
  case 'Favorite':
    return '⭐';
  default:
    return '🌏';
  }
};
