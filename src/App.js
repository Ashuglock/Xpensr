import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";




function App() {
  return (
    <Router>
      <Header/>
         <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/add-expense" element={<AddExpense/>}></Route>              
            </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
