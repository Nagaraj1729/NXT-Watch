import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  onToggleTheme: () => {},
  savedVideos: [],
  saveOrRemoveVideo: () => {},
})

export default ThemeContext
