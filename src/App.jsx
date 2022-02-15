import MyClassComponents from "./MyClassComponents.jsx";
import MyFuncCounter from "./MyFuncCounter.jsx";

export default function App() {
  return (
    <div>
      <h1>Hello from React</h1>
      <MyFuncCounter color='green' text='this is a functional components' sentence='Explanation about class Components'/>
      <MyClassComponents/>
    </div>
  );
}
