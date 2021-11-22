import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import {
  FunctionComponent,
  ClassComponent,
  LegacyConsumerClassComponent,
  Context,
  LegacyProvider
} from "./App";
import PropTypes from "prop-types";

Enzyme.configure({ adapter: new Adapter() });

const Provider = ({ children }) => (
  <Context.Provider value="test">{children}</Context.Provider>
);

const LegacyProviderWithValue = ({ children }) => (
  <LegacyProvider value="test">{children}</LegacyProvider>
);

const METHODS = ["shallow", "mount"];
const COMPONENTS = [
  FunctionComponent,
  ClassComponent,
  LegacyConsumerClassComponent
];

const CONTEXT_CONFIGS = [
  [
    "wrappingComponent: Provider",
    {
      wrappingComponent: Provider
    }
  ],
  [
    "wrappingComponent: LegacyProvider",
    {
      wrappingComponent: LegacyProviderWithValue
    }
  ],
  [
    "context prop",
    {
      context: {
        value: "test"
      },
      childContextTypes: {
        value: PropTypes.string
      }
    }
  ]
];

for (let [configType, config] of CONTEXT_CONFIGS) {
  describe(`Config: ${configType}`, () => {
    for (let Component of COMPONENTS) {
      describe(`Component: ${Component.name}`, () => {
        for (let method of METHODS) {
          describe(`Method: ${method}`, () => {
            const tree = Enzyme[method](<Component />, config);

            it("correct render with " + method, () => {
              expect(tree.text()).toBe("test");
            });

            it("get context with " + method, () => {
              expect(tree.context("value")).toBe("test");
            });
          });
        };
      });
    }
  });
}

// describe("New context API: ", () => {
//   describe("FunctionComponent", () => {
//     METHODS.forEach((method) => {
//       const tree = Enzyme[method](<FunctionComponent />);

//       it("should check context with " + method, () => {
//         expect(tree.text()).toBe("test");
//       });
//     });
//   });

//   describe("FunctionComponent", () => {
//     ["shallow", "mount", "render"].map((method) => {
//       const tree = Enzyme[method](<FunctionComponent />, {
//         wrappingComponent: Provider
//       });

//       return it("should check context with " + method, () => {
//         expect(tree.text()).toBe("test");
//       });
//     });
//   });
// });

// describe("LegacyConsumerClassComponent: ", () => {
//   describe("With Provider", () => {
//     ["shallow", "mount", "render"].map((method) => {
//       const tree = Enzyme[method](<ClassComponent />, {
//         wrappingComponent: Provider
//       });

//       return it("should check context with " + method, () => {
//         expect(tree.text()).toBe("test");
//       });
//     });
//   });

//   describe("Without Provider, with context", () => {
//     const tree = mount(<LegacyConsumerClassComponent />, {
//       context: {
//         value: "test"
//       },
//       childContextTypes: {
//         value: PropTypes.string
//       }
//     });
//     it("should check context with shallow", () => {
//       expect(tree.context("value")).toBe("test");
//     });

//     it("should check context with mount", () => {
//       expect(tree.context("value")).toBe("test");
//     });
//   });
// });
