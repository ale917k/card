import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  it("Renders main element", () => {
    const link = shallow(<App />);
    expect(link).toMatchSnapshot();
  });
});
