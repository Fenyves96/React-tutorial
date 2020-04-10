import React from 'react';

import './App.css';

import ComponentC from './components/tutorial/ComponentC';
import { UserProvider } from './components/tutorial/UserContext';
import PostList from './components/http/PostList';


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
      {/* <ErrorBoundary>
        <Hero heroname="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="SuperMan"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroname="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter name="asd" />
      <HoverCounter /> */}
      {/* <HoverCounterTwo />
      <ClickCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Máté' : 'Anonymus'} /> */}
      {/* <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>} />
      <Counter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>} /> */}
      {/* <UserProvider value="Máté">
        <ComponentC />
      </UserProvider> */}
      <PostList />
    </div>
  );
}

export default App;
