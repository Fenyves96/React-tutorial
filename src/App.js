import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleParent from './components/LifecycleParent';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentRegComp from './components/ParentRegComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './PortalDemo';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      {/* <LifecycleParent /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <Greet name="Bruce" children= "asd"/>
      <Greet name="Kelly"/>
      <Greet name="Tom"/>
      <Welcome name="Welcome!"/> */}
      {/* <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
       */}
      {/* <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet primary={true} />
      <Inline /> */}
      {/* <FragmentDemo />
      <Table />
      <ParentRegComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      <ErrorBoundary>
        <Hero heroname="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="SuperMan"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroname="Joker"></Hero>
      </ErrorBoundary>

    </div>
  );
}

export default App;
