import Header from './components/header';
import TabsContent from './components/tabs.content';
import { increment } from './redux/counter/counter.slide';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <TabsContent />
      <div>

        <div style={{ textAlign: "center" }}>
          <div>Count = {count}</div>
          <button className="btn btn-success" onClick={() => dispatch(increment())}>Increase +1</button>
        </div>
      </div>
    </>
  )
}

export default App
