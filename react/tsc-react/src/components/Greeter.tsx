// function Greeter() {
//   return <h1>Hello</h1>;
// }

interface GreeterProps {
  person: string;
}

function Greeter(props: GreeterProps): JSX.Element {
  return <h1>{props.person}</h1>;
}

export default Greeter;
