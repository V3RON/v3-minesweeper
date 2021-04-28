import { FunctionComponent, h, options } from 'preact';
import { Provider } from 'react-redux';

import './style';
import store from './store/store';
import { Router } from './components/Router';

// Fix: Cannot set property '__h' of null
options.debounceRendering = setTimeout;

const App: FunctionComponent = () => {
	return (
		<div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
			<Provider store={store}>
				<Router />
			</Provider>
		</div>
	);
};

export default App;
