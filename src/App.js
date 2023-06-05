import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import './App.css'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
  }

  ToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onSaveOrRemoveVideo = newVideo => {
    const {savedVideos} = this.state
    const isAlreadyExist = savedVideos.some(video => video.id === newVideo.id)
    if (isAlreadyExist) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          video => video.id !== newVideo.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, newVideo],
      }))
    }
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          onToggleTheme: this.ToggleTheme,
          savedVideos,
          saveOrRemoveVideo: this.onSaveOrRemoveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <NotFound />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
