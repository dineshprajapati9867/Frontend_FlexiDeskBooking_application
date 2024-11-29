import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Inventory from "./pages/flexiBooking/Inventort";
import Inventort from "./pages/flexiBooking/Inventort";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "./pages/DataContext";
import { NewBookingContextProvider } from "./context_API/NewBookingContext";
import RightSidebar from "./Components/Rightsidebar";
import NewBooking from "./Components/NewBooking";
import Home from "./pages/Home";
import BookingDetails from "./Components/BookingDetails";


const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NewBookingContextProvider>
            <DataProvider>
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar />
                  <div className="flex-1 overflow-auto ">
                    <Routes>
                      <Route path="/inventory" element={<Inventort />} />
                      <Route path="/booking-details" element={<BookingDetails/>} />
                    </Routes>
                  </div>
                </div>
                <div className="h-screen fixed top-0 right-0 z-10 ">
                  <RightSidebar />
                </div>
              </div>
            </DataProvider>
          </NewBookingContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
