import { Route, Routes } from 'react-router-dom'
import { PostPage } from './pages/PostPage';
import { PostsPage } from './pages/PostsPage';
import { SearchPage } from './pages/SearchPage';

function App() {

  return (
<Routes>
  <Route path="/" element={<PostsPage />}></Route>
  <Route path="/post/:id" element={<PostPage />}></Route>
  <Route path="/search" element={<SearchPage />}></Route>
</Routes>
  );
}

export default App;
