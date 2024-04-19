import "./App.css";
import CurrentUser from "./ConnectNEU/Users/CurrentUser";
import { Provider } from "react-redux";
import store from "./ConnectNEU/store";
import ConnectNEU from "./ConnectNEU";


function App() {
	return (
		<div className="App">
			<Provider store={store}>
<CurrentUser>
	<ConnectNEU/>
			{/* <HashRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Navigate to="/Home" />} />
					<Route path="/Home/" element={<Home />} />
					<Route path="/Login/*" element={<Login />} />
					<Route path="/Account/*" element={<Account />} />
					<Route path="/Account/Profile/:userId" element={<Profile />} />
					<Route path="/Account/Profile" element={<Profile />} />
					<Route path="/Details/*" element={<h1>Details</h1>} />
					<Route path="/Search/:query/*" element={<Search />} />
				</Routes>
			</HashRouter> */}
			</CurrentUser>
	</Provider>
		</div>
		
	);
}

export default App;
