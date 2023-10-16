import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return <div className='App'>
      <MethodsAsPropsParent />
  </div>;
}

export default App;
