import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import ChanelDetail from './components/ChanelDetail.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import SearchFeed from './components/SearchFeed.jsx';
import Navbar from './components/Navbar.jsx';
import Feed from './components/Feed.jsx';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar />
       <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='/chaneldetail/:id' element={<ChanelDetail />}/>
        <Route path='/videodetail/:id' element={<VideoDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
       </Routes>
      </Box>
    </BrowserRouter>
  );
}


export default App;

