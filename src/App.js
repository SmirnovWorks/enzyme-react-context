import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const Context = createContext();

export function FunctionComponent() {
  const value = useContext(Context);
  return <>{value}</>;
}

export class ClassComponent extends React.Component {
  render() {
    return <Context.Consumer>{(value) => <>{value}</>}</Context.Consumer>;
  }
}

export class LegacyProvider extends React.Component {
  getChildContext() {
    return { value: "test" };
  }

  render() {
    return <>{this.props.children}</>;
  }
}

LegacyProvider.childContextTypes = {
  value: PropTypes.string
};

export class LegacyConsumerClassComponent extends React.Component {
  render() {
    return <>{this.context.value}</>;
  }
}

LegacyConsumerClassComponent.contextTypes = {
  value: PropTypes.string
};

export default function App() {
  return (
    <div className="App">
      <Context.Provider value="test">
        <FunctionComponent />
        <ClassComponent />
      </Context.Provider>
      <LegacyProvider>
        <LegacyConsumerClassComponent />
      </LegacyProvider>
    </div>
  );
}
